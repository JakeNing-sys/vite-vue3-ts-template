import { defineStore } from 'pinia'
import { login, userInfo, getMenuList } from '@/api/login'
import type { LoginParams } from '@/api/login/types'
import useSettingStore from './setting'
import { handleRoutes } from '@/router/modules/dynamicRouter' // resetRouter
import { staticRouter, errorRouter } from '@/router/modules/staticRouter' // 静态路由

const useUserStore = defineStore(
  'User',
  () => {
    /* state */
    const token = ref(JSON.parse(localStorage.getItem('TOKEN') as string) ?? '') // 用户token
    const menuList = ref(staticRouter) // 左侧菜单列表
    const userName = ref('') // 用户名
    const userAvatar = ref('') // 用户头像
    const loginUserName = ref(
      JSON.parse(localStorage.getItem('LOGIN_USER_NAME') as string) ?? '',
    ) //（---）

    /* actions */
    // 登录
    const userLogin = async (data: LoginParams) => {
      const { promise, resolve, reject } = Promise.withResolvers()

      try {
        const res = await login(data)
        loginUserName.value = data.username //（---）

        token.value = res
        getUserInfo()
        resolve(res)
      } catch (error) {
        reject(error)
      }

      return promise
    }

    // 获取用户信息
    const getUserInfo = async () => {
      const { promise, resolve, reject } = Promise.withResolvers()

      try {
        const res = await userInfo()

        userName.value = res.name
        userAvatar.value = res.avatar
        await getMenuListData()
        resolve(res)
      } catch (error) {
        reject(error)
      }

      return promise
    }

    // 获取菜单列表
    const getMenuListData = async () => {
      const { promise, resolve, reject } = Promise.withResolvers()

      try {
        const res = await getMenuList()
        const routes = res[loginUserName.value] ?? [] // 根据用户名获取菜单列表
        const userRouter = handleRoutes(routes) // 处理菜单列表，生成路由
        menuList.value = [...staticRouter, ...userRouter, ...errorRouter] // 合并菜单
        resolve(res)
      } catch (error) {
        reject(error)
      }

      return promise
    }

    // 退出登录
    const userLogout = async () => {
      const { promise, resolve, reject } = Promise.withResolvers()
      const settingStore = useSettingStore()

      try {
        // await logout()
        token.value = ''
        userName.value = ''
        userAvatar.value = ''
        settingStore.menuTabs = []
        menuList.value = staticRouter
        localStorage.removeItem('TOKEN')
        localStorage.removeItem('MENU_TABS')
        // resetRouter() // 清空动态路由
        location.reload() // 刷新页面
        resolve(true)
      } catch (error) {
        reject(error)
      }

      return promise
    }

    return {
      token,
      menuList,
      userName,
      loginUserName,
      userAvatar,
      userLogin,
      getUserInfo,
      userLogout,
    }
  },
  {
    // 插件默认是存储全部
    persist: [
      {
        paths: ['token'], // 值
        key: 'TOKEN', // key
      },
      {
        //（---）
        paths: ['loginUserName'], // 值
        key: 'LOGIN_USER_NAME', // key
      },
    ],
  },
)

export default useUserStore
