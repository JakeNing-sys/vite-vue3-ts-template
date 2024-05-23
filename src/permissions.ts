import router from '@/router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import useUserStore from '@/store/modules/user'
import setting from '@/setting'

// 隐藏进度条在页面右上角的 “加载圈” 图标
nprogress.configure({ showSpinner: false })

// 路由白名单
const whitelist: string[] = []

/**
 * 全局路由前置守卫
 * @param to 即将进入的目标路由
 * @param from 当前导航正要离开的路由
 * @param next 一定要调用该方法来 resolve 这个钩子
 */
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  const { token, userName } = storeToRefs(userStore)

  nprogress.start()

  if (token.value) {
    if (to.path === '/login') {
      next({ path: from.path })
    } else {
      if (userName.value) {
        next()
      } else {
        await userStore.getUserInfo()

        // 处理动态路由刷新白屏问题（原因：因为动态路由还没有全部注册完，而路由就已经跳转渲染了）
        next({ ...to, replace: true })
      }
    }
  } else {
    if (whitelist.includes(to.path)) {
      next()
    } else {
      if (to.path === '/login') {
        next()
      } else {
        next({ path: '/login', query: { redirect: to.path } })
      }
    }
  }
})

// 全局路由后置守卫
router.afterEach((to, _from) => {
  // 设置页面标题
  document.title = to.meta.title
    ? `${setting.title} - ${to.meta.title}`
    : setting.title
  nprogress.done()
})
