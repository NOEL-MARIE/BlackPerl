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
        <img :src="logo.src" :alt="logo.alt" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'

// IMPORTANT : Remplacez ces imports par vos vrais fichiers SVG
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
const speed = 0.5 // vitesse de défilement en px par frame
const trackWidth = ref(0)
let animationFrameId: number | null = null
const track = ref<HTMLElement | null>(null)

// On concatène les logos pour un défilement infini
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
      trackWidth.value = track.value.scrollWidth / 3 // largeur d'une série de logos
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
  width: 100%;
  overflow: hidden;
  /* margin: 40px auto; */
  padding: 1vw 0;
}

.carousel-track {
  display: flex;
  transition: transform 0.1s linear ;
  will-change: transform;
}

.carousel-item {
  flex: 0 0 auto;
  margin: 0 2vw;
  display: flex;
  align-items: center;
}



.carousel-item img {
  max-height: 3.3vw;
  width: auto;
  user-select: none;
  pointer-events: none;
}
</style>
