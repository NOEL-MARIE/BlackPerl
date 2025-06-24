<template>
  <div
    ref="carouselWrapper"
    class="w-full h-[420px] sm:h-[380px] xs:h-[320px] pt-12 relative rounded-2xl"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div
      ref="carousel"
      class="flex h-full gap-4 px-4 sm:px-2"
      style="will-change: transform"
    >
      <div
        v-for="(item, index) in duplicatedImages"
        :key="index"
        :class="[
          'flex-shrink-0 w-[300px] sm:w-[260px] xs:w-[220px] h-full group relative rounded-2xl bg-white dark:bg-grayDark-600',
        ]"
        :style="index % 2 === 1 ? 'margin-top: -30px;' : 'margin-top: 0;'"
      >
        <!-- Image -->
        <picture class="absolute top-0 left-0 w-full h-full">
          <img
            :src="item.src"
            :alt="item.alt"
            class="object-cover w-full h-full rounded-2xl"
            draggable="true"
          />
        </picture>

        <!-- Bouton SVG -->
        <div
          class="absolute top-3 right-3 z-30 bg-[#FBDD78] inline-flex items-center justify-center w-8 h-8 rounded-full transition-transform transform group-hover:rotate-90 cursor-pointer"
          aria-label="Profile link"
        >
          <svg
            class="w-4 h-4 fill-current"
            width="14"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M240 64V48h-32v192H16v32h192v192h32V272h192v-32H240V64z"></path>
          </svg>
        </div>

        <!-- Titre et sous-titre -->
        <div class="absolute bottom-0 left-0 z-20 w-full pr-14">
          <div
            class="relative inline-flex flex-wrap w-auto pt-3 pr-5 bg-white dark:bg-grayDark-600 pointer-events-none rounded-tr-2xl lg:rounded-tr-3xl lg:pr-8"
          >
            <!-- SVG coin droit -->
            <svg
              class="absolute w-10 h-10 text-white transform rotate-180 translate-x-full fill-current lg:w-12 lg:h-12 -bottom-px right-px dark:text-grayDark-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
            </svg>

            <!-- SVG coin gauche -->
            <svg
              class="absolute left-0 w-10 h-10 text-white transform rotate-180 -translate-y-full fill-current lg:w-12 lg:h-12 top-px dark:text-grayDark-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
            </svg>

            <div>
              <div class="text-lg sm:text-base xs:text-sm font-semibold dark:text-white">
                {{ item.title }}
              </div>
              <div class="ml-1 text-sm xs:text-xs font-light leading-tight text-gray-800 dark:text-gray-200">
                {{ item.subtitle }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import gsap from 'gsap'

// Import local images
import imgI from '@/assets/images/IMG_8281(2).jpg'
import imgFi from '@/assets/images/img_carr_2.jpg'
import imgIe from '@/assets/images/img_carr_3.jpg'
import img from '@/assets/images/img_carr_4.jpg'
import imgg from '@/assets/images/img_carr_5.jpg'

const hovering = ref(false)
const carousel = ref<HTMLElement | null>(null)

const images = [
  {
    src: imgI,
    alt: 'DE GONZAGUE',
    title: 'DE GONZAGUE',
    subtitle: 'Concepteur Du Site-Web',
  },
  {
    src: imgFi,
    alt: 'Marque Fi',
    title: 'Mike',
    subtitle: 'Directeur Artistique',
  },
  {
    src: imgIe,
    alt: 'Marque Ie',
    title: 'Mike',
    subtitle: 'Directeur Artistique',
  },
  {
    src: img,
    alt: 'Marque IV',
    title: 'Mike',
    subtitle: 'Directeur Artistique',
  },
  {
    src: imgg,
    alt: 'Marque V',
    title: 'Mike',
    subtitle: 'Directeur Artistique',
  },
]

const duplicatedImages = computed(() => [...images, ...images])

let animation: gsap.core.Tween | null = null

onMounted(() => {
  if (!carousel.value) return
  const totalWidth = carousel.value.scrollWidth / 2
  const duration = 20
  animation = gsap.to(carousel.value, {
    x: -totalWidth,
    ease: 'linear',
    duration,
    repeat: -1,
    paused: false,
  })

  watch(hovering, (val) => {
    if (!animation) return
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    val ? animation.pause() : animation.resume()
  })
})

onBeforeUnmount(() => {
  if (animation) animation.kill()
})
</script>

<style scoped>
/* Smooth hover */
div[aria-label='Profile link']:hover {
  transform: rotate(90deg);
  transition: transform 0.3s ease;
}

/* Custom breakpoints (optionnel si pas dans ta config Tailwind) */
@media (max-width: 640px) {
  .xs\:text-sm {
    font-size: 0.875rem;
  }
  .xs\:text-xs {
    font-size: 0.75rem;
  }
}
</style>
