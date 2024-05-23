<template>
  <VueDraggable class="draggable" :animation="150" ref="el" v-model="list">
    <div
      class="item"
      :style="{ backgroundColor: item.color }"
      v-for="item in list"
      :key="item.name"
    >
      {{ item.name }}
    </div>
  </VueDraggable>
</template>

<script setup lang="ts" name="Draggable">
import { VueDraggable } from 'vue-draggable-plus'
import { getColor } from '@/utils'

const { getRandomColor } = getColor()

const list = ref([
  { name: 'one', color: getRandomColor() },
  { name: 'two', color: getRandomColor() },
  { name: 'three', color: getRandomColor() },
  { name: 'four', color: getRandomColor() },
  { name: 'five', color: getRandomColor() },
  { name: 'six', color: getRandomColor() },
  { name: 'seven', color: getRandomColor() },
  { name: 'eight', color: getRandomColor() },
  { name: 'nine', color: getRandomColor() },
])
</script>

<style scoped lang="scss">
.draggable {
  display: grid;
  grid-template-rows: 33.3% 33.3% 33.3%;
  grid-template-columns: 33.3% 33.3% 33.3%;
  width: 100%;
  height: 100%;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    cursor: move;
    color: #fff;
  }
}
</style>
