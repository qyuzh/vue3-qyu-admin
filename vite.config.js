import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

// 按需导入element-plus
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import vueI18n from '@intlify/vite-plugin-vue-i18n'

import vueJs from '@vitejs/plugin-vue-jsx'

import { viteMockServe } from 'vite-plugin-mock'
import setting from './src/settings'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      // 按需导入element-plus
      // AutoImport({
      //   resolvers: [ElementPlusResolver()],
      // }),
      // Components({
      //   resolvers: [ElementPlusResolver()],
      // }),

      vueJs(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(__dirname, 'src/icons/common')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
      vueI18n({
        // defaultSFCLang: 'yml',
        compositionOnly: false,

        // you need to set i18n resource including paths !
        // include: path.resolve(__dirname, '@/lang/locales/**'),
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && setting.prodMock,
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
        logger: true,
      }),
    ],
    resolve: {
      // 配置文件别名 @ -> src
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    // 配置.scss预处理
    css: {
      preprocessorOptions: {
        scss: {
          // 全局注入主文件
          additionalData: '@import "@/styles/index.scss";',
        },
      },
      modules: {
        scopeBehaviour: 'local',
      },
    },
    base: setting.base,
  }
})
