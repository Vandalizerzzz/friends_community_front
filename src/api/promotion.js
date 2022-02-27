import request from '@/utils/request.js'

export function getPromotionList() {
  return request({
    url: '/promotion/all',
    method: 'get'
  })
}