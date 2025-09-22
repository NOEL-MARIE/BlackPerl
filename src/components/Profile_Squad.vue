<template>
  <div
    ref="carouselWrapper"
    class="
      w-screen
      h-full  xs:h-[220px] sm:h-[320px] md:h-[360px]  lg:h-[400px] xl:h-[420px] 2xl:h-[440px]
      mt-6 sm:mt-12
      relative rounded-2xl
    "
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div
      ref="carousel"
      class="
        flex h-full w-full
        gap-2 xs:gap-3 sm:gap-4
        px-1 xs:px-2 sm:px-4
        transition-transform duration-700 ease-linear will-change-transform
      "
    >
      <div
        v-for="(item, index) in duplicatedImages"
        :key="index"
        class="
          flex-shrink-0
          w-[120px] xs:w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[300px] 2xl:w-[340px]
          h-full group relative
          bg-white dark:bg-gray-800 rounded-2xl
        "
        :class="index % 2 === 1 ? '-mt-2 xs:-mt-4 sm:-mt-6 md:-mt-8' : 'mt-0'"
      >
        <!-- Image -->
        <picture class="absolute  rounded-2xl top-0  left-0 w-full h-full overflow-hidden">
          <img
            :src="item.src"
            :alt="item.alt"
            class="object-cover w-full h-full rounded-2xl"
            draggable="false"
          />
        </picture>

        <!-- Bouton SVG -->
        <div
          class="
            absolute top-1.5 xs:top-2 sm:top-3 right-1.5 xs:right-2 sm:right-3 z-30
            bg-[#FBDD78]
            duration-700 transition-all
            w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8
            flex items-center justify-center
            border border-black rounded-tr-2xl rounded-bl-2xl
            group-hover:rotate-90 cursor-pointer
          "
          aria-label="Profile link"
        >
          <svg
            class="w-3 xs:w-4 h-3 xs:h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M240 64V48h-32v192H16v32h192v192h32V272h192v-32H240V64z"></path>
          </svg>
        </div>

        <!-- Infos nom & titre -->
        <div class="absolute bottom-0 left-0 z-20 w-full pr-8 xs:pr-10 sm:pr-14">
          <div
            class="
              relative inline-flex flex-wrap
              pt-1.5 xs:pt-2 sm:pt-3 pr-3 xs:pr-4 sm:pr-5
              bg-white dark:bg-gray-800 pointer-events-none
              rounded-tr-xl xs:rounded-tr-2xl xl:rounded-tr-3xl
            "
          >
            <!-- SVG coin droit -->
            <svg
              class="absolute w-7 xs:w-8 sm:w-10 xl:w-12 h-7 xs:h-8 sm:h-10 xl:h-12 text-white dark:text-gray-800 rotate-180 translate-x-full fill-current -bottom-px right-px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
            </svg>
            <!-- SVG coin gauche -->
            <svg
              class="absolute w-7 xs:w-8 sm:w-10 xl:w-12 h-7 xs:h-8 sm:h-10 xl:h-12 text-white dark:text-gray-800 rotate-180 -translate-y-full fill-current top-px left-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
            </svg>
            <!-- Textes -->
            <div>
              <div class="text-xs xs:text-sm sm:text-base md:text-lg xl:text-xl font-semibold dark:text-white">
                {{ item.title }}
              </div>
              <div class="ml-0.5 xs:ml-1 text-[10px] xs:text-xs sm:text-sm font-light leading-tight text-gray-800 dark:text-gray-300">
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

import imgI from '@/assets/images/IMG_8281(2).jpg'
import imgFi from '@/assets/images/img_carr_2.jpg'
import imgIe from '@/assets/images/img_carr_3.jpg'
import img from '@/assets/images/img_carr_4.jpg'
import imgg from '@/assets/images/img_carr_5.jpg'

const hovering = ref(false)
const carousel = ref<HTMLElement | null>(null)

const images = [
  { src: imgI, alt: 'DE GONZAGUE', title: 'DE GONZAGUE', subtitle: 'Concepteur Du Site-Web' },
  { src: imgFi, alt: 'Mike', title: 'Mike', subtitle: 'Directeur Artistique' },
  { src: imgIe, alt: 'Mike', title: 'Mike', subtitle: 'Directeur Artistique' },
  { src: img, alt: 'Mike', title: 'Mike', subtitle: 'Directeur Artistique' },
  { src: imgg, alt: 'Mike', title: 'Mike', subtitle: 'Directeur Artistique' },
]

const duplicatedImages = computed(() => {
  // On calcule combien d'images sont nécessaires pour remplir 2 à 3 fois la largeur du carrousel
  const targetMin = 3 // nombre de fois à dupliquer
  let result = [...images]
  while (result.length < images.length * targetMin) {
    result = [...result, ...images, ...images, ...images]
  }
  return result
})


let animation: gsap.core.Tween | null = null

onMounted(() => {
  if (!carousel.value) return
  const totalWidth = carousel.value.scrollWidth / 3
  animation = gsap.to(carousel.value, {
    x: -totalWidth,
    ease: 'linear',
    duration: 20,
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
