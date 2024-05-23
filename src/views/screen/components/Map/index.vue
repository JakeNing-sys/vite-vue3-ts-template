<template>
  <div>
    <div ref="chartsRef" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script setup lang="ts" name="Map">
import useEcharts from '@/hooks/useEcharts'

const chartsRef = ref()

useEcharts(chartsRef, {
  // 地理坐标组件
  geo: {
    map: 'china',
    roam: true, // 鼠标缩放和平移拖动
    zoom: 1.2,
    left: 100,
    top: 160,
    right: 100,
    // bottom: 10,
    label: {
      show: true,
      color: '#fff',
    },
    itemStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: 'blue',
          },
          {
            offset: 1,
            color: 'skyblue',
          },
        ],
        global: false,
      },
      opacity: 0.6,
    },
    emphasis: {
      itemStyle: {
        color: '#29fcff',
      },
      label: {
        color: '#fff',
        fontSize: '30px',
      },
    },
  },

  grid: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  series: [
    {
      type: 'lines', // 航线
      data: [
        {
          coords: [
            [116.405285, 39.904989], // 航线起点
            [119.306239, 26.075302], // 航线终点
          ],
          lineStyle: {
            color: 'orange',
            width: 1,
          },
        },
        {
          coords: [
            [116.405285, 39.904989], // 航线起点
            [117.000923, 36.675807], // 航线终点
          ],
          lineStyle: {
            color: 'orange',
            width: 1,
          },
        },
        {
          coords: [
            [116.405285, 39.904989], // 航线起点
            [101.778916, 36.623178], // 航线终点
          ],
          lineStyle: {
            color: 'orange',
            width: 1,
          },
        },
        {
          coords: [
            [116.405285, 39.904989], // 航线起点
            [114.298572, 30.584355], // 航线终点
          ],
          lineStyle: {
            color: 'orange',
            width: 1,
          },
        },
        {
          coords: [
            [116.405285, 39.904989], // 航线起点
            [87.617733, 43.792818], // 航线终点
          ],
          lineStyle: {
            color: 'orange',
            width: 1,
          },
        },
        {
          coords: [
            [116.405285, 39.904989], // 航线起点
            [91.132212, 29.660361], // 航线终点
          ],
          lineStyle: {
            color: 'orange',
            width: 1,
          },
        },
      ],
      // 航线特效
      effect: {
        show: true,
        symbol:
          'path://M599.06048 831.309824l12.106752-193.404928 372.860928 184.430592L984.02816 710.206464 617.906176 367.33952 617.906176 151.638016c0-56.974336-46.188544-143.064064-103.158784-143.064064-56.974336 0-103.158784 86.089728-103.158784 143.064064L411.588608 367.33952 45.461504 710.206464l0 112.129024 366.660608-184.430592 14.999552 209.27488c0 5.05344 0.594944 9.892864 1.124352 14.749696l-66.591744 60.348416 0 66.587648 153.986048-50.879488 2.43712-0.80896 147.439616 51.688448 0-66.587648-68.758528-62.253056L599.06048 831.309824z',
        // color: 'red',
        symbolSize: 10,
      },
    },
  ],
})
</script>

<style scoped></style>
