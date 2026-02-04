import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'desktop',
      // 采用懒加载方式，提升首屏速度
      component: () => import('../views/DesktopView.vue'),
    },
    // 后续如果你想加一个“开机动画”或“登录页面”，可以加在这里
    // {
    //   path: '/login',
    //   component: () => import('../views/LoginView.vue')
    // }
  ],
})

export default router
