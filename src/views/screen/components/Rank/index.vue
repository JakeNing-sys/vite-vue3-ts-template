<template>
  <BorderBox1>
    <div
      class="content"
      ref="chartsRef"
      style="width: 100%; height: 100%"
    ></div>
  </BorderBox1>
</template>

<script setup lang="ts" name="Rank">
import { BorderBox1 } from '@newpanjing/datav-vue3'
import useEcharts from '@/hooks/useEcharts'
const chartsRef = ref()

useEcharts(chartsRef, {
  title: {
    text: '组合图表',
    link: 'http://www.baidu.com',
    textStyle: {
      color: '#29fcff',
    },
    top: '10px',
    left: '10px',
    subtext: '子标题',
    subtextStyle: {
      color: '#29fcff',
    },
  },

  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
    },
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'bar',
      label: {
        show: true,
        // position: 'insideTop',
        color: '#fff',
      },
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
      itemStyle: {
        borderRadius: [8, 8, 0, 0],
        // 给每个柱条设置不同的颜色（彩虹的七种颜色）
        color: (data: any) => {
          const COLORS = [
            '#1890ff',
            '#36cfc9',
            '#fadb14',
            '#13c2c2',
            '#f5222d',
            '#fa541c',
            '#a0d911',
          ]
          return COLORS[data.dataIndex]
        },
      },
    },
  ],
  tooltip: {
    backgroundColor: 'rgba(50,50,50, 0.8)',
  },
  grid: {
    top: 70,
    left: 50,
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
