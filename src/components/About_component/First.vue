<!-- eslint-disable vue/multi-word-component-names -->

<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBar_Component from '@/components/NavBar/NavBar_Component.vue'
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
function getArcStyle(index: number) {
  const total = images.length
  const center = (total - 1) / 2
  const offset = index - center

  // Ici, la translation Y est POSITIVE pour descendre sur les côtés (arc inversé)
  const translateY = Math.abs(offset) * 40 + 10
  const rotate = offset * 10

  return {
    transform: `translateY(${translateY}px) rotate(${rotate}deg)`,
  }
}

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
  <NavBar_Component />
  <div class="w-screen h-screen mt-8 mb-20 ">
    <div class="h-1/2 items-center w-fullX justify-center flex">
      <h1 class="text-6xl font-cinzel text-center  text-[120px] flex-col">
        bien plus qu’une agence <br />
        de communication <br />
        <p class="font-bold">360°</p>
      </h1>
    </div>
    <div class="h-1/2 flex oblique-carousel-viewport">
      <div class="oblique-carousel-wrapper" ref="wrapper">
        <div
          v-for="(img, i) in images.concat(images)"
          :key="i"
          class="oblique-carousel-img"
          :style="getArcStyle(i % images.length)"
        >
          <img :src="img" alt="" />
        </div>
      </div>
      <div class="w-full mt-40 flex flex-col items-center justify-center">
        <p>Scrollez</p>
        <img src="@/assets/images/boat.gif" alt="" width="84px" />
      </div>
    </div>
  </div>

</template>

<style scoped>
.oblique-carousel-viewport {
  overflow: hidden;
  position: relative;
  background: white;
  user-select: none;
  pointer-events: none;
}
.oblique-carousel-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  will-change: transform;
  position: absolute;
  left: 0;
  top: 0;
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
