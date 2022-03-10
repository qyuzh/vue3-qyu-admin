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

// 普通变量接受实例, tooltip才会显示
const { state } = resize()

onMounted(() => {
  nextTick(() => {
    initChart()
  })
})

const animationDuration = 6000
const { proxy } = getCurrentInstance()
const initChart = () => {
  state.chart = echarts.init(proxy.$el, 'macarons')
  state.chart.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      textStyle: {
        color: '#fff',
      },
    },
    grid: {
      top: 10,
      left: '2%',
      right: '2%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: 'pageA',
        type: 'bar',
        stack: 'vistors',
        barWidth: '60%',
        data: [79, 52, 200, 334, 390, 330, 220],
        animationDuration,
      },
      {
        name: 'pageB',
        type: 'bar',
        stack: 'vistors',
        barWidth: '60%',
        data: [80, 52, 200, 334, 390, 330, 220],
        animationDuration,
      },
      {
        name: 'pageC',
        type: 'bar',
        stack: 'vistors',
        barWidth: '60%',
        data: [30, 52, 200, 334, 390, 330, 220],
        animationDuration,
      },
    ],
  })
}
</script>
