<template>
  <div class="scrollbar">
    <slot />
  </div>
</template>

<script setup lang="ts" name="Scrollbar"></script>

<style scoped lang="scss">
.scrollbar {
  height: 100%;
  @include scrollbar;
}
</style>
