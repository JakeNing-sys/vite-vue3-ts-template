import { createRouter, createWebHistory } from 'vue-router'
import { staticRouter } from '@/router/modules/staticRouter'

const router = createRouter({
  // createWebHistory 模式，在地址栏输入地址跳转路由时，浏览器会刷新; createWebHashHistory 模式不会刷新浏览器。
  history: createWebHistory(),
  scrollBehavior: (_to, _from, savedPosition) => savedPosition || { top: 0 },
  routes: staticRouter,
})

export default router
