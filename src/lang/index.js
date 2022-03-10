import useAppStore from '@/store/app'
import pinia from '@/store'

const appStore = useAppStore(pinia)

import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'
import elementEsLocale from 'element-plus/lib/locale/lang/es'
import elementJaLocale from 'element-plus/lib/locale/lang/ja'
import enLocale from './locales/en'
import zhLocale from './locales/zh'
import esLocale from './locales/es'
import jaLocale from './locales/ja'

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale,
  },
  es: {
    ...esLocale,
    ...elementEsLocale,
  },
  ja: {
    ...jaLocale,
    ...elementJaLocale,
  },
}

import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  globalInjection: true, // Whether to inject global properties & functions into for each component.
  legacy: false, // you must set `false`, to use Composition API
  locale: appStore.language,
  messages,
})

export default i18n
