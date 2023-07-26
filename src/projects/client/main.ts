import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './vantPlugin'
import 'vant/lib/index.css';
import '@/assets/css/index.less'
import store from './store'
import vantPlugin from './vantPlugin';
const app = createApp(App)
app
.use(router)
.use(store)
.mount('#app')
vantPlugin(app)
export default app