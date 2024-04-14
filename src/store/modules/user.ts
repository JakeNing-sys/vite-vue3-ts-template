import { defineStore } from 'pinia'
import { login } from '@/api/login'
import type { LoginParams } from '@/api/login/types'

const useUserStore = defineStore(
  'User',
  () => {
    /* [ *** state *** ] */
    const token = ref(
      JSON.parse(localStorage.getItem('TOKEN') as string)?.token,
    )

    /* [ *** actions *** ] */
    const userLogin = async (data: LoginParams) => {
      const { promise, resolve, reject } = Promise.withResolvers()

      try {
        const res = await login(data)
        token.value = res
        resolve(res)
      } catch (error) {
        reject(error)
      }

      return promise
    }

    return {
      token,
      userLogin,
    }
  },
  {
    // 插件默认是存储全部
    persist: [
      {
        paths: ['token'], // 值
        key: 'TOKEN', // key
      },
    ],
  },
)

export default useUserStore
