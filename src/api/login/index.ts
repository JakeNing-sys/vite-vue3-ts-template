import request from '@/utils/request'
import type { LoginParams, LoginResult, UserInfo, MENULIST } from './types'

enum API {
  LOGIN = '/public/json/login.json',
  USERINFO = '/public/json/userInfo.json',
  MENU_LIST = '/public/json/authMenuList.json',
}

// export const login = (data: LoginParams) =>
//   request.post<any, LoginResult>(API.LOGIN, data)

export const login = (params: LoginParams) => {
  return request<any, LoginResult>({
    url: API.LOGIN,
    method: 'GET',
    params,
  })
}

export const userInfo = () => {
  return request<any, UserInfo>({
    url: API.USERINFO,
    method: 'GET',
  })
}

export const getMenuList = () => {
  return request<any, MENULIST>({
    url: API.MENU_LIST,
    method: 'GET',
  })
}
