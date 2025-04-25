import { AppRoute } from '@/constants/app-route'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: AppRoute.HOME.path,
      name: AppRoute.HOME.name,
      component: () => import('@/views/HomeView.vue'),
      meta: {
        requiresAuth: false,
        title: 'Accueil',
      },
    },
  ],
})

export default router
