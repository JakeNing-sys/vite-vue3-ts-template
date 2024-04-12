<template>
  <!-- svg：图标外层容器节点，内部需要与 use 标签结合使用 -->
  <svg :style="{ width, height }">
    <!-- xlink:href 执行用哪一个图标，属性值务必为 “#icon-图标名字” -->
    <!-- use 标签 fill 属性可以设置图标的颜色 -->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts" name="SvgIcon">
interface ISvgIconProps {
  prefix?: string
  name?: string
  color?: string
  width?: string
  height?: string
}

// 接收父组件传递的参数
withDefaults(defineProps<ISvgIconProps>(), {
  prefix: () => '#icon-', // 图标前缀
  name: () => '', // 图标名字
  color: () => '', // 图标颜色
  width: () => '16px', // 图标宽度
  height: () => '16px', // 图标高度
})
</script>
