<template>
  <BorderBox8 reverse class="content">
    <div ref="chartsRef" style="width: 100%; height: 100%"></div>
  </BorderBox8>
</template>

<script setup lang="ts" name="Couter">
import { BorderBox8 } from '@newpanjing/datav-vue3'
import useEcharts from '@/hooks/useEcharts'

const chartsRef = ref()

useEcharts(chartsRef, {
  title: {
    text: '雷达图',
    link: 'http://www.baidu.com',
    textStyle: {
      color: '#29fcff',
    },
    top: '10px',
    left: '10px',
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { text: '消费' },
      { text: '好感度' },
      { text: '出行' },
      { text: '偏好' },
      { text: '景点' },
      { text: '美食' },
    ],
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      tooltip: {
        trigger: 'item',
      },
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget',
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending',
        },
      ],
    },
  ],
})
</script>

<style scoped lang="scss">
.content {
  padding: 20px;
}
</style>
