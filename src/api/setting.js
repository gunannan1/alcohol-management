import request from '@/utils/request'


export function updateSetting(data) {
  return request({
    url:'/setting/update',
    method:'post',
    data:data
  })
}

export function getSetting() {
  return request({
    url:'/setting/get',
    method:'get'
  })
}

