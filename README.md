# Framework For Vue3

---

一个基于vue3生态系统的后台方案. 体验地址: [vue3-qyu-admin](#https://qing1023.github.io/vue3-qyu-admin/)

## 技术栈(Technology Stack)

### 主要技术

vue3 + vite2 + vue-router4 + pinia + element-plus + js

### 其他技术

vue-i18n, svg-icon(vite-plugin-svg-icons)

## 文件目录

```js
-- .husky // 占时没弄
-- dist
-- mock // 模拟请求的数据
-- src
 -- api 	// 网络请求
 -- assets  // 情态资源
 -- components // 自定义组件库
 -- hooks // 可重用逻辑, 相当于vue2的mixins, 但可重用有状态逻辑
 -- icons // 雪碧图, iconfonts
 -- lang // 国际化, vue-i18n
 -- layout // 登录后页面结构
 -- route // 路由, vue-router4
 -- store // 全局状态管理, pinia
 -- styles // 全局样式
 -- utils // 工具文件
 -- views // 页面文件夹
 -- App.vue // 入口页面
 -- main.js // 入口文件
 -- mockProdServer.js // 生产环境模拟
 -- permission.js // 鉴权
 -- settings.js // 全局设置
-- 其他配置文件

```

## 项目初始化

创建vite2 + vue3 + js的项目

```sh
yarn create vite vue3-newbee-admin --template vue # 创建vite + vue3 + js的项目
```

上述命令等价于

```sh
yarn global add create-vite
create-vite vue3-newbee-admin --template vue # 基于js的模板
```

## 质量检查和风格检查

质量检查

安装eslint到`devDependencies`

```sh
yarn add -D eslint
```

创建一个配置文件

```sh
yarn create @eslint/config
```

使用`eslint-plugin-vue`插件

```sh
yarn add -D eslint-plugin-vue
```

风格检查

安装`prettier` 和 `eslint-config-prettier`(解决与eslint的冲突)

```sh
yarn add -D prettier eslint-config-prettier
```

两个文件的配置如下

1. `.eslintrc.yml`
2. `.prettierrc.yml`

配置`package.json`命令

```json
{
  //...
  "script": {
    "lint": "eslint src --fix --ext .ts,.tsx,.vue,.js,.jsx",
    "prettier": "prettier --write ."
  }
  //...
}
```

配置 husky + lint-staged

...

## Vue项目运行逻辑

浏览器中输入地址, 如果存在vue-router: 

1. browser starts loading page according to the address
2. vue-router根据地址匹配路由, 加载路由对应的页面
3. 在每次路由跳转时, 可以执行导航守卫(Navigation Guards), 可以重定向或者取消当前跳转

## 图标svg-icon

设置全局可用的图标组件

iconfont图片库: https://www.iconfont.cn/home/index

`vite-plugin-svg-icons`插件用法: https://github.com/vbenjs/vite-plugin-svg-icons

安装

```sh
yarn add vite-plugin-svg-icons -D
```

创建文件夹

```js
-- src
   -- dirName //存放svg图标
   -- SvgIcon.vue //svg组件, 具体内容参见项目对应文件
```

配置vite

```js
// vite.config.js
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(__dirname, 'src/icons/common')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
})	
```

引入

```js
// main.js
// 引入插件vite-plugin-svg-icons的注册脚本
import 'virtual:svg-icons-register'
// 全局注册组件SvgIcon.vue
import svgIcon from '@/icons/SvgIcon.vue'
app.component('SvgIcon', svgIcon)
```

然后可在全局使用, 用法参见`/src/login/LoginIndex.vue`.

## jsconfig.json配置

配置vs code, 让其更好的与我们的具体项目配合. 请参考: https://code.visualstudio.com/docs/languages/jsconfig

```json
// jsconfig.js
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": [
                "src/*"
            ]
        },
        "allowJs": true
    },
    "include": [
        "src/**/*",
        "mock"
    ],
    "exclude": [
        "node_modules",
        "dist"
    ]
}
```

## 国际化(`vue-i18n`)

让app可用以多语言展示.

安装

```sh
yarn add vue-i18n@9
```

创建并配置`vue-i18n`

见`src/lang/index.js`

注册

```js
// 注册vue-i18n
import i18n from '@/lang'
app.use(i18n)
```

语言切换组件

参见`src\lang\LangSelect.vue`

使用i18n custom blocks

需要安装如下插件

```sh
yarn add -D @intlify/vite-plugin-vue-i18n
```

用法参见`src\views\login\LoginIndex.vue`

参考地址: 

+ https://vue-i18n.intlify.dev/guide/advanced/sfc.html
+ https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n

## Vue JSX

Vite + Vue3中使用JSX.

安装插件

```sh
yarn add -D @vitejs/plugin-vue-jsx
```

配置vite2

```js
import vueJs from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJs(),
  ]
})
```

用法

https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx

## Elese
To be continued...