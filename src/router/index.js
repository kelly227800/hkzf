import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hkzf'
  },
  {
    path: '/hkzf',
    redirect: '/hkzf/profile',
    component: () => import('@/views/Hkzf'),
    children: [
      {
        path: 'login',
        component: () => import('@/views/Login')
      },
      {
        path: 'register',
        component: () => import('@/views/Register')
      },
      {
        path: 'profile',
        component: () => import('@/views/Profile')
      },
      {
        path: 'news',
        component: () => import('@/views/News')
      },
      {
        path: 'list',
        component: () => import('@/views/List')
      },
      {
        path: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: 'favorite',
        component: () => import('@/views/Favorite')
      },
      {
        path: 'info',
        component: () => import('@/views/Info')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
