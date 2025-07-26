import './assets/main.css'
import VueSmoothScroll from 'v-smooth-scroll'
// Framework Core
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
// Plugins
import 'vue-toastification/dist/index.css'

import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query';
const queryClient = new QueryClient();

// Application Core
import App from '@/App.vue'
import router from './router'

// Initialisation de l'application
const app = createApp(App)
app.use(VueSmoothScroll)
app.use(MotionPlugin)
// Configuration Pinia
const pinia = createPinia()

// Configuration Vue Query

// Installation des plugins
app.use(pinia)
app.use(router)

// Montage de l'application
app.mount('#app')
// Installez le plugin VueQuery avec le QueryClient préalablement créé
app.use(VueQueryPlugin, { queryClient });
