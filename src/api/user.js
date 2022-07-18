import request from '@/utils/request'
// 用户登录接口
export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })
}
// 获取用户信息
export const getUserInfo = () => {
  return request({
    url: '/user'
  })
}
// 查看收藏列表
export const getFavoriteList = () => {
  return request({
    url: '/user/favorites'
  })
}
