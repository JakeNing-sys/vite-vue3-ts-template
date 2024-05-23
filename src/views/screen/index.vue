<template>
  <div class="container">
    <div class="screen" ref="ScreenRef">
      <!-- 顶部 -->
      <div class="top">
        <Header />
      </div>
      <!-- 主体 -->
      <a-row class="main">
        <div class="left">
          <Tourist class="tourist" />
          <Sex class="sex" />
          <Age class="age" />
        </div>
        <div class="center">
          <Map class="map" />
          <Line class="line" />
        </div>
        <div class="right">
          <Rank class="rank" />
          <Year class="year" />
          <Couter class="couter" />
        </div>
      </a-row>
    </div>
  </div>
</template>

<script setup lang="ts" name="Screen">
import { useFullscreen } from '@vueuse/core'
import Header from './components/Header/index.vue'
import Tourist from './components/Tourist/index.vue'
import Sex from './components/Sex/index.vue'
import Age from './components/Age/index.vue'
import Map from './components/Map/index.vue'
import Line from './components/Line/index.vue'
import Rank from './components/Rank/index.vue'
import Couter from './components/Couter/index.vue'
import Year from './components/Year/index.vue'

const ScreenRef = ref()
const { toggle } = useFullscreen()

// 获取屏幕缩放比例
const getScale = (w = 1920, h = 1080) => {
  const ww = window.innerWidth / w
  const wh = window.innerHeight / h
  return Math.min(ww, wh)
}

const handleScale = () => {
  ScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
}

window.addEventListener('resize', handleScale)

onMounted(() => {
  nextTick(() => {
    handleScale()
    toggle()
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleScale)
  toggle()
})
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  @include background-image('@/assets/screen/bg.png');

  .screen {
    position: fixed;
    width: 1920px;
    height: 1080px;
    left: 50%;
    top: 50%;
    transform-origin: left top;

    .top {
      width: 100%;
      height: 40px;
    }

    .main {
      display: flex;

      .left {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 1040px; // 1080 - 40(top高度)

        .tourist,
        .sex,
        .age {
          flex: 1;
          margin-top: 16px;
        }
      }

      .center {
        flex: 1.8;
        display: flex;
        flex-direction: column;

        .map {
          flex: 3;
        }

        .line {
          flex: 1;
          margin-top: 16px;
        }
      }

      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 1040px; // 1080 - 40(top高度)

        .rank,
        .couter,
        .year {
          flex: 1;
          margin-top: 16px;
        }
      }
    }
  }
}
</style>
