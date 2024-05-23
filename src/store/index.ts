import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // 引入数据持久化插件

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
