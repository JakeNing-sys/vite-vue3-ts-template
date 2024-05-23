<template>
  <BorderBox8 class="content">
    <div class="sex">
      <div class="man">
        <img src="@/assets/screen/man.png" alt="" />
      </div>
      <div class="woman">
        <img src="@/assets/screen/woman.png" alt="" />
      </div>
    </div>
    <div class="rate">
      <p>男士58%</p>
      <p>女士42%</p>
    </div>
    <div ref="chartsRef" style="width: 100%; height: 100px"></div>
  </BorderBox8>
</template>

<script setup lang="ts" name="Sex">
import { BorderBox8 } from '@newpanjing/datav-vue3'
import useEcharts from '@/hooks/useEcharts'

const chartsRef = ref()

useEcharts(chartsRef, {
  title: {
    text: '柱状图',
    textStyle: {
      color: '#29fcff',
    },
    top: '10px',
    left: '10px',
  },

  // x|y轴组件
  xAxis: {
    show: false,
    min: 0,
    max: 100,
  },
  yAxis: {
    show: false,
    type: 'category',
  },

  // 系列（决定你要展示的图形）
  series: [
    {
      type: 'bar',
      data: [58],
      barWidth: 20,
      z: 100,
      itemStyle: {
        color: 'blue',
        borderRadius: [20],
      },
    },
    {
      type: 'bar',
      data: [100],
      barWidth: 20,
      barGap: '-100%',
      itemStyle: {
        color: 'pink',
        borderRadius: [20],
      },
    },
  ],

  // 布局组件
  grid: {
    left: '10%',
    right: ' 10%',
    top: '40%',
    bottom: '20%',
  },
})
</script>

<style scoped lang="scss">
.content {
  padding: 20px;

  .sex {
    display: flex;
    justify-content: space-evenly;
    margin-top: 40px;

    .man {
      width: 111px;
      height: 115px;
      @include background-image('@/assets/screen/man-bg.png', 100% 100%);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .woman {
      width: 111px;
      height: 115px;
      @include background-image('@/assets/screen/woman-bg.png', 100% 100%);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .rate {
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
    color: #fff;
  }
}
</style>
