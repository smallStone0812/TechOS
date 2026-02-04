import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import drag from './directives/drag'
import resize from './directives/resize'
// 引入全局样式
import './styles/index.scss'
const app = createApp(App)

app.use(createPinia())
app.use(router)
// 注册自定义指令
app.directive('drag', drag)
app.directive('resize', resize)
app.mount('#app')
