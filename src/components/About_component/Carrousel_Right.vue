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
        class="carousel-item hover:scale-125 active:scale-75 transition-transform duration-200 ease-in-out cursor-pointer"
        @click="goToImage(logo.routeName)"
      >
        <img
          :src="logo.src"
          :alt="logo.alt"
          draggable="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRouter } from 'vue-router'

// Import des images
import AMGS from '@/assets/images/AMGS.svg'
import La_Riziere from '@/assets/images/La Riziere.png'
import Laity from '@/assets/images/Laity.png'
import Patte_Maman from '@/assets/images/Patte Maman.png'
import Sourire_Enfant from '@/assets/images/Sourire Enfant.png'

// Accès au routeur
const router = useRouter()

// Logos avec nom de route correspondant
const logos = [
  { src: AMGS, alt: 'Send Chap', routeName: 'ImageView_AJRENTAL' },
  { src: La_Riziere, alt: 'Céleste', routeName: 'ImageView_CELESTE' },
  { src: Laity, alt: 'CAT', routeName: 'ImageView_LAITY' },
  { src: Patte_Maman, alt: "Groupe Carré d'Or", routeName: 'ImageView_MAMAN' },
  { src: Sourire_Enfant, alt: 'Nivea', routeName: 'ImageView_SOURIRE' },
]

const logosConcat = computed(() => [...logos, ...logos, ...logos])

const translateX = ref(0)
const speed = 0.5
const trackWidth = ref(0)
const track = ref<HTMLElement | null>(null)
let animationFrameId: number | null = null

function animate() {
  translateX.value -= speed
  if (translateX.value <= 0) {
    translateX.value = trackWidth.value
  }
  animationFrameId = requestAnimationFrame(animate)
}

function goToImage(routeName: string) {
  router.push({ name: routeName })
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
  cursor: pointer;
}

.carousel-item img {
  max-width: 80%;
  max-height: 70%;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
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
