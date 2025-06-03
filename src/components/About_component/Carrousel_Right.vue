<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="carousel" aria-label="Carrousel de logos">
    <div
      class="carousel-track"
      :style="{ transform: `translateX(-${translateX}px)` }"
      ref="track"
    >
      <div
        class="carousel-item items-center justify-center flex bg-white h-[98px] w-[148px] rounded-2xl"
        v-for="(logo, index) in logosConcat"
        :key="index"
      >
        <img :src="logo.src" :alt="logo.alt" width="800px" height="800px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'

// IMPORTANT : Remplacez ces imports par vos vrais fichiers SVG
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
const speed = 0.5 // vitesse de défilement en px par frame
const trackWidth = ref(0)
let animationFrameId: number | null = null
const track = ref<HTMLElement | null>(null)

// On concatène les logos pour un défilement infini
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
      trackWidth.value = track.value.scrollWidth / 2 // largeur d'une série de logos
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
.carousel-item {
  flex: 0 0 auto;
  margin: 0 2vw;
  display: flex;
  align-items: center;
}

.carousel-item img {
   max-height: 3.3vw; /* équivalent à 50px */
  width: auto;
  user-select: none;
  pointer-events: none;
}

.carousel {
  width: 100%;
  overflow: hidden;
  margin: vw auto; /* marge verticale importante */
  padding: 1vw 0;
}

.carousel-track {
  display: flex;
  transition: transform 0.1s linear;
  will-change: transform;
}
</style>
