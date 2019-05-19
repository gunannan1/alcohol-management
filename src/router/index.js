import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: {title: 'HomePage', icon: 'home'}
    }]
  },
  {
    path: '',
    component: Layout,
    redirect: '/researcher',
    name: 'researcher',
    meta: {title: 'Researcher', icon: 'user'},
    children: [{
      path: 'researcher',
      name: 'researcher',
      component: () => import('@/views/researcher/index'),
      meta: {title: 'List', icon: 'product-list'}
    },
      {
        path: 'addResearcher',
        name: 'addResearcher',
        component: () => import('@/views/researcher/add'),
        meta: {title: 'Add', icon: 'product-add'}
      },
      {
        path: 'updateResearcher',
        name: 'updateResearcher',
        component: () => import('@/views/researcher/update'),
        meta: {title: 'Edit Researcher', icon: 'product-add'},
        hidden: true
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: '/user',
    name: 'user',
    meta: {title: 'User', icon: 'user'},
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/user/index'),
        meta: {title: 'List', icon: 'product-list'}
      },
      {
        path: 'addUser',
        name: 'addUser',
        component: () => import('@/views/user/add'),
        meta: {title: 'Add', icon: 'product-add'}
      },
      {
        path: 'updateUser',
        name: 'updateUser',
        component: () => import('@/views/user/update'),
        meta: {title: 'Edit User', icon: 'product-add'},
        hidden: true
      }
    ]
  },
  {
    path:'',
    component: Layout,
    redirect: '/message',
    name: 'message',
    meta: {title: 'Message', icon: 'sms'},
    children: [
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

