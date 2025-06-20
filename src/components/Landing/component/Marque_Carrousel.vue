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

const extendedImages = [...images, ...images, ...images, ...images, ...images]

// Ref pour la track du carrousel
const trackRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (trackRef.value) {
    // Sélectionne tous les items du carrousel
    const items = trackRef.value.querySelectorAll('.carousel-item')

    // Timeline GSAP pour animer le fondu des images en boucle
    const tl = gsap.timeline({ defaults: { ease: 'power1.inOut' } })

    // Animation : chaque image passe de opacity 0 à 1 puis 0, en décalé
    tl.to(items, {
      opacity: 1,
      duration: 0.7, // apparition très rapide (100 ms)
      stagger: 0.1, // images qui apparaissent toutes les 0.2s
    })
  }
})
</script>

<template>
  <div class="w-screen overflow-hidden pt-20 pb-11 h-72 ">
    <div class="carousel-containe">
      <div ref="trackRef" class="carousel-track">
        <div
          v-for="(img, index) in extendedImages"
          :key="index"
          class="mb-6 carousel-item"
          style="opacity: 0"
        >
          <img :src="img.src" :alt="img.alt" class="object-cover h-24 mb-32" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  /* width: 100%; */
  overflow: hidden;
  position: relative;
}

.carousel-track {
  display: flex;
  animation: scroll 20s linear infinite;
  /* width: max-content; */
}

.carousel-item {
  flex: 0 0 auto;
  /* margin: 0 2rem; */
  /* équivalent à mx-8 */
  width: 200px;
  opacity: 0; /* caché par défaut */
  transition: opacity 0.5s ease;
}

@keyframes scroll {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
