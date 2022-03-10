import router from './route/router'
import useUserStore from './store/user'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

import pinia from './store/index'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// 在setuo()之外使用pinia store, 请先传入pinia实例
const userStore = useUserStore(pinia)

// 不需要重定向到登陆页的白名单
const whiteList = ['/login', '/404', '/401']

// 返回undefined或者不返回任何东西, 将调用下一个guard
// 返回一个路由, 将重定向到返回的路由
// 返回false, 将取消本次导航
// 参考连接: https://github.com/vuejs/rfcs/blob/master/active-rfcs/0037-router-return-guards.md
router.beforeEach(async (to) => {
  // console.log(from.path + ' -> ' + to.path)
  NProgress.start()
  const token = userStore.token

  if (token) {
    if (to.path !== '/login') {
      const hasUserInfo = userStore.name
      if (!hasUserInfo) {
        userStore.getInfo({ token }).catch(() => {
          return `/login?redirect=${to.path}`
        })
      }
    }
  } else {
    if (whiteList.indexOf(to.path) === -1) {
      return `/login?redirect=${to.fullPath}`
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
