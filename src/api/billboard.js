import request from '@/utils/request.js'

export function getBillboard(){
  return request({
    url:'/billboard/show',
    method:'get'
  })
}