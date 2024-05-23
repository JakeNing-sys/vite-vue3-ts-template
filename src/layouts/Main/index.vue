<template>
  <router-view #default="{ Component }">
    <transition name="fade">
      <a-card class="wh-100" :body-style="{ height: '100%' }">
        <component v-if="flag" :is="Component" :key="$route.fullPath" />
      </a-card>
    </transition>
  </router-view>
</template>

<script setup lang="ts" name="Main">
import useSettingStore from '@/store/modules/setting'
const settingStore = useSettingStore()

const flag = ref(true)

watch(
  () => settingStore.refresh,
  () => {
    flag.value = false
    nextTick(() => {
      setTimeout(() => {
        flag.value = true
      }, 10)
    })
  },
)
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.3s ease;
}

.fade-enter-to {
  opacity: 1;
}
</style>
