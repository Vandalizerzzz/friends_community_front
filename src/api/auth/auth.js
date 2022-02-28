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