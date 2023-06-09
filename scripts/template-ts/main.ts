import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.less'

const app = createApp(App)
app.use(router).mount('#app')
