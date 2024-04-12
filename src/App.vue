<script setup lang="ts">
// import zhCN from 'ant-design-vue/es/locale/zh_CN'
// import enGB from 'ant-design-vue/es/locale/en_GB'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'

// const locale = ref(zhCN)
// const current = ref(6)

dayjs.locale('zh-cn')
</script>

<template>
  <h1 class="text-red-600 text-3xl font-bold underline">Hello world!!!!!!!</h1>
  <!-- <a-config-provider :locale="locale">
    <h1 class="text-red-600 text-3xl font-bold underline">Hello world!</h1>
    <StarOutlined />
    <a-button type="primary">Primary Button</a-button>
    <a-pagination v-model:current="current" :total="500" />

    <SvgIcon name="pill" />
  </a-config-provider> -->
</template>

<style scoped></style>
