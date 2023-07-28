export const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'index',
    component: () => import('../views/index.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/global/pages/not-found/index.vue')
  }
]
