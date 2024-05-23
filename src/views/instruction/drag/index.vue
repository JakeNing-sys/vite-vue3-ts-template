<template>
  <div class="content-box">
    <a-flex justify="center">
      <div style="font-size: 26px; font-weight: bold">拖拽指令 🍍🍍🍍</div>
    </a-flex>

    <div v-draggable class="drag-box">我可以拖动哦~</div>
  </div>
</template>

<script setup lang="ts" name="Drag"></script>

<style scoped lang="scss">
.content-box {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  .drag-box {
    position: absolute;
    top: 110px;
    width: 300px;
    height: 300px;
    line-height: 300px;
    font-size: 23px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
    border-radius: 50%;
  }
}
</style>
