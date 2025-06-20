import './assets/main.css'

// Framework Core
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Plugins
import 'vue-toastification/dist/index.css'

// Application Core
import App from '@/App.vue'
import router from './router'

// Initialisation de l'application
const app = createApp(App)

// Configuration Pinia
const pinia = createPinia()

// Configuration Vue Query

// Installation des plugins
app.use(pinia)
app.use(router)

// Montage de l'application
app.mount('#app')
