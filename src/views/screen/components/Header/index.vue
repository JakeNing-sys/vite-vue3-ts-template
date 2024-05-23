<template>
  <div class="header">
    <div class="left">
      <span class="button left-btn" @click="$router.push('/')">首页</span>
    </div>
    <div class="center">
      <div class="center-title">可视化大数据分析平台</div>
    </div>
    <div class="right">
      <span class="button right-btn">统计报告</span>
      <span class="right-time">当前时间：{{ current }}</span>
    </div>
  </div>
</template>

<script setup lang="ts" name="Header">
import dayjs from 'dayjs'

const current = ref<string>(dayjs().format('YYYY-MM-DD HH:mm:ss'))
const timer = ref<NodeJS.Timeout>()

const getTime = () => {
  current.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
}

onMounted(() => {
  timer.value = setTimeout(function handle() {
    getTime()
    timer.value = setTimeout(handle, 1000)
  }, 1000)
})

onBeforeUnmount(() => {
  clearTimeout(timer.value)
})
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 40px;
  display: flex;

  .left {
    flex: 1.5;
    @include background-image('@/assets/screen/dataScreen-header-left-bg.png');
    display: flex;
    justify-content: end;

    &-btn {
      @include background-image(
        '@/assets/screen/dataScreen-header-btn-bg-l.png',
        100% 100%
      );
    }
  }

  .center {
    flex: 2;

    &-title {
      width: 100%;
      height: 74px;
      line-height: 74px;
      text-align: center;
      font-size: 30px;
      color: #29fcff;
      @include background-image(
        '@/assets/screen/dataScreen-header-center-bg.png'
      );
    }
  }

  .right {
    flex: 1.5;
    @include background-image('@/assets/screen/dataScreen-header-left-bg.png');
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-btn {
      @include background-image(
        '@/assets/screen/dataScreen-header-btn-bg-r.png',
        100% 100%
      );
    }

    &-time {
      color: #29fcff;
      margin-right: 10px;
      font-size: 20px;
    }
  }
}

.button {
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #29fcff;
  font-size: 20px;
  cursor: pointer;
}
</style>
