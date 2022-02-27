import request from '@/utils/request.js'

export function userRegister(userDTO) {
  return request({
    url: '/ums/user/register',
    method: 'post',
    data: userDTO
  })
}