<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { gsap } from 'gsap'
import { useRouter } from 'vue-router'
import ChessboardGallery from '@/components/Landing/component/ChessboardGallery.vue'

const showLoader = ref(true)
const galleryRef = ref<HTMLElement | null>(null)
const router = useRouter()

// Timer pour cacher le loader après 3s
onMounted(() => {
  setTimeout(() => {
    showLoader.value = false
  }, 3000)

  // Ajout écouteur scroll
  window.addEventListener('scroll', onScroll)
})

// Nettoyage de l'écouteur scroll
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

// Fonction déclenchée au scroll
function onScroll() {
  // Exemple : si on scroll vers le bas de plus de 100px, on navigue
  if (window.scrollY > 100 && !showLoader.value) {
    router.push({ name: 'ChessboardGallery' })
  }
}

// Animation GSAP à l’apparition du ChessboardGallery
watch(showLoader, async (newVal) => {
  if (!newVal) {
    await nextTick()
    if (galleryRef.value) {
      gsap.fromTo(
        galleryRef.value,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
    }
  }
})
</script>

<template>
  <section v-if="showLoader" class="flex items-center justify-center w-screen h-screen">
    <video src="@/assets/images/Scroll-BP.mp4" autoplay></video>
  </section>

  <div v-else ref="galleryRef" style="opacity: 0;">
    <ChessboardGallery />
  </div>
</template>

<style scoped>
section {
  transition: opacity 0.5s ease;
}
</style>
