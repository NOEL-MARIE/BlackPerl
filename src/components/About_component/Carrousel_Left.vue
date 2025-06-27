<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="carousel w-screen" aria-label="Carrousel de logos">
    <div
      class="carousel-track w-screen"
      :style="{ transform: `translateX(-${translateX}px)` }"
      ref="track"
    >
      <div
        class="carousel-item"
        v-for="(logo, index) in logosConcat"
        :key="index"
      >
        <img :src="logo.src" :alt="logo.alt" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'

// Remplace ces chemins par tes vraies images
import sendChapLogo from '@/assets/images/CELESTE.svg'
import celesteLogo from '@/assets/images/Carre D\'OR.svg'
import catLogo from '@/assets/images/CAT.svg'
import groupeCarreDorLogo from '@/assets/images/Nivea.svg'
import niveaLogo from '@/assets/images/SendChap.svg'

const logos = [
  { src: sendChapLogo, alt: 'Send Chap' },
  { src: celesteLogo, alt: 'Céleste' },
  { src: catLogo, alt: 'CAT' },
  { src: groupeCarreDorLogo, alt: "Groupe Carré d'Or" },
  { src: niveaLogo, alt: 'Nivea' },
]

const translateX = ref(0)
const speed = 0.5 // vitesse de défilement
const trackWidth = ref(0)
let animationFrameId: number | null = null
const track = ref<HTMLElement | null>(null)

const logosConcat = computed(() => [...logos, ...logos, ...logos])

function animate() {
  translateX.value += speed
  if (translateX.value >= trackWidth.value) {
    translateX.value = 0
  }
  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  nextTick(() => {
    if (track.value) {
      trackWidth.value = track.value.scrollWidth / 3
      animate()
    }
  })
})

onBeforeUnmount(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<style scoped>
.carousel {
  /* width: 100%; */
  /* overflow: hidden; */
  padding: 1rem 0;
}

.carousel-track {
  display: flex;
  will-change: transform;
}

.carousel-item {
  flex: 0 0 auto;
  margin: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 1rem;
  height: 98px;
  width: 148px;
}

.carousel-item img {
  max-width: 80%;
  max-height: 70%;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
}

/* Responsive tablettes */
@media screen and (max-width: 1024px) {
  .carousel-item {
    width: 120px;
    height: 80px;
    margin: 0 1rem;
  }

  .carousel-item img {
    max-width: 75%;
    max-height: 65%;
  }
}

/* Responsive mobiles */
@media screen and (max-width: 640px) {
  .carousel-item {
    width: 90px;
    height: 60px;
    margin: 0 0.75rem;
  }

  .carousel-item img {
    max-width: 70%;
    max-height: 60%;
  }
}
</style>
