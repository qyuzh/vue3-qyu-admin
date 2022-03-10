<template>
  <div
    :class="className"
    :style="{ height: height, width: width }"
    style="overflow: hidden"
  />
</template>

<script setup>
import { onMounted, getCurrentInstance, nextTick } from 'vue'
import * as echarts from 'echarts'

import resize from '@/hooks/resize.js'
const { state } = resize()

//获取store和router
defineProps({
  className: {
    type: String,
    default: 'chart',
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '300px',
  },
})

onMounted(() => {
  nextTick(() => {
    initChart()
  })
})

const { proxy } = getCurrentInstance()

const initChart = () => {
  state.chart = echarts.init(proxy.$el, 'macarons')
  state.chart.setOption({
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
      textStyle: {
        color: '#fff',
      },
    },
    legend: {
      left: 'center',
      bottom: '10',
      data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts'],
    },
    series: [
      {
        name: 'WEEKLY WRITE ARTICLES',
        type: 'pie',
        roseType: 'radius',
        radius: [15, 95],
        center: ['50%', '38%'],
        data: [
          { value: 320, name: 'Industries' },
          { value: 240, name: 'Technology' },
          { value: 149, name: 'Forex' },
          { value: 100, name: 'Gold' },
          { value: 59, name: 'Forecasts' },
        ],
        animationEasing: 'cubicInOut',
        animationDuration: 2600,
      },
    ],
  })
}
</script>

<style scoped lang="scss"></style>
