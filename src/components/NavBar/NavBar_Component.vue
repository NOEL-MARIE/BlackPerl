<template>
  <nav
    :class="[
      '  absolute w-full font-sans z-50 transition-all duration-300 flex items-center justify-center top-0 left-0',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4', // <-- MODIFIÉ ICI
    ]"
  >
    <div class="px-4 max-w-7xl w-full">
      <div class="flex justify-between w-full h-9 items-center">
        <div class="items-center hidden mx-auto w-fit md:flex">
          <router-link
            v-for="item in links"
            :key="item.name"
            :to="item.to"
            class="relative flex justify-center px-3 py-2 font-medium transition-colors duration-300 text-xm w-fit"
            :class="[
              isImageRoute && !isScrolled ? 'text-white' : 'text-gray-900', // <-- Ajustement pour texte blanc sur fond transparent
              route.path === item.to ? 'font-bold active' : '',
            ]"
          >
            {{ item.name }}
            <span></span>
          </router-link>
        </div>

        <div class="flex items-center md:hidden">
          <button
            @click="toggleMenu"
            :class="{
              'text-white': isImageRoute && !isScrolled,
              'text-gray-900': isScrolled || !isImageRoute,
            }"
            aria-label="Toggle menu"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              :class="{
                'stroke-white': isImageRoute && !isScrolled,
                'stroke-gray-900': isScrolled || !isImageRoute,
              }"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="isOpen"
      ref="menuRef"
      class="absolute top-full left-0 w-full px-4 pt-4 pb-6 bg-white shadow-md md:hidden"
      :style="{ opacity: 0, transform: 'translateY(-20px)' }"
    >

      <div class="space-y-3">
        <router-link
          v-for="item in links"
          :key="item.name"
          :to="item.to"
          @click="closeMenu"
          class="block px-2 py-1 text-base font-medium transition-colors duration-300 relative"
          :class="{
            'text-[#F8D065]': route.path === item.to, // Active link color
            'text-gray-900': route.path !== item.to, // Inactive link color
          }"
        >
          {{ item.name }}
          <span></span>
        </router-link>
      </div>
    </div>
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

const isImageRoute = computed(() => route.path.startsWith('/image/'))

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  if (menuRef.value) {
    gsap.to(menuRef.value, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        isOpen.value = false
      },
    })
  } else {
    isOpen.value = false
  }
}

watch(isOpen, async (val) => {
  if (val) {
    await nextTick()
    if (menuRef.value) {
      gsap.fromTo(
        menuRef.value,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
      )
    }
  }
})

const handleClickOutside = (event: MouseEvent) => {
  const isClickInsideMenu = menuRef.value && menuRef.value.contains(event.target as Node);
  const isClickOnToggleButton = (event.target as HTMLElement).closest('button[aria-label="Toggle menu"]');

  if (isOpen.value && !isClickInsideMenu && !isClickOnToggleButton) {
    closeMenu();
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style>
/* Soulignement animé sous les liens */
a > span {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: #F8D065;
  transform-origin: right center;
  transform: scaleX(0);
  transition: transform 0.5s ease;
  width: 100%;
  z-index: -1;
}

a:hover > span,
.router-link-active > span {
  transform-origin: left center;
  transform: scaleX(1);
}

.router-link-active {
  font-weight: bold;
}
</style>
