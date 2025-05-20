import { createRouter, createWebHistory } from 'vue-router'

// Importation des vues
import Home from '@/views/Home_Section.vue'
import ImageViewer from '@/views/ImageViewer.vue'
import AboutView from '@/views/AboutView.vue'
import ExpertiseView from '@/views/ExpertiseView.vue'
import CarriereView from '@/views/CarriereView.vue'
import RealisationsView from '@/components/Landing/component/ChessboardGallery.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/image/:id',
      name: 'ImageViewer',
      component: ImageViewer,
      props: true,
    },
    {
      path: '/about',
      name: 'À propos',
      component: AboutView,
    },
    {
      path: '/expertise',
      name: 'Expertise',
      component: ExpertiseView,
    },
    {
      path: '/realisations',
      name: 'Réalisations',
      component: RealisationsView,
    },
    {
      path: '/carriere',
      name: 'Carrière',
      component: CarriereView,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
