import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/researcher/list',
    method:'get',
    params:params
  })
}

export function deleteResearcher(params) {
  return request({
    url:'/researcher/delete',
    method:'post',
    params:params
  })
}

export function createResearcher(data) {
  return request({
    url:'/researcher/create',
    method:'post',
    data:data
  })
}

export function updateResearcher(id, data) {
  return request({
    url:'/researcher/update/'+id,
    method:'post',
    data:data
  })
}

export function getResearcher(id) {
  return request({
    url:'/researcher/get/'+id,
    method:'get',
    params:id
  })
}

