import axios from 'axios'
import { message } from 'ant-design-vue';
// import useUserStore from '@/store/modules/user'

// 创建 axios 实例
const request = axios.create({
  baseURL: import.meta.env.VITE_API_TARGET, // 基础路径（接口地址前缀/api）
  timeout: import.meta.env.VITE_API_TIMEOUT, // 请求超时时间（请求超过5s无论是否成功，都是请求失败）
  withCredentials: true // 跨域时候允许携带凭证
})

// 请求拦截器
request.interceptors.request.use((config) => {
  // const userStore = useUserStore()

  // 如果有 token 则添加到请求头中
  // if (userStore.token) {
  //   config.headers.token = userStore.token
  // }

  // 请求前显示 loading
  // loadingInstance = Loading.service({
  //   lock: true,
  //   text: 'Loading',
  //   background: 'rgba(0, 0, 0, 0.7)',
  // })

  // 返回配置对象
  return config
})

// [响应拦截器]
request.interceptors.response.use(
  // 成功回调
  (response) => {
    // 关闭 loading
    // loadingInstance.close()

    const { code, message: msg, data } = response.data;

    if (code !== 200) {
      message.error(msg)
      return Promise.reject(new Error(msg))
    }

    return Promise.resolve(data)
  },

  // 失败回调（http 请求失败）
  (error) => {
    let msg = ''
    const status = error.response.status // http 状态码

    switch (status) {
      case 401:
        msg = 'TOKEN过期'
        break
      case 403:
        msg = '无权访问'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器出现问题'
        break
      default:
        msg = '网络问题'
        break
    }

    message.error(msg)

    // 关闭 loading
    // loadingInstance.close()

    return Promise.reject(error)
  },
)

// 导出 axios 实例方法
export default request
