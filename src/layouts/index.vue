<template>
  <a-layout class="layout-container">
    <!-- 左侧 -->
    <a-layout-sider
      width="256px"
      :style="siderStyle"
      :trigger="null"
      v-model:collapsed="settingStore.collapsed"
      collapsible
    >
      <!-- Logo -->
      <Logo />

      <!-- 路由菜单 -->
      <Menu />
    </a-layout-sider>

    <!-- 右侧 -->
    <a-layout>
      <!-- 顶部导航栏 -->
      <a-layout-header :style="headerStyle">
        <Header />
      </a-layout-header>

      <!-- 菜单标签页 -->
      <Tabs />

      <!-- 内容区域 -->
      <a-layout-content :style="contentStyle">
        <Main />
      </a-layout-content>

      <!-- 底部区域 -->
      <a-layout-footer :style="footerStyle">
        2024 © VITE-VUE3-TS-TEMPLATE By Jake Ning.
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts" name="Layouts">
import type { CSSProperties } from 'vue'
import Logo from '@/layouts/Logo/index.vue'
import Main from '@/layouts/Main/index.vue'
import Menu from '@/layouts/Menu/index.vue'
import useSettingStore from '@/store/modules/setting'
import Header from './Header/index.vue'
import Tabs from './Tabs/index.vue'

const settingStore = useSettingStore()

const headerStyle: CSSProperties = {
  height: '55px',
  lineHeight: '55px',
  padding: '0',
  backgroundColor: '#fff',
}

const contentStyle: CSSProperties = {
  padding: '10px 12px',
  minHeight: 'calc(100vh - 145px)',
  overflowY: 'auto',
}

const siderStyle: CSSProperties = {
  padding: '0',
  backgroundColor: '#fff',
}

const footerStyle: CSSProperties = {
  height: '30px',
  lineHeight: '30px',
  textAlign: 'center',
  color: '#909399',
  padding: '0',
  backgroundColor: '#fff',
}
</script>

<style scoped lang="scss">
.layout-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
