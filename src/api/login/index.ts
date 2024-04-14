import request from '@/utils/request'
import type { LoginParams, LoginResult } from './types'

enum API {
  LOGIN = '/admin/acl/index/login',
  USERINFO = '/admin/acl/index/info',
  LOGOUT = '/admin/acl/index/logout',
}

export const login = (data: LoginParams) => request.post<any, LoginResult>(API.LOGIN, data)

export const getUserInfo = () => request.get<any, any>(API.USERINFO)

export const logout = () => request.post<any, any>(API.LOGOUT)