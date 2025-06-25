<template>
  <div class="w-screen h-screen bg-red-800 overflow-hidden relative flex flex-col justify-center items-center">
    <div class="relative w-full h-full flex justify-center items-center">
      <!-- Image 1 en haut à gauche -->
      <Motion
        tag="div"
        :initial="{ opacity: 0, y: -50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1 }"
        class="absolute top-[5%] left-[5%] z-10 hidden sm:block sm:top-[10%] sm:left-[8%] md:top-[15%] md:left-[10%]"
      >
        <img
          :src="Echec"
          alt="Illustration d'échec"
          class="object-contain rotate-12 w-[30vw] max-w-[120px] sm:w-[20vw] sm:max-w-[180px] md:w-[15vw] md:max-w-[220px] lg:w-[12vw] lg:max-w-[260px]"
        />
      </Motion>

      <!-- Logo centré -->
      <Motion
        tag="div"
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 1.2 }"
        class="z-40 relative flex items-center justify-center w-[70%] h-[40%] sm:w-[60%] sm:h-[50%] md:w-[45%] md:h-[45%] lg:w-[35%] lg:h-[40%] xl:w-[30%] xl:h-[35%]"
      >
        <img
          :src="Logo_BlackPurl"
          alt="Logo Black Pearl"
          class="object-contain w-full h-full max-w-full max-h-full"
        />
      </Motion>

      <!-- Image 2 en bas à droite -->
      <Motion
        tag="div"
        :initial="{ opacity: 0, y: 50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1 }"
        class="absolute bottom-[5%] right-[5%] z-10 hidden sm:block sm:bottom-[10%] sm:right-[8%] md:bottom-[15%] md:right-[10%]"
      >
        <img
          :src="Echec1"
          alt="Illustration d'échec"
          class="object-contain -rotate-12 w-[30vw] max-w-[120px] sm:w-[20vw] sm:max-w-[180px] md:w-[15vw] md:max-w-[220px] lg:w-[12vw] lg:max-w-[260px]"
        />
      </Motion>
    </div>

    <!-- Vue des réalisations -->
    <div class="w-full h-auto relative z-0 overflow-hidden">
      <RealisationsView />
    </div>
  </div>
</template>

<script lang="ts">
import { Motion } from '@motionone/vue'
import RealisationsView from '@/views/RealisationsView.vue'

import Echec from '@/assets/images/image 10first.jpg'
import Echec1 from '@/assets/images/image 9three.png'
import Logo_BlackPurl from '@/assets/images/Logo_Black_Pearl.svg'

export default {
  components: {
    Motion,
    RealisationsView,
  },
  data() {
    return {
      Echec,
      Echec1,
      Logo_BlackPurl,
    }
  },
}
</script>

<style scoped>
/* Aucun style CSS nécessaire grâce à Tailwind CSS pour ce composant */
</style>
