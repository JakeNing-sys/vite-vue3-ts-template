import { createApp } from 'vue'
import * as AntDesignVue from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import 'virtual:svg-icons-register'
import gloalComponent from '@/components'
import App from '@/App.vue'
import '@/styles/tailwind.css'

const app = createApp(App)

app.use(AntDesignVue);
app.use(gloalComponent);
app.mount('#app')

console.log(import.meta.env);
