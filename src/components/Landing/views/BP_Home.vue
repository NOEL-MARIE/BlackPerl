<template>
  <div class="">
    <!-- Section haute -->
    <div class="w-screen pt-20 flex justify-around h-52">
      <div><img :src="Echec" alt="Illustration d'échec" height="125px" /></div>
      <div><img :src="Logo_BlackPurl" alt="Logo Black Pearl" /></div>
      <div><img :src="Echec" alt="Illustration d'échec" /></div>
    </div>

    <!-- Carrousel -->
    <div class="w-screen mt-40 h-30 overflow-hidden">
      <div class="carousel-container">
        <div class="carousel-track" :style="trackStyle">
          <div
            v-for="(img, index) in extendedImages"
            :key="index"
            class="carousel-item ml-8 relative group"
          >
            <img
              :src="img"
              :alt="'Image ' + ((index % images.length) + 1)"
              class="w-full h-64 object-cover mx-2 "
            />
            <!-- Icône Play centré -->
            <img
              :src="PlayIcons"
              alt="Play"
              class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 opacity-65 transition-all duration-300 scale-100 group-hover:animate-accordion-down group-hover:cursor-pointer group-hover:scale-125 group-hover:opacity-100"
            />
            <img
              :src="PlayIcons"
              alt="Play"
              class="absolute left-1/2  top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 opacity-65 transition-all duration-300 scale-100 group-hover:animate-accordion-down group-hover:cursor-pointer group-hover:scale-150 group-hover:opacity-100"
            />
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script  lang="ts">
import Echec from '@/assets/images/Home_fou.svg'
import Logo_BlackPurl from '@/assets/images/Logo_Black_Pearl.svg'
import Img1 from '@/assets/images/CARR_IMG1.png'
import Img2 from '@/assets/images/CARR_IMG2.png'
import Img3 from '@/assets/images/CARR_IMG3.png'
import PlayIcons from '@/assets/images/Play_Icon.png'

export default {
  data() {
    return {
      Echec,
      Logo_BlackPurl,
      images: [Img1, Img2, Img3],
      scrollPosition: 0,
      scrollSpeed: 50, // Plus la valeur est basse, plus c'est lent
      PlayIcons: PlayIcons
    }
  },
  computed: {
    extendedImages() {
      return [...this.images, ...this.images, ...this.images] // Triple le contenu pour la boucle
    },
    trackStyle() {
      return {
        transform: `translateX(-${this.scrollPosition}px)`,
        animation: `scroll ${this.scrollSpeed}s linear infinite`,
      }
    },
  },
  mounted() {
    this.startAutoScroll()
  },
  methods: {
    startAutoScroll() {
      setInterval(() => {
        this.scrollPosition += 0.5
        if (this.scrollPosition > this.images.length * 300) {
          this.scrollPosition = 0
        }
      }, 50)
    },
  },
}
</script>

<style>
.carousel-container {
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  width: max-content;
  will-change: transform;
}

.carousel-item {
  flex: 0 0 auto;
  width: 300px; /* Ajustez selon la taille de vos images */
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-300px * 3));
  } /* 3 = nombre d'images originales */
}
</style>
