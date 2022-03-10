<template>
  <div :style="{ height: height, width: width }" style="overflow: hidden">
    LineChart.vue.bak
  </div>
</template>

<script setup>
import { getCurrentInstance, watch, onMounted, nextTick } from 'vue'

import * as echarts from 'echarts'
import resize from '@/hooks/resize.js'
const { state } = resize()

//获取store和router
let { proxy } = getCurrentInstance()
const props = defineProps({
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
    default: '350px',
  },
  autoResize: {
    type: Boolean,
    default: true,
  },
  chartData: {
    type: Object,
    required: true,
  },
})

// const state = reactive({
//   chart: null,
// })
// 普通变量接受实例, tooltip才会显示
// const state = {
//   chart: chart,
// }

watch(
  () => props.chartData,
  (val) => {
    setOptions(val)
  },
  { immediate: false }
)

onMounted(() => {
  nextTick(() => {
    initChart()
  })
})

const initChart = () => {
  state.chart = echarts.init(proxy.$el, 'macarons')
  setOptions(props.chartData)
}

const setOptions = ({ expectedData, actualData } = {}) => {
  state.chart.setOption({
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      boundaryGap: false,
      axisTick: {
        show: false,
      },
    },
    grid: {
      left: 10,
      right: 10,
      bottom: 20,
      top: 30,
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
      padding: [5, 10],
      textStyle: {
        color: '#fff',
      },
    },
    yAxis: {
      axisTick: {
        show: false,
      },
    },
    legend: {
      data: ['expected', 'actual'],
    },
    series: [
      {
        name: 'expected',
        itemStyle: {
          normal: {
            color: '#FF005A',
            lineStyle: {
              color: '#FF005A',
              width: 2,
            },
          },
        },
        smooth: true,
        type: 'line',
        data: expectedData,
        animationDuration: 2800,
        animationEasing: 'cubicInOut',
      },
      {
        name: 'actual',
        smooth: true,
        type: 'line',
        itemStyle: {
          normal: {
            color: '#3888fa',
            lineStyle: {
              color: '#3888fa',
              width: 2,
            },
            areaStyle: {
              color: '#f3f8ff',
            },
          },
        },
        data: actualData,
        animationDuration: 2800,
        animationEasing: 'quadraticOut',
      },
    ],
  })
}
</script>

<style scoped lang="scss"></style>
