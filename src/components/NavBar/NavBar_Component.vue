<template>
  <nav
    :class="[
      '  w-full  font-sans z-50 transition-all duration-300 flex items-center justify-center top-0 left-0',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4',
    ]"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="px-4 max-w-7xl w-full">
      <div class="flex justify-between items-center h-12 w-full">
        <!-- Logo -->

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center gap-2 mx-auto">
          <router-link
            v-for="item in links"
            :key="item.name"
            :to="item.to"
            class="relative span flex px-3 py-2 font-medium transition-colors duration-300 text-xl"
            :class="[
              isImageRoute && !isScrolled ? 'text-white' : 'text-gray-900',
              route.path === item.to ? 'font-bold router-link-active' : '',
            ]"
          >
            {{ item.name }}
            <span></span>
          </router-link>
          <!-- CTA Button -->
        </div>

        <!-- Mobile Burger Button -->
        <div class="flex items-center md:hidden">
          <button
            @click="toggleMenu"
            aria-label="Ouvrir le menu"
            class="relative z-60 focus:outline-none"
          >
            <!-- Animated Hamburger -->
            <span
              :class="['block w-7 h-1 bg-current rounded transition-all duration-300', burgerTop]"
            ></span>
            <span
              :class="[
                'block w-7 h-1 bg-current rounded mt-1.5 transition-all duration-300',
                burgerMid,
              ]"
            ></span>
            <span
              :class="[
                'block w-7 h-1 bg-current rounded mt-1.5 transition-all duration-300',
                burgerBot,
              ]"
            ></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div
        v-if="isOpen"
        ref="menuRef"
        class="fixed inset-0 z-50 bg-black bg-opacity-40 flex flex-col items-end md:hidden"
        @keydown.esc="closeMenu"
        tabindex="-1"
      >
        <div
          class="w-4/5 sm:w-2/3 max-w-xs bg-white shadow-md px-6 py-8 h-full flex flex-col gap-6"
          @click.stop
        >
          <button
            class="self-end mb-4 text-2xl text-gray-500 hover:text-gray-900 focus:outline-none"
            @click="closeMenu"
            aria-label="Fermer le menu"
          >
            ×
          </button>
          <div class="flex flex-col gap-4">
            <router-link
              v-for="item in links"
              :key="item.name"
              :to="item.to"
              @click="closeMenu"
              class="block text-lg font-medium transition-colors duration-200"
              :class="{
                'text-[#F8D065] font-bold': route.path === item.to,
                'text-gray-900': route.path !== item.to,
              }"
            >
              {{ item.name }}
            </router-link>
          </div>
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

const isImageRoute = computed(() => route.path.startsWith('/image/'))

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
  if (isOpen.value) closeMenu()
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  if (menuRef.value) {
    gsap.to(menuRef.value, {
      opacity: 0,
      y: -20,
      duration: 0.25,
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
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
      )
      menuRef.value.focus()
    }
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// Burger animation classes
const burgerTop = computed(() =>
  isOpen.value
    ? 'rotate-45 translate-y-2 bg-[#F8D065]'
    : isImageRoute.value && !isScrolled.value
      ? 'bg-white'
      : 'bg-gray-900',
)
const burgerMid = computed(() =>
  isOpen.value ? 'opacity-0' : isImageRoute.value && !isScrolled.value ? 'bg-white' : 'bg-gray-900',
)
const burgerBot = computed(() =>
  isOpen.value
    ? '-rotate-45 -translate-y-2 bg-[#F8D065]'
    : isImageRoute.value && !isScrolled.value
      ? 'bg-white'
      : 'bg-gray-900',
)

// Click outside to close
const handleClickOutside = (event: MouseEvent) => {
  const isClickInsideMenu = menuRef.value && menuRef.value.contains(event.target as Node)
  const isClickOnToggleButton = (event.target as HTMLElement).closest(
    'button[aria-label="Ouvrir le menu"]',
  )
  if (isOpen.value && !isClickInsideMenu && !isClickOnToggleButton) {
    closeMenu()
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

<style scoped>
/* Animation soulignement */
a > span {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: #f8d065;
  transform-origin: right center;
  transform: scaleX(0);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
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

/* Slide-fade transition for mobile menu */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
