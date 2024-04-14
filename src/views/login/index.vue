<template>
  <div class="login">
    <div class="card">
      <h2>Hello</h2>
      <h4>欢迎登录Vue3后台管理系统</h4>
      <a-form
        style="width: 100%; margin-top: 24px"
        :model="formState"
        name="basic"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          name="username"
          :rules="[{ required: true, message: '请输入账号' }]"
        >
          <a-input
            v-model:value="formState.username"
            placeholder="账号：admin or user"
          >
            <template #prefix>
              <UserOutlined style="color: rgba(0, 0, 0, 0.45)" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <a-input-password
            v-model:value="formState.password"
            placeholder="密码：123456"
          >
            <template #prefix>
              <LockOutlined style="color: rgba(0, 0, 0, 0.45)" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-button
            :loading="loading"
            style="width: 100%"
            type="primary"
            html-type="submit"
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts" name="Login">
import { h } from 'vue'
import { notification } from 'ant-design-vue'
import {
  UserOutlined,
  LockOutlined,
  SmileOutlined,
} from '@ant-design/icons-vue'
import useUserStore from '@/store/modules/user'
import { getNowTime } from '@/utils/time'

interface FormState {
  username: string
  password: string
}

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()

const loading = ref(false)
const formState = ref<FormState>({
  username: 'admin',
  password: '111111',
})

// 登录 - 验证成功回调
const onFinish = async (values: any) => {
  loading.value = true

  try {
    await userStore.userLogin(values)
    const redirect = route.query.redirect
    router.push({ path: (redirect as string) || '/' })
    notification.open({
      message: `Hi~ ${getNowTime()} `,
      description: '欢迎回来！',
      icon: () => h(SmileOutlined, { style: 'color: #52c41a' }),
    })
  } finally {
    loading.value = false
  }
}

// 登录 - 验证失败回调
const onFinishFailed = (_errorInfo: any) => {
  // console.log('Failed:', errorInfo)
}
</script>

<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    -225deg,
    #69eacb 0%,
    #eaccf8 48%,
    #6654f1 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 400px;
    height: 300px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 30px !important;
      color: #fff;
    }

    h4 {
      font-size: 16px !important;
      color: #fff;
      margin-top: 16px;
    }
  }
}
</style>
