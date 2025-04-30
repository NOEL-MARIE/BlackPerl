<script setup lang="ts">
import { onMounted } from 'vue'

import SendChap from '@/assets/images/SendChap.svg'
import CELESTE from '@/assets/images/CELESTE.svg'
import CAT from '@/assets/images/CAT.svg'
import CarreDOR from '@/assets/images/Carre D\'OR.svg'
import Nivea from '@/assets/images/Nivea.svg'
import AMGS from '@/assets/images/AMGS.svg'

// Liste des images avec descriptions accessibles
const images = [
  { src: SendChap, alt: 'Logo de SendChap, plateforme d’envoi de messages sécurisés' },
  { src: CELESTE, alt: 'Logo de CELESTE, fournisseur de solutions internet et cloud' },
  { src: CAT, alt: 'Logo de CAT, entreprise de transport et logistique internationale' },
  { src: CarreDOR, alt: 'Logo de Carré d’OR, marque de cosmétique et beauté haut de gamme' },
  { src: Nivea, alt: 'Logo de Nivea, marque de soins de la peau et de beauté' },
  { src: AMGS, alt: 'Logo d’AMGS, société de services médicaux et de santé' }
]

// Triple les images pour créer l'effet de défilement infini
const extendedImages = [...images, ...images, ...images]

onMounted(() => {
  // Rien de spécial ici, l'animation est gérée par CSS
})
</script>

<template>
  <div class="w-screen overflow-hidden mt- mb-11 bg-white">
    <div class="carousel-container">
      <div class="carousel-track">
        <div 
          v-for="(img, index) in extendedImages"
          :key="index"
          class="carousel-item"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="h-24 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.carousel-track {
  display: flex;
  animation: scroll 25s linear infinite;
  width: max-content;
}

.carousel-item {
  flex: 0 0 auto;
  margin: 0 2rem; /* équivalent à mx-8 */
  width: 200px;
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
