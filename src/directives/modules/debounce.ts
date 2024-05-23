/**
 * v-debounce
 * 防抖指令
 */
import type { Directive, DirectiveBinding } from 'vue'

interface IDirectives {
  fn: () => void
  event: string
  delay?: number
}

const debounce: Directive = {
  mounted(el: any, binding: DirectiveBinding) {
    // 如果不是函数或者不是事件直接返回
    if (typeof binding.value.fn !== 'function' || !binding.value.event) return

    // 默认的延迟时间
    let delay = 500
    el.timer = null
    el.handler = function (...args: IDirectives[]) {
      if (el.timer) {
        clearTimeout(el.timer)
      }
      el.timer = setTimeout(() => {
        binding.value.fn.apply(this, args)
      }, binding.value.delay || delay)
    }
    el.addEventListener(binding.value.event, el.handler)
  },

  // 元素卸载前清理定需要清除:延时器并且移除监听事件
  beforeUnmount(el: any, binding: any) {
    if (el.timer) {
      el.timer = null
      clearTimeout(el.timer)
    }
    el.removeEventListener(binding.value.event, el.handler)
  },
}

export default debounce
