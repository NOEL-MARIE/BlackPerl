<script setup>
import SendChap from '@/assets/images/SendChap.svg'
import CELESTE from '@/assets/images/CELESTE.svg'
import CAT from '@/assets/images/CAT.svg'
import CarreDOR from '@/assets/images/Carre D\'OR.svg'
import Nivea from '@/assets/images/Nivea.svg'
import AMGS from '@/assets/images/AMGS.svg'

const images = [
  { src: SendChap, alt: 'SendChap' },
  { src: CELESTE, alt: 'CELESTE' },
  { src: CAT, alt: 'CAT' },
  { src: CarreDOR, alt: "Carre D'OR" },
  { src: Nivea, alt: 'Nivea' },
  { src: AMGS, alt: 'AMGS' }
]

// On triple les images pour la boucle
const extendedImages = [...images, ...images, ...images]
</script>

<template>
  <div class="w-screen overflow-hidden">
    <div class="relative h-64">
      <div class="carousel-track" :style="trackStyle">
        <div 
          v-for="(img, index) in extendedImages"
          :key="index"
          class="inline-block mx-8"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="h-48 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      scrollSpeed: 60 // Plus petit = plus rapide
    }
  },
  computed: {
    trackStyle() {
      return {
        transform: `translateX(${this.scrollPosition}px)`, // Sens inversé !
        animation: `scroll-right ${this.scrollSpeed}s linear infinite`
      }
    }
  },
  mounted() {
    this.startAutoScroll()
  },
  methods: {
    startAutoScroll() {
      setInterval(() => {
        this.scrollPosition += 1 // Plus grand = plus rapide
        // Largeur totale d'une image + marge (300px + 64px de mx-8)
        if (this.scrollPosition > 100 * this.extendedImages.length / 3) {
          this.scrollPosition = 0
        }
      }, 700) // Plus petit = plus rapide
    }
  }
}
</script>

<style>
.carousel-track {
  display: inline-flex;
  white-space: nowrap;
  will-change: transform;
}

@keyframes scroll-right {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(300px * 9)); }
}

.carousel-item {
  flex-shrink: 0;
  width: 300px;
}
</style>
