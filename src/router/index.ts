import { createRouter, createWebHistory } from 'vue-router'

// Importation des vues
import Home from '@/views/Home.vue'
import ImageViewer from '@/views/ImageViewer.vue'
import AboutView from '@/views/AboutView.vue'
import ExpertiseView from '@/views/ExpertiseView.vue'
import RealisationsView from '@/views/RealisationsView.vue'
import CarriereView from '@/views/CarriereView.vue'

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
