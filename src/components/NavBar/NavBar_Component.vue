<template>
  <nav
    :class="[
      'w-full fixed font-sans transition-all mb-9 duration-300 z-50',
      isScrolled
        ? 'bg-white shadow-md'
        : ''
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Liens centrés - visible sur desktop -->
        <div class="hidden md:flex items-center space-x-8 mx-auto">
          <router-link
            to="/"
            class="text-gray-900 px-3 py-2 text-sm font-medium"
            active-class=""
          >
            Accueil
          </router-link>

          <router-link
            to="/about"
            class="text-gray-900 px-3 py-2 text-sm font-medium"
            active-class=""
          >
            À propos
          </router-link>

          <router-link
            to="/expertise"
            class="text-gray-900 px-3 py-2 text-sm font-medium"
            active-class=""
          >
            Expertise
          </router-link>

          <router-link
            to="/realisations"
            class="text-gray-900 px-3 py-2 text-sm font-medium"
            active-class=""
          >
            Réalisations
          </router-link>

          <router-link
            to="/carriere"
            class="text-gray-900 px-3 py-2 text-sm font-medium"
            active-class=""
          >
            Carrière
          </router-link>
        </div>

        <!-- Bouton téléphone - visible sur desktop -->
        <div class="hidden md:flex items-center">
          <a href="tel:+1234567890" class="flex items-center text-gray-900">
            <svg
              width="15"
              height="21"
              viewBox="0 0 15 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4683 0.460939L11.3148 0.0997284C10.2339 -0.238739 9.07916 0.308258 8.6162 1.37794L7.69509 3.50665C7.29363 4.43428 7.51638 5.52513 8.24581 6.20356L10.2754 8.09147C10.1502 9.22068 9.76284 10.3326 9.11345 11.4274C8.46395 12.522 7.65288 13.43 6.68013 14.1515L4.24242 13.3548C3.31842 13.0529 2.31213 13.3999 1.74535 14.216L0.425027 16.117C-0.233901 17.0656 -0.115399 18.3743 0.702207 19.1786L1.57831 20.0405C2.45035 20.8985 3.69588 21.2097 4.84809 20.8575C7.56834 20.0259 10.0694 17.5572 12.3513 13.4512C14.6365 9.33923 15.443 5.85049 14.7708 2.98503C14.488 1.7793 13.6121 0.819094 12.4683 0.460939Z"
                fill="#212121"
              />
            </svg>
          </a>
        </div>

        <!-- Menu mobile -->
        <div class="md:hidden flex items-center">
          <button @click="isOpen = !isOpen" class="text-gray-900">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu mobile déplié avec animation -->
    <motion.div
      v-if="isOpen"
      class="md:hidden bg-white shadow-md"
      :initial="{ opacity: 0, y: -50 }"
      :animate="{ opacity: 1, y: 0 }"
      :exit="{ opacity: 0, y: -50 }"
      transition="0.3s ease"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <motion.router-link
          to="/"
          class="block px-3 py-2 text-gray-900"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          transition="0.5s ease 0.1s"
        >
          Accueil
        </motion.router-link>

        <motion.router-link
          to="/about"
          class="block px-3 py-2 text-gray-900"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          transition="0.5s ease 0.2s"
        >
          À propos
        </motion.router-link>

        <motion.router-link
          to="/expertise"
          class="block px-3 py-2 text-gray-900"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          transition="0.5s ease 0.3s"
        >
          Expertise
        </motion.router-link>

        <motion.router-link
          to="/realisations"
          class="block px-3 py-2 text-gray-900"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          transition="0.5s ease 0.4s"
        >
          Réalisations
        </motion.router-link>

        <motion.router-link
          to="/carriere"
          class="block px-3 py-2 text-gray-900"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          transition="0.5s ease 0.5s"
        >
          Carrière
        </motion.router-link>

        <a href="tel:+1234567890" class="flex items-center px-3 py-2 text-gray-900">
          <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  </nav>
</template>

<script lang="ts">
import { motion } from 'framer-motion'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    motion
  },
  data() {
    return {
      isOpen: false,
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 10
    }
  }
}
</script>
