<template>
  <nav
    :class="[
      'w-full font-sans z-50 transition-all duration-300 flex items-center justify-center',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4',
    ]"
  >
    <div class="px-4 max-w-7xl">
      <div class="flex justify-between w-full h-16">
        <!-- Liens desktop -->
        <div class="items-center hidden mx-auto w-fit md:flex">
          <router-link
            v-for="item in links"
            :key="item.name"
            :to="item.to"
            class="relative flex justify-center px-3 py-2 font-medium transition-colors duration-300 text-xm w-fit"
            :class="[
              isImageRoute ? 'text-white' : 'text-gray-900',
              route.path === item.to ? 'font-bold active' : '',
            ]"
          >
            {{ item.name }}
            <span></span>
          </router-link>
        </div>

        <!-- Bouton menu mobile -->
        <div class="flex items-center md:hidden">
          <button @click="toggleMenu" :class="{ 'text-white': isImageRoute }" aria-label="Toggle menu">
            <svg
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              :class="{ 'stroke-white': isImageRoute }"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu mobile -->
    <transition name="fade-slide">
      <div v-if="isOpen" ref="menuRef" class="px-4 pt-4 pb-6 bg-white shadow-md md:hidden">
        <div class="space-y-3">
          <router-link
            v-for="item in links"
            :key="item.name"
            :to="item.to"
            class="block px-2 py-1 text-base font-medium transition-colors duration-300"
            :class="[
              route.path === item.to ? 'text-[#F8D065]' : 'text-gray-900',
              isImageRoute ? 'text-white' : 'text-gray-900',
            ]"
            @click="closeMenu"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick, computed } from 'vue'
import gsap from 'gsap'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const isScrolled = ref(false)
const menuRef = ref<HTMLElement | null>(null)
const route = useRoute()

const links = [
  { name: 'Accueil', to: '/' },
  { name: 'À propos', to: '/about' },
  { name: 'Expertise', to: '/expertise' },
  { name: 'Réalisations', to: '/realisations' },
  { name: 'Carrière', to: '/carriere' },
  { name: 'Test.vue', to: '/RealisationsViewRealisationsView' },
]

const isImageRoute = computed(() => route.path.startsWith('/image/'))

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  if (!menuRef.value) {
    isOpen.value = false
    return
  }
  gsap.to(menuRef.value, {
    opacity: 0,
    y: -20,
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => {
      isOpen.value = false
    },
  })
}

watch(isOpen, async (val) => {
  if (val && menuRef.value) {
    await nextTick()
    gsap.fromTo(
      menuRef.value,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
    )
  }
})
</script>

<style>
/* Soulignement animé sous les liens */
a > span {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px; /* hauteur de la ligne */
  background-color: #F8D065; /* ta couleur jaune */
  transform-origin: right center;
  transform: scaleX(0);
  transition: transform 0.5s ease;
  width: 100%;
  z-index: -1;
}

a:hover > span,
a.active > span {
  transform-origin: left center;
  transform: scaleX(1);
}
</style>
