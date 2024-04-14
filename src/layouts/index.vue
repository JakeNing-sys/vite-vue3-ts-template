<template>
  <div>
    <a-layout class="layout">
      <!-- 左侧-->
      <a-layout-sider
        width="260px"
        :trigger="null"
        v-model:collapsed="collapsed"
        collapsible
      >
        <!-- logo -->
        <Logo />

        <!-- 菜单 菜单区域可滚动 -->
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item v-for="item in 50" :key="item">
            <user-outlined />
            <span class="nav-text">nav {{ item }}</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>

      <!-- 右侧 -->
      <a-layout>
        <!-- 顶部导航栏 -->
        <a-layout-header>头部</a-layout-header>

        <!-- 内容区域 -->
        <a-layout-content
          :style="{
            padding: '20px',
            minHeight: 'calc(100vh - 126px)',
            overflowY: 'auto',
          }"
        >
          <!-- <router-view /> -->
          <div style="padding: 20px" v-for="i in 100" :key="i">内容区域</div>
        </a-layout-content>

        <!-- 底部区域 -->
        <a-layout-footer>底部</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup lang="ts" name="Layouts">
import Logo from '@/layouts/Logo/index.vue'
import type { CSSProperties } from 'vue'

const selectedKeys = ref<string[]>(['4'])
const collapsed = ref(false)
</script>

<style scoped lang="scss">
.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
