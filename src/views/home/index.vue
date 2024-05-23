<template>
  <div class="wh-100">
    <a-flex class="wh-100" justify="center" align="center">
      <img class="img" :src="getImageUrl('startup.png')" />
    </a-flex>
  </div>
</template>

<script setup lang="ts" name="Home">
import { getImageUrl } from '@/utils'
</script>

<style scoped lang="scss">
.img {
  width: 700px;
}
</style>
