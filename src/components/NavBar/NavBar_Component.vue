<template>
  <nav
    :class="[
      'w-full font-sans z-50 transition-all duration-300 flex items-center justify-center lg:pr-64',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4',
    ]"
  >
    <div class="max-w-7xl lg:max-w-4xl mx-auto lg:mx-0 px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Liens desktop -->
        <div class="hidden md:flex items-center space-x-8 lg:space-x-44 mx-auto">
          <router-link
            v-for="item in links"
            :key="item.name"
            :to="item.to"
            class="relative w-fit lg:text-xl flex group  px-3 py-2 text-sm font-medium transition-colors duration-300"
            :class="[
              isImageRoute ? 'text-white' : 'text-gray-900',
              route.path === item.to ? 'font-bold' : '',
            ]"
          >
            {{ item.name }}
            <span
              class="absolute left-0 bottom-0 h-[2px] bg-[#F8D065] transition-all duration-300"
              :class="[
                route.path === item.to ? 'w-full' : 'w-0 group-hover:w-fit',
                isImageRoute ? 'absolute left-0 bottom-0 h-[2px] bg-[#F8D065] transition-all duration-300' : 'bg-[#F8D065]',
              ]"
            ></span>
          </router-link>
        </div>

        <!-- Bouton menu mobile -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" :class="{ 'text-white': isImageRoute }" aria-label="Toggle menu">
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              :class="{ 'stroke-white': isImageRoute }"
            >
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

    <!-- Menu mobile -->
    <transition name="fade-slide">
      <div v-if="isOpen" ref="menuRef" class="md:hidden bg-white shadow-md px-4 pt-4 pb-6">
        <div class="space-y-3">
          <router-link
            v-for="item in links"
            :key="item.name"
            :to="item.to"
            class="block text-base font-medium px-2 py-1 transition-colors duration-300"
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
]

const isImageRoute = computed(() => {
  return route.path.startsWith('/image/')
})

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

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
