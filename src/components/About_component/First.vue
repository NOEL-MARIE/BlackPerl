<!-- eslint-disable vue/multi-word-component-names -->

<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import TestProfilView from '@/components/About_component/TestProfilView[1].vue'

import { ref, onMounted, onBeforeUnmount } from 'vue'
const images = [
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=410&q=80',
]

// Paramètres du carrousel
const angle = -25 // Angle d'oblique en degrés (négatif = vers le bas à droite)
const gap = 40 // Espace entre les images
const speed = 1.2 // Vitesse de défilement

const wrapper = ref<HTMLElement | null>(null)
let animationFrame: number | null = null
let offset = 0
// Ajouter cette fonction dans le <script setup>

function animate() {
  if (wrapper.value) {
    offset += speed
    // On applique la translation oblique
    wrapper.value.style.transform = `translate3d(${-offset}px, ${offset * Math.tan((angle * Math.PI) / 180)}px, 0)`
    // Boucle infinie : quand tout est sorti, on reset
    const totalWidth = (images.length + 1) * (240 + gap)
    if (offset > totalWidth) offset = 0
  }
  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  animate()
})

onBeforeUnmount(() => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
})
</script>

<template>
  <div class="w-screen flex justify-around flex-col h-screen z-0">
    <div class="h-52 w-full justify-center flex">
      <h1 class="text-6xl font-cinzel text-center text-[98px] flex-col">
        DONNEZ VIE À VOTRE <br />
        MARQUE
      </h1>
    </div>
    <div class="h-1/2  z-0 flex oblique-carousel-viewport mt-44">
      <TestProfilView />
    </div>
  </div>
</template>

<style scoped>
.oblique-carousel-viewport {
  /* overflow: hidden; */
  position: relative;
}
.oblique-carousel-wrapper {
  display: flex;
  align-items: flex-start;
  position: absolute;

}
.oblique-carousel-img {
  width: 240px;
  height: 240px;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.13);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /* Optionnel: effet d'arc */
  transition: transform 0.4s cubic-bezier(0.4, 1.6, 0.4, 1);
}
.oblique-carousel-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;
  display: block;
}

/* Responsive */
@media (max-width: 600px) {
  .oblique-carousel-img {
    width: 140px;
    height: 140px;
    border-radius: 16px;
  }
  .oblique-carousel-viewport {
    height: 180px;
  }
}
</style>
