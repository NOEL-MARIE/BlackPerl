import { createRouter, createWebHistory } from 'vue-router'

// Importation des vues
import Home from '@/views/Home_Section.vue'
import Return_LINK from '@/components/Landing/component/BlackSection.vue'
import ImageViewer from '@/views/ImageViewer.vue'
import ChessboardGallery from '@/components/Landing/component/ChessboardGallery.vue'
import AboutView from '@/views/AboutView.vue'
import ExpertiseView from '@/views/ExpertiseView.vue'
import CarriereView from '@/views/CarriereView.vue'
import RealisationsView from '@/components/Landing/component/ChessboardGallery.vue'
import Strategie_360View from '@/components/Expertise_Component/three_Component.vue'
import ActivationsView from '@/views/ActivationsView.vue'
import MediasImmersifsView from '@/views/MediasImmersifsView.vue'
import BrandingContenusView from '@/views/BrandingContenusView.vue'
import StudioCreationView from '@/views/StudioCreationView.vue'
import AnalyseIAView from '@/views/AnalyseIAView.vue'
import ActivationInfluenceView from '@/views/ActivationInfluenceView.vue'
import Scroll_Video from '@/components/Landing/component/VideoSection.vue'
// === Import des pages ImageView ===
import ImageView_AJRENTAL from '@/views/ImageView_AJRENTAL.vue'
import ImageView_CELESTE from '@/views/ImageView_CELESTE.vue'
import ImageView_CLEO from '@/views/ImageView_CLEO.vue'
import ImageView_MAMAN from '@/views/ImageView_MAMAN.vue'
import ImageView_MEDIANO from '@/views/ImageView_MEDIANO.vue'
import ImageView_SOURIRE from '@/views/ImageView_SOURIRE.vue'
// === Import des pages ImageView ===
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Return_LINK',
      name: 'Return_LINK',
      component: Return_LINK,
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
      path: '/image ',
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
      path: '/Scroll_Video',
      name: ' ScrollVideo',
      component: Scroll_Video,
    },
    {
      path: '/ches', // C'est le chemin URL que vous voulez
      name: 'ChessboardGallery', // Un nom unique pour cette route (optionnel mais recommandé)
      component: ChessboardGallery, // Le composant que cette route doit afficher
    },
     // === Routes spécifiques pour chaque page ImageView ===
    {
      path: '/ajrental',
      name: 'ImageView_AJRENTAL',
      component: ImageView_AJRENTAL,
      // Page : AJRENTAL
    },
    {
      path: '/celeste',
      name: 'ImageView_CELESTE',
      component: ImageView_CELESTE,
      // Page : CELESTE
    },
    {
      path: '/cleo',
      name: 'ImageView_CLEO',
      component: ImageView_CLEO,
      // Page : CLEO
    },
    {
      path: '/maman',
      name: 'ImageView_MAMAN',
      component: ImageView_MAMAN,
      // Page : MAMAN
    },
    {
      path: '/mediano',
      name: 'ImageView_MEDIANO',
      component: ImageView_MEDIANO,
      // Page : MEDIANO
    },
    {
      path: '/sourire',
      name: 'ImageView_SOURIRE',
      component: ImageView_SOURIRE,
      // Page : SOURIRE
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
