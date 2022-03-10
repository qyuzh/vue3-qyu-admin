import { defineStore } from 'pinia'
import { login, getInfo, logout } from '@/api/user/login'
import { setToken, getToken, removeToken } from '@/utils/auth'

const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: getToken(),
      name: '',
      avatar: '',
    }
  },
  actions: {
    async login(data) {
      const res = await login(data)
      this.token = res.token
      setToken(res.token)
    },
    async getInfo(token) {
      const res = await getInfo(token)
      this.name = res.info.name
      this.avatar = res.info.avatar
    },
    async logout() {
      await logout(this.token)
      removeToken()
      this.$reset()
    },
    async setToken() {
      return new Promise((resolve) => {
        removeToken() // must remove  token  first
        this.token = getToken()
        resolve()
      })
    },
  },
})

export default useUserStore
