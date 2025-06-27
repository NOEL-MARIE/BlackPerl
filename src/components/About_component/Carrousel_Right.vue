<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="carousel" aria-label="Carrousel de logos">
    <div
      class="carousel-track"
      :style="{ transform: `translateX(-${translateX}px)` }"
      ref="track"
    >
      <div
        v-for="(logo, index) in logosConcat"
        :key="index"
        class="carousel-item"
      >
        <img
          :src="logo.src"
          :alt="logo.alt"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'

// Remplace par tes vraies images
import AMGS from '@/assets/images/AMGS.svg'
import La_Riziere from '@/assets/images/La Riziere.png'
import Laity from '@/assets/images/Laity.png'
import Patte_Maman from '@/assets/images/Patte Maman.png'
import Sourire_Enfant from '@/assets/images/Sourire Enfant.png'

const logos = [
  { src: AMGS, alt: 'Send Chap' },
  { src: La_Riziere, alt: 'Céleste' },
  { src: Laity, alt: 'CAT' },
  { src: Patte_Maman, alt: "Groupe Carré d'Or" },
  { src: Sourire_Enfant, alt: 'Nivea' },
]

const translateX = ref(0)
const speed = 0.5
const trackWidth = ref(0)
let animationFrameId: number | null = null
const track = ref<HTMLElement | null>(null)

const logosConcat = computed(() => [...logos, ...logos, ...logos])

function animate() {
  translateX.value -= speed
  if (translateX.value <= 0) {
    translateX.value = trackWidth.value
  }
  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  nextTick(() => {
    if (track.value) {
      trackWidth.value = track.value.scrollWidth / 2
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
