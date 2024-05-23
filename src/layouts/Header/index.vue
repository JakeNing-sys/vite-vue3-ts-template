<template>
  <a-flex :style="{ padding: '0 15px' }" justify="space-between" align="center">
    <!-- 左侧 -->
    <a-flex>
      <a-space :size="20">
        <!-- 折叠菜单 -->
        <component
          :is="collapsed ? 'MenuUnfoldOutlined' : 'MenuFoldOutlined'"
          class="trigger"
          @click="collapsed = !collapsed"
        ></component>

        <!-- 面包屑 -->
        <BreadCrumbs />
      </a-space>
    </a-flex>

    <!-- 右侧 -->
    <a-flex align="center">
      <a-space :size="20">
        <Settings />
        <Avatar />
      </a-space>
    </a-flex>
  </a-flex>
  <div class="header"></div>
</template>

<script setup lang="ts" name="Header">
import useSettingStore from '@/store/modules/setting'
import BreadCrumbs from './BreadCrumbs/index.vue'
import Settings from './Settings/index.vue'
import Avatar from './Avatar/index.vue'

const { collapsed } = storeToRefs(useSettingStore())
</script>

<style scoped lang="scss"></style>
