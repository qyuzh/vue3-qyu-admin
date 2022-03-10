import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import router from '@/route/router'
app.use(router)

import pinia from './store/index'
app.use(pinia)

import '@/permission'

// 引入element-plus icon
import * as ElIcons from '@element-plus/icons-vue'
Object.keys(ElIcons).forEach((name) => {
  app.component(name, ElIcons[name])
})

// import '@/styles/index.scss'

// Note: mock.js 在axios请求拦截器中开启

// 引入插件vite-plugin-svg-icons的注册脚本
import 'virtual:svg-icons-register'

// 全局注册组件SvgIcon.vue
import svgIcon from '@/icons/SvgIcon.vue'
app.component('SvgIcon', svgIcon)

// 注册vue-i18n
import i18n from '@/lang'
app.use(i18n)

// 完全导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

app.mount('#app')
