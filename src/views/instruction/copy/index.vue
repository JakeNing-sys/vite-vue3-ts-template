<template>
  <div>
    <a-flex align="center" vertical>
      <a-flex justify="center">
        <div style="font-size: 26px; font-weight: bold">复制指令 🍍🍍🍍</div>
      </a-flex>

      <a-space style="margin-top: 50px">
        <a-input
          v-model:value="data"
          placeholder="请输入内容"
          style="width: 500px"
        ></a-input>
        <a-button v-copy="data">复制</a-button>
      </a-space>
    </a-flex>
  </div>
</template>

<script setup lang="ts" name="Copy">
const data = ref<string>('我是被复制的内容 🍒 🍉 🍊 🍇 🍓 🍍')
</script>

<style scoped lang="scss"></style>
