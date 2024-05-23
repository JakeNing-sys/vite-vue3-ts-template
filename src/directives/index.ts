import type { App } from 'vue'
// import auth from './modules/auth.ts' // 按钮权限指令
import debounce from './modules/debounce.ts' // 按钮防抖指令
import throttle from './modules/throttle.ts' // 节流指令
import draggable from './modules/draggable.ts' // 拖拽指令
import copy from './modules/copyDirect.ts' // 复制指令
import waterMarker from './modules/waterMarker.ts' // 水印指令

interface IDirectives {
  [key: string]: any
}

const directives: IDirectives = {
  // auth,
  debounce,
  throttle,
  draggable,
  copy,
  waterMarker,
}

// 批量注册自定义指令
export default {
  install(app: App) {
    for (const key in directives) {
      app.directive(key, directives[key])
    }
  },
}
