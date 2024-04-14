<template>
  <div class="logo" v-if="setting.logoShow">
    <img :src="setting.logo" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts" name="Logo">
import setting from '@/setting.ts'
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: 64px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    font-size: 20px;
    margin-left: 10px;
    white-space: nowrap;
  }
}
</style>
