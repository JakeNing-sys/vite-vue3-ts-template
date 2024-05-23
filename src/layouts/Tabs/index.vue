<template>
  <div class="tabs">
    <a-tabs
      v-model:activeKey="$route.path"
      hideAdd
      type="editable-card"
      :tabBarStyle="{ background: '#fff' }"
      @edit="onEdit"
    >
      <a-tab-pane
        v-for="(pane, index) in settingStore.menuTabs"
        :key="pane.key"
      >
        <template #tab>
          <a-dropdown :trigger="['contextmenu']">
            <span @click="$router.push(pane.key)">
              <component :is="pane.icon" />
              {{ pane.title }}
            </span>
            <template #overlay>
              <a-menu @click="closeTab($event, index)">
                <a-menu-item key="1">
                  <VerticalAlignMiddleOutlined />
                  关闭当前
                </a-menu-item>
                <a-menu-item key="2">
                  <VerticalLeftOutlined />
                  关闭右侧
                </a-menu-item>
                <a-menu-item key="3">
                  <VerticalRightOutlined />
                  关闭左侧
                </a-menu-item>
                <a-menu-item key="4">
                  <ScissorOutlined />
                  关闭全部
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </template>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts" name="Tabs">
import useSettingStore from '@/store/modules/setting'

const route = useRoute()
const router = useRouter()
const settingStore = useSettingStore()

// 路由监听
watch(
  () => route.path,
  (path) => {
    // console.log(route)
    // console.log(path)

    // 判断是否存在该路由，不存在则添加
    if (settingStore.isTabExists(path)) return

    // 添加路由
    const tab = {
      title: route.meta.title as string,
      icon: route.meta.icon as string,
      key: path,
      closable: true,
    }

    settingStore.addTab(tab)
  },
  {
    immediate: true,
    deep: true,
  },
)

const onEdit = (targetKey: string, action: string) => {
  if (action === 'remove') {
    if (settingStore.menuTabs.length == 1 && route.path === '/home') return
    settingStore.removeTab(targetKey)
    if (settingStore.menuTabs.length == 0) router.push('/')
  }
}

const closeTab = ({ key }: any, index: number) => {
  switch (key) {
    case '1': // 关闭当前
      if (settingStore.menuTabs.length == 1 && route.path === '/home') return
      settingStore.removeTab(settingStore.menuTabs[index].key)
      if (settingStore.menuTabs.length == 0) router.push('/')
      break
    case '2': // 关闭右侧
      settingStore.menuTabs.splice(
        index + 1,
        settingStore.menuTabs.length - index - 1,
      )
      break
    case '3': // 关闭左侧
      settingStore.menuTabs.splice(0, index)
      break
    case '4': // 关闭全部
      if (route.path === '/home') {
        settingStore.menuTabs = settingStore.menuTabs.filter(
          (tab) => tab.key === '/home',
        )
      } else {
        settingStore.menuTabs = []
        router.push('/')
      }
      break
  }
}
</script>

<style scoped lang="scss">
:deep(.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab:hover) {
  color: rgba(102, 84, 241, 0.8) !important;
}

:deep(.ant-tabs-tab-active .ant-tabs-tab-btn) {
  color: #6654f1 !important;
  // background-color: #6654f1 !important;
}

.tabs {
  width: 100%;
  height: 40px;
  background-color: #fff;
  padding: 0 15px;
  // border-bottom: 1px solid #eee;
}
</style>
