import request from '@/utils/request'
export function fetchList(params) {
  return request({
    url:'/user/list',
    method:'get',
    params:params
  })
}

export function deleteUser(params) {
  return request({
    url:'/user/delete',
    method:'post',
    params:params
  })
}

export function createUser(data) {
  return request({
    url:'/user/register',
    method:'post',
    data:data
  })
}

export function updateUser(id, data) {
  return request({
    url:'/user/update/'+id,
    method:'post',
    data:data
  })
}

export function getUser(id) {
  return request({
    url:'/user/get/'+id,
    method:'get',
    params:id
  })
}

