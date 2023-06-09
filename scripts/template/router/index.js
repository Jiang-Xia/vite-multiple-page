import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/home',
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
      component: () => import('@/global/pages/not-found/index.vue'),
    },
  ]
})

router.afterEach((to, from, next) => {
  //遍历meta改变title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  window.scrollTo(0, 0)
})
export default router
