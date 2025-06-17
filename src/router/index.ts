import { createRouter, createWebHistory } from 'vue-router'

// Importation des vues
import Home from '@/views/Home_Section.vue'
import ImageViewer from '@/views/ImageViewer.vue'
import ChessboardGallery from '@/components/Landing/component/ChessboardGallery.vue';
import AboutView from '@/views/AboutView.vue'
import ExpertiseView from '@/views/ExpertiseView.vue'
import CarriereView from '@/views/CarriereView.vue'
import RealisationsView from '@/components/gsap-3d-position-v1.vue'
import RealisationsViewRealisationsView from '@/views/RealisationsView.vue'
import Strategie_360View from '@/components/Expertise_Component/three_Component.vue'
import ActivationsView from '@/views/ActivationsView.vue'
import MediasImmersifsView from '@/views/MediasImmersifsView.vue'
import BrandingContenusView from '@/views/BrandingContenusView.vue'
import StudioCreationView from '@/views/StudioCreationView.vue'
import AnalyseIAView from '@/views/AnalyseIAView.vue'
import ActivationInfluenceView from '@/views/ActivationInfluenceView.vue'
import Scroll_Video from '@/components/Landing/component/VideoSection.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Strategie_360',
      name: 'Strategie_360',
      component: Strategie_360View,
      props: true,
    },
    {
      path: '/Activations',
      name: 'Activations',
      component: ActivationsView,
      props: true,
    },
    {
      path: '/Medias_immersifs',
      name: 'Medias_immersifs',
      component: MediasImmersifsView,
      props: true,
    },
    {
      path: '/Branding_Contenus',
      name: 'Branding_Contenus',
      component: BrandingContenusView,
      props: true,
    },
    {
      path: '/Studio_Creation',
      name: 'Studio_Creation',
      component: StudioCreationView,
      props: true,
    },
    {
      path: '/Analyse_IA',
      name: 'Analyse_IA',
      component: AnalyseIAView,
      props: true,
    },
    {
      path: '/Activation_influence',
      name: 'Activation_influence',
      component: ActivationInfluenceView,
      props: true,
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
    {
      path: '/RealisationsViewRealisationsView',
      name: 'RealisationsViewRealisationsView',
      component: RealisationsViewRealisationsView,
    },
    {
      path: '/Scroll_Video',
      name: ' ScrollVideo',
      component:  Scroll_Video,
    },
      {
    path: '/ches', // C'est le chemin URL que vous voulez
    name: 'ChessboardGallery', // Un nom unique pour cette route (optionnel mais recommandé)
    component: ChessboardGallery // Le composant que cette route doit afficher
  },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
