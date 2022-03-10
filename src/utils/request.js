import axios from 'axios'
// import useMockjsStore from '../../mock'
// import pinia from '../store'

import { ElMessage } from 'element-plus'

// const mockjsStore = useMockjsStore(pinia)

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

service.interceptors.request.use(
  (config) => {
    // if (import.meta.env.DEV && !mockjsStore.activated) {
    //   mockjsStore.startMockjs()
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data

    if (res.code !== 2000) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 3 * 1000,
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 3 * 1000,
    })
    return Promise.reject(error)
  }
)

export default service
