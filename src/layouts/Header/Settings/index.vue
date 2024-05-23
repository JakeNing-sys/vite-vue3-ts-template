<template>
  <a-space :size="20">
    <!-- 代码仓库链接 -->
    <a-button shape="circle" :icon="h(GithubOutlined)" @click="openLink" />

    <!-- 刷新按钮 -->
    <a-button
      shape="circle"
      :icon="h(SyncOutlined)"
      @click="settingStore.refresh = !settingStore.refresh"
    />

    <!-- 全屏按钮 -->
    <a-button
      shape="circle"
      :icon="h(isFullscreen ? FullscreenExitOutlined : FullscreenOutlined)"
      @click="toggle()"
    />

    <!-- 设置按钮 -->
    <a-button shape="circle" :icon="h(SettingOutlined)" @click="showDrawer" />
  </a-space>

  <a-drawer
    v-model:open="open"
    class="custom-class"
    root-class-name="root-class-name"
    title="设置"
    placement="right"
    @after-open-change="afterOpenChange"
  >
    <p>敬请期待...</p>
  </a-drawer>
</template>

<script setup lang="ts" name="Settings">
import { h } from 'vue'
import { useFullscreen } from '@vueuse/core'
import {
  GithubOutlined,
  SyncOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue'
import useSettingStore from '@/store/modules/setting'

const settingStore = useSettingStore()
const { isFullscreen, toggle } = useFullscreen()

const open = ref<boolean>(false)

const afterOpenChange = (_bool: boolean) => {}

const showDrawer = () => {
  open.value = true
}

const openLink = () => {
  window.open('https://gitee.com/jakeNing/vite-vue3-ts-template', 'Gitee')
}
</script>

<style scoped></style>
