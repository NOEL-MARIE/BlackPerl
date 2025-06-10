<template>
  <div
    ref="carouselWrapper"
    class="w-screen h-[420px] pt-12 js-profile-card-189 relative  rounded-2xl "
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div ref="carousel" class="flex h-full gap-4" style="will-change: transform">
      <!-- Dupliquer images pour boucle infinie -->
      <div
        v-for="(item, index) in duplicatedImages"
        :key="index"
        :class="[
          'flex-shrink-0 w-[300px] group h-full relative rounded-2xl  bg-white dark:bg-grayDark-600',
        ]"
        :style="index % 2 === 1 ? 'margin-top: -30px;' : 'margin-top: 0;'"
      >
        <picture class="absolute top-0 left-0 w-full h-full">
          <img
            :src="item.src"
            :alt="item.alt"
            class="object-cover w-full h-full rounded-2xl"
            draggable="true"
          />
        </picture>

        <!-- Bouton SVG en haut à droite de CHAQUE image -->
        <div
          class="absolute top-3 right-3 z-30 bg-[#d0ff71] inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 transition-transform transform group-hover:rotate-90 cursor-pointer"
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

        <div class="absolute bottom-0 left-0 z-20 w-full pr-14">
          <div
            class="relative inline-flex flex-wrap w-auto pt-3 pr-5 bg-white pointer-events-none rounded-tr-2xl lg:rounded-tr-3xl lg:pr-8 dark:bg-grayDark-600"
          >
            <svg
              class="absolute w-10 h-10 text-white transform rotate-180 translate-x-full fill-current lg:w-12 lg:h-12 -bottom-px right-px dark:text-grayDark-600"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              xml:space="preserve"
            >
              <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
            </svg>
            <svg
              class="absolute left-0 w-10 h-10 text-white transform rotate-180 -translate-y-full fill-current lg:w-12 lg:h-12 top-px dark:text-grayDark-600"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              xml:space="preserve"
            >
              <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
            </svg>
            <div>
              <div class="text-lg font-semibold dark:text-white">{{ item.title }}</div>
              <div
                class="ml-1 text-sm font-light leading-tight text-gray-800 font-Opensans 4xl:text-base dark:text-gray-200"
              >
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

// Import images locales
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

// Dupliquer images pour boucle infinie fluide
const duplicatedImages = computed(() => [...images, ...images])

// Indices des images à relever (1, 3 et 4 en base 1, donc 0, 2, 3 en base 0)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const elevateIndices = [0, 2, 3]

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
    if (val) animation.pause()
    else animation.resume()
  })
})

onBeforeUnmount(() => {
  if (animation) animation.kill()
})
</script>

<style scoped>
div[aria-label='Profile link']:hover {
  transform: rotate(90deg);
  transition: transform 0.3s ease;
}
</style>
