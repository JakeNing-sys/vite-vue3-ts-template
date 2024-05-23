<template>
  <div>
    <a-flex align="center" vertical>
      <a-flex justify="center">
        <div style="font-size: 26px; font-weight: bold">防抖指令 🍍🍍🍍</div>
      </a-flex>

      <div style="margin-top: 50px">
        <a-button
          type="primary"
          ghost
          v-debounce="{ fn: handleClick, event: 'click' }"
        >
          防抖按钮（0.5s后执行）
        </a-button>
      </div>
    </a-flex>
  </div>
</template>

<script setup lang="ts" name="AntiShake">
import { message } from 'ant-design-vue'

const handleClick = () => {
  message.success('这是一个防抖按钮')
}
</script>

<style scoped></style>
