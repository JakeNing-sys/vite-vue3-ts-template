import { createApp } from 'vue'
import * as AntDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import 'virtual:svg-icons-register'
import '@/styles/index.scss'
import 'animate.css'
import gloalComponent from '@/components'
import router from '@/router'
import './permissions'
import pinia from '@/store'
import 'default-passive-events'
import directives from '@/directives'
import App from '@/App.vue'

const app = createApp(App)

app.use(AntDesignVue)
app.use(gloalComponent)
app.use(router)
app.use(pinia)
app.use(directives)
app.mount('#app')

// console.log(import.meta.env)
