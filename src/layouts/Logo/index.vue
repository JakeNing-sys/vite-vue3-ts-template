<template>
  <div class="logo" v-if="setting.logoShow">
    <img :src="setting.logo" />
    <p class="animate__animated animate__fadeIn" v-if="!settingStore.collapsed">
      {{ setting.title }}
    </p>
  </div>
</template>

<script setup lang="ts" name="Logo">
import setting from '@/setting.ts'
import useSettingStore from '@/store/modules/setting'

const settingStore = useSettingStore()
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $--base-menu-logo-height;
  // color: #909399;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    font-size: 16px;
    margin-left: 10px;
    white-space: nowrap;
  }
}
</style>
