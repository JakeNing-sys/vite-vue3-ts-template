<template>
  <template v-for="menu in menuList" :key="menu.path">
    <!-- 一级菜单（没有children） -->
    <template v-if="!menu.children">
      <a-menu-item v-if="!menu.meta?.hidden" :key="menu.path">
        <component :is="menu.meta?.icon" />
        <span>{{ menu.meta?.title }}</span>
      </a-menu-item>
    </template>

    <!-- 一级菜单（有children且children内只有一个子菜单） -->
    <template v-if="menu.children && menu.children.length === 1">
      <a-menu-item
        v-if="!menu.children[0].meta?.hidden"
        :key="menu.children[0].path"
      >
        <component :is="menu.children[0].meta?.icon" />
        <span>{{ menu.children[0].meta?.title }}</span>
      </a-menu-item>
    </template>

    <!-- 多级菜单（有children且children内有多个子菜单） -->
    <template v-if="menu.children && menu.children.length > 1">
      <a-sub-menu :key="menu.path">
        <template #title>
          <span>
            <component :is="menu.meta?.icon" />
            <span>{{ menu.meta?.title }}</span>
          </span>
        </template>

        <!-- 递归组件：调用自身，传入子菜单列表 -->
        <MenuItem :menuList="menu.children" />
      </a-sub-menu>
    </template>
  </template>
</template>

<script setup lang="ts" name="MenuItem">
import { RouteRecordRaw } from 'vue-router'

withDefaults(defineProps<{ menuList: RouteRecordRaw[] }>(), {
  menuList: () => [],
})
</script>

<style lang="scss">
// 菜单收起时 - 子菜单的背景色
.ant-menu-submenu > .ant-menu .ant-menu-item-selected {
  background-color: #6654f1 !important;
}

// 菜单收起时 - 子菜单的图标和文字颜色
.ant-menu-submenu > .ant-menu .ant-menu-item-selected span {
  color: #fff !important;
}

// 菜单收起时 - 当前选中子菜单的父级文字颜色
.ant-menu-submenu
  > .ant-menu
  .ant-menu-submenu-selected
  .ant-menu-submenu-title {
  color: #6654f1 !important;
}
</style>
