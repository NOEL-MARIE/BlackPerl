<template>
  <nav
    :class="[
      'w-full est font-sans z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Liens desktop -->
        <div class="hidden md:flex items-center space-x-8 mx-auto">
          <router-link
            v-for="item in links"
            :key="item.name"
            :to="item.to"
            class="relative group inline-block px-3 py-2 text-sm font-medium transition-colors duration-300"
            :class="route.path === item.to ? 'text-[#F8D065]' : 'text-gray-900'"
          >
            {{ item.name }}
            <span
              class="absolute left-0 bottom-0 h-[2px] bg-[#F8D065] transition-all duration-300"
              :class="route.path === item.to ? 'w-full' : 'w-0 group-hover:w-full'"
            ></span>
          </router-link>
        </div>


        <!-- Bouton menu mobile -->
        <div class="md:hidden flex items-center">
          <button @click="isOpen = true" class="text-gray-900">
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

    <!-- Menu mobile -->
    <div v-show="isOpen" ref="menuRef" class="md:hidden bg-white shadow-md px-4 pt-4 pb-6">
      <div class="space-y-3">
        <router-link
          v-for="item in links"
          :key="item.name"
          :to="item.to"
          class="block text-base font-medium px-2 py-1 transition-colors duration-300"
          :class="route.path === item.to ? 'text-[#F8D065]' : 'text-gray-900'"
          @click="isOpen = false"
        >
          {{ item.name }}
        </router-link>
        <a
          href="tel:+1234567890"
          class="flex items-center text-gray-900 px-2 py-1 hover:text-[#F8D065]"
        >
          <!-- Icône téléphone mobile -->
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
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

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Gérer l'ouverture avec animation GSAP
watch(isOpen, async (val) => {
  await nextTick()
  if (val && menuRef.value) {
    gsap.fromTo(
      menuRef.value,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
    )
  } else if (!val && menuRef.value) {
    gsap.to(menuRef.value, {
      opacity: 0,
      y: -30,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        isOpen.value = false
      },
    })
  }
})
</script>
