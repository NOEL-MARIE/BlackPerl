import { AppRoute } from '@/constants/app-route'
import { createRouter, createWebHistory } from 'vue-router'
import ImageViewer from '@/components/Landing/component/ChessboardGallery.vue'

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
    {
      path: '/image/:id',
      name: 'ImageViewer',
      component: ImageViewer,
      props: true
    }
  ],
})

export default router
