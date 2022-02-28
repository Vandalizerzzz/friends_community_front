import request from '@/utils/request.js'

//注册
export function userRegister(userDTO) {
  return request({
    url: '/ums/user/register',
    method: 'post',
    data: userDTO
  })
}

//登录
export function login(userDTO) {
  return request({
    url: '/ums/user/login',
    method: 'post',
    data: userDTO
  })
}

//登录同时获取前台登录用户的信息
export function getUserInfo() {
  return request({
    url: '/ums/user/info',
    method: 'get',
  })
}