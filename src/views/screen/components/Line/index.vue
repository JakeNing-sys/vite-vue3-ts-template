<template>
  <BorderBox12 class="content">
    <div ref="chartsRef" style="width: 100%; height: 100%"></div>
  </BorderBox12>
</template>

<script setup lang="ts" name="Line">
import { BorderBox12 } from '@newpanjing/datav-vue3'
import useEcharts from '@/hooks/useEcharts'

const chartsRef = ref()

useEcharts(chartsRef, {
  title: {
    text: '折线图',
    textStyle: {
      color: '#29fcff',
    },
    top: 0,
    left: 0,
  },

  xAxis: {
    type: 'category',
    boundaryGap: false, // 坐标轴两边留白
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    splitLine: {
      show: false,
    },
    axisLine: {
      show: true,
    },
  },
  yAxis: {
    splitLine: {
      show: false,
    },
    axisLine: {
      show: true,
    },
  },

  grid: {
    left: 100,
    top: 25,
    right: 25,
    bottom: 25,
  },

  series: [
    {
      type: 'line',
      data: [102, 240, 66, 300, 91, 890, 120],
      smooth: true, // 是否平滑
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(41, 252, 255, 1)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(41, 252, 255, 0)', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    },
  ],
})
</script>

<style scoped lang="scss">
.content {
  padding: 20px;
}
</style>
