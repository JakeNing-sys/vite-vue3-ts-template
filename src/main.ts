import { createApp } from 'vue'
import * as AntDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import 'virtual:svg-icons-register'
import '@/styles/index.scss'
import gloalComponent from '@/components'
import router from '@/routers'
import pinia from '@/store'
import App from '@/App.vue'

const app = createApp(App)

app.use(AntDesignVue)
app.use(gloalComponent)
app.use(router)
app.use(pinia)
app.mount('#app')

// console.log(import.meta.env)
