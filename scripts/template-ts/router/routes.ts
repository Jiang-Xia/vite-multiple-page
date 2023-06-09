import { RouteRecordRaw } from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'index',
    component: () => import('../views/index.vue'),
    meta: { title: '首页' }
  }
]
