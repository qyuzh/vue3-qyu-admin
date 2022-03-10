import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from 'vue-router'

import Layout from '@/layout/index.vue'

// import chartsRouter from './modules/charts.js'

// import chartsRouter from './modules/charts'

// const baseURL = '/testforgit'

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/LoginPage.vue'),
  }, // LoginIndex
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true,
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/DashBoard.vue'),
        meta: { title: 'dashboard', icon: 'dashboard' },
      },
    ],
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index.vue'),
        name: 'Guide',
        meta: { title: 'guide', icon: 'guide', noCache: true },
      },
    ],
  },
  {
    path: '/error',
    component: Layout,
    redirect: '/error/401',
    name: 'ErrorPages',
    meta: {
      title: 'errorPages',
      icon: '404',
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401.vue'),
        name: 'Page401',
        meta: { title: 'page401', noCache: true },
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404.vue'),
        name: 'Page404',
        meta: { title: 'page404', noCache: true },
      },
    ],
  },
  {
    path: '/resume',
    component: Layout,
    redirect: '/resume/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/Resume/index.vue'),
        name: 'Resume',
        meta: { title: 'resume', icon: 'people', noCache: true },
      },
    ],
  },
  {
    path: '/todo',
    component: Layout,
    redirect: '/todo/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/TodoList/index.vue'),
        name: 'todo',
        meta: { title: 'todolist', icon: 'todo', noCache: true },
      },
    ],
  },
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/directive',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'Permission',
  //   meta: {
  //     title: 'permission',
  //     icon: 'lock',
  //     roles: ['admin'], // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/DirectivePage.vue'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'directivePermission',
  //         // if do not set roles, means: this page does not require permission
  //       },
  //     },
  //     {
  //       path: 'adminOnly',
  //       component: () => import('@/views/permission/AdminOnly.vue'),
  //       name: 'AdminOnly',
  //       meta: {
  //         title: 'adminOnly',
  //         // if do not set roles, means: this page does not require permission
  //       },
  //     },
  //     {
  //       path: 'editorOnly',
  //       component: () => import('@/views/permission/EditorOnly.vue'),
  //       name: 'EditorOnly',
  //       meta: {
  //         title: 'editorOnly',
  //       },
  //     },
  //   ],
  // },
  { path: '/:catchAll(.*)', redirect: '/404', hidden: true },
]

export const asyncRoutes = []

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes,
})

export default router
