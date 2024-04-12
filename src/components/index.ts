import { App } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import * as AntDesignIconsVue from '@ant-design/icons-vue'

interface GlobalComponents {
  [key: string]: Component
}

const allGloablComponent: GlobalComponents = {
  SvgIcon,
  ...AntDesignIconsVue,
}

export default {
  // 方法名只能叫 install
  install(app: App) {
    // 注册全局组件和所有element-plus图标组件
    for (const key in allGloablComponent) {
      app.component(key, allGloablComponent[key])
    }
  },
}