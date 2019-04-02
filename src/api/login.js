import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/management/admin/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}


export function logout() {
  return request({
    url: '/management/admin/logout',
    method: 'post'
  })
}
