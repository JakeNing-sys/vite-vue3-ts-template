/**
 * 处理后端返回的路由数据，动态生成路由
 */
import type { RouteRecordRaw } from 'vue-router'
import type { Route, Routes } from '@/api/login/types'
import router from '@/router'
import { errorRouter } from '@/router/modules/staticRouter' // 静态路由

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob('@/views/**/*.vue')

export function handleRoutes(routes: Routes): RouteRecordRaw[] {
  const userRouter = routes.map((item: Route) => {
    // 1. 生成路由对象
    const route: Route = {
      path: item.path,
      name: item.name,
      component: getLoadComponent(item.component as string),
      redirect: item.redirect,
      meta: item.meta,
      children: [],
    }

    // 2. 递归处理子路由
    if (item.children && item.children.length > 0) {
      route.children = handleRoutes(item.children as Routes)
    } else {
      delete route.children
    }

    return route
  })

  // 3. 动态添加路由
  userRouter.push(...(errorRouter as Route[])) // 404 报错等页面路由
  userRouter.forEach((item) => {
    router.addRoute(item as RouteRecordRaw)
  })

  return userRouter as RouteRecordRaw[]
}

// 动态加载组件
function getLoadComponent(componentPath: string) {
  const isLayout = componentPath?.includes('/layouts')
  const Layout = () => import(`@/layouts/index.vue`) // 布局组件
  const component = modules[`/src/views${componentPath}.vue`] // 视图组件
  return isLayout ? Layout : component
}

// 重置路由
export function resetRouter() {
  const routers = router.getRoutes()
  const whiteList = ['Login', 'Home', '404', 'Any'] // 不删除静态路由

  routers.map((item) => {
    if (!whiteList.includes(item.name as string)) {
      router.removeRoute(item.name as string)
    }
  })
}
