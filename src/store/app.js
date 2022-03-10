import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

import defaultSettings from '@/settings'

const { showSettings, sidebarLogo } = defaultSettings

const useAppStore = defineStore('app', {
  state: () => {
    return {
      language: 'zh',
      sidebar: {
        opened: Cookies.get('sidebarStatus')
          ? !!+Cookies.get('sidebarStatus')
          : true,
      },
      device: 'desktop',
      settings: {
        showSettings: showSettings,
        sidebarLogo: sidebarLogo,
      },
      activeMenu: ''
    }
  },
  actions: {
    setLanguage(language) {
      this.language = language
    },
    toggleSideBar() {
      this.sidebar.opened = !this.sidebar.opened

      if (this.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
    },
    closeSideBar() {
      Cookies.set('sidebarStatus', 0)
      this.sidebar.opened = false
    },
    toggleDevice(device) {
      this.device = device
    },
    changeSettings({ key, value }) {
      if (Object.keys(this.settings).includes(key)) {
        this.settings[key] = value
      }
    },
  },
})

export default useAppStore
