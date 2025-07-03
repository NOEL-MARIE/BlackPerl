<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

import SendChap from '@/assets/images/SendChap.svg'
import CELESTE from '@/assets/images/CELESTE.svg'
import CAT from '@/assets/images/CAT.svg'
import CarreDOR from "@/assets/images/Carre D'OR.svg"
import Nivea from '@/assets/images/Nivea.svg'
import AMGS from '@/assets/images/AMGS.svg'

const images = [
  { src: SendChap, alt: 'Logo de SendChap, plateforme d’envoi de messages sécurisés' },
  { src: CELESTE, alt: 'Logo de CELESTE, fournisseur de solutions internet et cloud' },
  { src: CAT, alt: 'Logo de CAT, entreprise de transport et logistique internationale' },
  { src: CarreDOR, alt: 'Logo de Carré d’OR, marque de cosmétique et beauté haut de gamme' },
  { src: Nivea, alt: 'Logo de Nivea, marque de soins de la peau et de beauté' },
  { src: AMGS, alt: 'Logo d’AMGS, société de services médicaux et de santé' },
]

const extendedImages = Array(4).fill(images).flat()

const trackRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (trackRef.value) {
    const items = trackRef.value.querySelectorAll('.carousel-item')
    gsap.to(items, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power1.inOut',
    })
  }
})
</script>

<template>
  <div class="w-screen    md:h-[4%] md:pb-48 2xl:mb-64  ">
    <div class="relative  w-full">
      <div
        ref="trackRef"
        class="flex animate-scroll whitespace-nowrap"
      >
        <div
          v-for="(img, index) in extendedImages"
          :key="index"
          class="carousel-item opacity-0 md:ml-12 flex-shrink-0 px-6"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="h-16 sm:h-20 md:h-24 2xl:h-48 object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50%);
  }
}

.animate-scroll {
  animation: scroll 40s linear infinite;
}
</style>
