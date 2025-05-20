
<template>
  <div
    class="fixed bottom-0 right-0 my-6 mx-8 z-50 group transition md:block"
    :class="{
      'opacity-100 pointer-events-auto': show,
      'opacity-0 pointer-events-none': !show,
    }"
    style="transition: opacity 0.3s;"
  >
    <a href="/contact" class="w-28 h-28 relative bg-blue-600 rounded-full flex items-center justify-center group">
      <div class="text-2xl relative top-0.5">... 👀</div>
      <div class="absolute top-0 left-0 w-full h-full p-2.5 animate-spin-slow">
        <div
          class="w-full h-full transition transform"
          :style="{ transform: `rotate(${svgRotation}deg)` }"
        >
          <!-- SVG décoratif simplifié -->
          <svg viewBox="0 0 109 110" class="w-full h-full text-gray-600 fill-current">
            <circle cx="106" cy="53" r="1"></circle>
            <circle cx="21" cy="17" r="1"></circle>
            <circle cx="48" cy="105" r="1"></circle>
            <!-- Ajoute d'autres éléments SVG si besoin -->
          </svg>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(false)
const svgRotation = ref(0)

function handleScroll() {
  const scrollY = window.scrollY
  const innerHeight = window.innerHeight
  const bodyHeight = document.body.offsetHeight

  if (scrollY > innerHeight / 3 && innerHeight + scrollY < bodyHeight - 1000) {
    show.value = true
  } else {
    show.value = false
  }
  svgRotation.value = scrollY / 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@keyframes spin-slow {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}
.animate-spin-slow {
  animation: spin-slow 10s linear infinite;
}
</style>
