import { defineStore } from 'pinia'
import type { MenuOption } from './types/setting'

const useSettingStore = defineStore(
  'Setting',
  () => {
    /* state */
    const collapsed = ref(false) // 侧边栏是否折叠
    const refresh = ref(false) // 页面刷新
    const menuTabs = ref<MenuOption[]>(
      JSON.parse(localStorage.getItem('MENU_TABS') as string) ?? [],
    ) // 菜单选项卡

    /* actions */
    // 选项卡存在否
    const isTabExists = (path: string) => {
      return menuTabs.value.some((e) => e.key === path)
    }

    // 添加选项卡
    const addTab = (tab: MenuOption) => {
      menuTabs.value.push(tab)
    }

    // 移除选项卡
    const removeTab = (path: string) => {
      const index = menuTabs.value.findIndex((e) => e.key === path)
      if (index > -1) {
        menuTabs.value.splice(index, 1)
      }
    }

    return {
      collapsed,
      refresh,
      menuTabs,
      isTabExists,
      addTab,
      removeTab,
    }
  },
  {
    // 插件默认是存储全部
    persist: [
      {
        paths: ['menuTabs'], // 值
        key: 'MENU_TABS', // key
      },
    ],
  },
)

export default useSettingStore
