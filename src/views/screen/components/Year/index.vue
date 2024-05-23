<template>
  <BorderBox8 reverse class="content">
    <div ref="chartsRef" style="width: 100%; height: 100%"></div>
  </BorderBox8>
</template>

<script setup lang="ts" name="Year">
import { BorderBox8 } from '@newpanjing/datav-vue3'
import useEcharts from '@/hooks/useEcharts'

const chartsRef = ref()

useEcharts(chartsRef, {
  title: {
    text: '散点图',
    link: 'http://www.baidu.com',
    textStyle: {
      color: '#29fcff',
    },
    top: '10px',
    left: '10px',
  },
  xAxis: {
    type: 'category',
    show: true,
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      type: 'scatter',
      data: [200, 265, 443, 887, 264, 680, 900, 800, 1213, 400, 300, 640, 225],
      // symbol: 'diamond',
      symbolSize: 30,
      label: {
        show: true,
        color: '#29fcff',
      },
    },
  ],
  tooltip: {
    backgroundColor: 'rgba(50,50,50, 0.8)',
  },
  grid: {
    top: 70,
    left: 20,
    right: 20,
    bottom: 25,
  },
})
</script>

<style scoped lang="scss">
.content {
  padding: 20px;
}
</style>
