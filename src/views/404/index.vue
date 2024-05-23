<template>
  <div class="container">
    <a-result
      status="404"
      title="404"
      sub-title="不好意思，你访问的页面不存在。"
    >
      <template #extra>
        <a-button type="primary" @click="$router.push('/')">Back Home</a-button>
      </template>
    </a-result>
  </div>
</template>

<script setup lang="ts" name="404"></script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
