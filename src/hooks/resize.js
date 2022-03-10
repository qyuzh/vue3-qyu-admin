import {
  ref,
  onMounted,
  onBeforeUnmount,
  onActivated,
  onDeactivated,
} from 'vue'

export default function () {
  const state = { chart: null }
  const sidebarElm = ref()

  const chartResizeHandler = () => {
    if (state.chart) {
      state.chart.resize()
    }
  }

  const sidebarResizeHandler = () => {
    setTimeout(() => {
      chartResizeHandler()
    }, 500)
  }

  const initResizeEvent = () => {
    window.addEventListener('resize', chartResizeHandler)
  }

  const destroyResizeEvent = () => {
    window.removeEventListener('resize', chartResizeHandler)
  }

  const initSidebarResizeEvent = () => {
    sidebarElm.value = document.getElementsByClassName('hamburger-container')[0]
    if (sidebarElm.value) {
      sidebarElm.value.addEventListener('transitionend', sidebarResizeHandler)
    }
  }

  const destroySidebarResizeEvent = () => {
    if (sidebarElm.value) {
      sidebarElm.value.removeEventListener(
        'transitionend',
        sidebarResizeHandler
      )
    }
  }

  onMounted(() => {
    initResizeEvent()
    initSidebarResizeEvent()
  })

  onBeforeUnmount(() => {
    destroyResizeEvent()
    destroySidebarResizeEvent()
    if (!state.chart) {
      return
    }
    state.chart.dispose()
    state.chart = null
  })

  onActivated(() => {
    initResizeEvent()
    initSidebarResizeEvent()
  })

  onDeactivated(() => {
    destroyResizeEvent()
    destroySidebarResizeEvent()
  })

  return {
    state,
  }
}
