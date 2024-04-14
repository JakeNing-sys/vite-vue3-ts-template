import { createRouter, createWebHistory } from 'vue-router'
import { staticRouter, errorRouter } from '@/routers/modules/staticRouter'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (_to, _from, savedPosition) => savedPosition || { top: 0 },
  routes: [...staticRouter, ...errorRouter],
})

export default router
