<template>
  <BorderBox8 class="content">
    <div ref="chartsRef" style="width: 100%; height: 100%"></div>
  </BorderBox8>
</template>

<script setup lang="ts" name="Age">
import { BorderBox8 } from '@newpanjing/datav-vue3'
import useEcharts from '@/hooks/useEcharts'

const chartsRef = ref()

useEcharts(chartsRef, {
  title: {
    text: '饼图',
    textStyle: {
      color: '#29fcff',
    },
    top: '10px',
    left: '10px',
  },

  tooltip: {
    trigger: 'item',
  },
  legend: {
    right: '30px',
    top: '40px',
    orient: 'vertical',
    textStyle: {
      color: '#fff',
      fontSize: '14px',
    },
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: true,
        position: 'inside',
        color: '#fff',
      },
      // emphasis: {
      //   label: {
      //     show: true,
      //     fontSize: 40,
      //     fontWeight: 'bold',
      //   },
      // },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: '军事' },
        { value: 735, name: '新闻' },
        { value: 580, name: '直播' },
        { value: 484, name: '娱乐' },
        { value: 300, name: '财经' },
      ],
    },
  ],
  grid: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
})
</script>

<style scoped lang="scss">
.content {
  padding: 20px;
}
</style>
