<template>
  <div
    v-waterMarker="{
      text: '🍍🍍🍍',
      textColor: 'rgba(180, 180, 180, 0.6)',
    }"
    class="containter wh-100"
  >
    <span style="font-size: 26px; font-weight: bold">水印指令 🍍🍍🍍</span>
  </div>
</template>

<script setup lang="ts" name="WatermarkDirect"></script>

<style scoped lang="scss">
.containter {
  text-align: center;
}
</style>
