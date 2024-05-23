import { RouteRecordRaw } from 'vue-router'

export const staticRouter: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layouts/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
]

export const errorRouter: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: 'Any',
    redirect: '/404',
  },
]
