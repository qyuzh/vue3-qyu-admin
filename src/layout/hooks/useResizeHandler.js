import { onBeforeMount, onMounted, onBeforeUnmount } from 'vue'
import useAppStore from '@/store/app'
import pinia from '@/store'
const appStore = useAppStore(pinia)

const { body } = document
const WIDTH = 992

const isMobile = () => {
  const rect = body.getBoundingClientRect()
  return rect.width - 1 < WIDTH
}

const resizeHandler = () => {
  if (!document.hidden) {
    appStore.toggleDevice(isMobile() ? 'mobile' : 'desktop')
    if (isMobile()) {
      appStore.closeSideBar(true)
    }
  }
}

export default function () {
  onBeforeMount(() => {
    window.addEventListener('resize', resizeHandler)
  })
  onMounted(() => {
    if (isMobile()) {
      appStore.toggleSideBar(isMobile() ? 'mobile' : 'desktop')
      appStore.closeSideBar(true)
    }
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler)
  })
}
