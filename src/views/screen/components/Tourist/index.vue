<template>
  <BorderBox1>
    <!-- 水球图 -->
    <div
      class="content"
      ref="chartsRef"
      style="width: 100%; height: 100%"
    ></div>
  </BorderBox1>
</template>

<script setup lang="ts" name="Tourist">
import { BorderBox1 } from '@newpanjing/datav-vue3'
import useEcharts from '@/hooks/useEcharts'

const chartsRef = ref()

useEcharts(chartsRef, {
  title: {
    text: '水球图',
    textStyle: {
      color: '#29fcff',
    },
    top: '10px',
    left: '30px',
  },
  series: [
    {
      type: 'liquidFill',
      data: [0.6, 0.5, 0.4, 0.3],
      // shape: 'diamond',
      radius: '90%',
    },
  ],
})
</script>

<style scoped lang="scss">
.content {
  padding: 20px;
}
</style>
