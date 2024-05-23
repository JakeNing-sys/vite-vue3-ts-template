import type { Component } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

// 登录接口类型定义
export interface LoginParams {
  username: string
  password: string
}

export interface LoginResult {
  token: string
}

// 用户信息
export interface UserInfo {
  name: string
  avatar: string
}

export interface Route {
  path: string
  name: string
  component: string | Component
  redirect?: string
  meta: {
    title: string
    icon: string
    hidden?: boolean
  }
  children?: Routes | RouteRecordRaw[]
}

export type Routes = Array<Route>

// 菜单项
export interface MENULIST {
  admin: Routes
  user: Routes
  [key: string]: Routes
}
