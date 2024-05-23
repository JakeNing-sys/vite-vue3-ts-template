<template>
  <a-flex align="center">
    <!-- <span>{{ userName }}</span> -->

    <!-- （---） -->
    <span>{{ loginUserName }}</span>

    <a-dropdown
      :placement="'bottom'"
      :arrow="{ pointAtCenter: true }"
      style="width: 100px"
    >
      <a-avatar
        style="margin-left: 20px; margin-right: 25px"
        :size="'large'"
        :src="userAvatar"
      ></a-avatar>
      <template #overlay>
        <a-menu>
          <a-menu-item @click="handleLogout">
            <span>退出登录</span>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-flex>
</template>

<script setup lang="ts" name="Avatar">
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()

// loginUserName （---）
const { loginUserName, userAvatar } = storeToRefs(userStore)

const route = useRoute()
const router = useRouter()

const handleLogout = async () => {
  await userStore.userLogout()
  router.push({ path: '/login', query: { redirect: route.path } }) // $route.path 是当前离开页面路由
}
</script>

<style scoped></style>
