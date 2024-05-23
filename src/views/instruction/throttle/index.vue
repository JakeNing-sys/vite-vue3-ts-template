<template>
  <div>
    <a-flex align="center" vertical>
      <a-flex justify="center">
        <div style="font-size: 26px; font-weight: bold">节流指令 🍍🍍🍍</div>
      </a-flex>

      <div style="margin-top: 50px">
        <a-button type="primary" ghost v-throttle="handleClick">
          节流按钮（每隔1s秒后可点击一次）
        </a-button>
      </div>
    </a-flex>
  </div>
</template>

<script setup lang="ts" name="Throttle">
import { message } from 'ant-design-vue'

const handleClick = () => {
  message.success('这是一个节流按钮')
}
</script>

<style scoped></style>
