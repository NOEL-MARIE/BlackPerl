import './assets/main.css'

// Framework Core
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

// Plugins
import 'vue-toastification/dist/index.css'
import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query'

// Application Core
import App from '@/App.vue'
import router from './router'

// Initialisation de l'application
const app = createApp(App)

// Configuration Pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

// Configuration Vue Query
const vueQueryConfig: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        staleTime: 3600 * 1000, // 1 heure en millisecondes
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  },
}

// Installation des plugins
app.use(pinia)
app.use(router)
app.use(VueQueryPlugin, vueQueryConfig)

// Montage de l'application
app.mount('#app')
