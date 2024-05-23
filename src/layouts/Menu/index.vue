<template>
  <Scrollbar>
    <a-menu
      class="menu-container"
      mode="inline"
      :theme="'light'"
      v-model:selectedKeys="selectedKeys"
      :open-keys="openSelectedKeys"
      @click="handleClickMenu"
      @openChange="onOpenChange"
    >
      <Item :menuList />
    </a-menu>
  </Scrollbar>
</template>

<script setup lang="ts" name="Menu">
import Item from './Item/index.vue'
import useUserStore from '@/store/modules/user'

interface IMenu {
  item: object
  key: string
  keyPath: string[]
}

const route = useRoute()
const router = useRouter()
const { menuList } = storeToRefs(useUserStore())

// 当前选中菜单
const selectedKeys = ref<string[]>([])
// 当期展开菜单
const openSelectedKeys = ref<string[]>([])
// 获取所有多级菜单的根菜单path
const rootSubmenuKeys = computed(() =>
  menuList.value
    .filter((v) => v.children && v.children?.length > 1)
    .map((v) => v.path),
)

// 监听路由变化，更新选中菜单和展开菜单
watch(
  () => route,
  (val) => {
    const currentPath = val.matched.map((v) => v.path) // 当前路由path
    selectedKeys.value = currentPath
    openSelectedKeys.value = currentPath
  },
  {
    immediate: true,
    deep: true,
  },
)

// 菜单点击事件
const handleClickMenu = (menu: IMenu) => {
  router.push(menu.key)
}

// 菜单展开回调
const onOpenChange = (openKeys: string[]) => {
  const latestOpenKey = openKeys.find(
    (key) => !openSelectedKeys.value.includes(key),
  )

  if (!rootSubmenuKeys.value.includes(latestOpenKey as string)) {
    openSelectedKeys.value = openKeys
  } else {
    openSelectedKeys.value = latestOpenKey ? [latestOpenKey] : []
  }
}
</script>

<style scoped lang="scss">
.menu-container {
  width: 100%;
  height: calc(100vh - $--base-menu-logo-height);
  overflow-y: auto;
}

// 菜单选中样式
:deep(.ant-menu-item-selected) {
  background-color: #6654f1 !important;
}

// 菜单选中图标和文字样式
:deep(.ant-menu-item-selected span) {
  color: #fff;
}

// 当前选中子菜单的父级菜单样式
:deep(.ant-menu-submenu-selected > .ant-menu-submenu-title) {
  color: #6654f1 !important;
}
</style>
