<template>
  <div class="w-screen h-screen relative flex  flex-col justify-center items-center">
    <div class="relative w-full h-full flex justify-center items-center">
      <!-- Image 1 en haut à gauche -->
      <Motion
        tag="div"
        :initial="{ opacity: 0, y: -50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1 }"
        class="absolute top-[0%] left-[0%] z-0 hidden md:flex  md:top-[-11%] md:w-[30%] md:left-[10%]"
      >
        <img
          :src="Echec"
          alt="Illustration d'échec"
          class="object-cover rotate-12 md:w-[45vw]"
        />
      </Motion>

      <!-- Logo centré -->
      <Motion
        tag="div"
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 1.2 }"
        class="z-10 relative flex items-center justify-center w-[70%] h-[40%] sm:w-[60%] sm:h-[50%] md:w-[36%]"
      >
        <img
          :src="Logo_BlackPurl"
          alt="Logo Black Pearl"
          class="object-contain xs:w-full  xs:h-full xs:max-w-full md:mb-[250px] xl:mb-[550px] 2xl:mb-[999px] md:w-[400%] xs:max-h-full"
        />
      </Motion>

      <!-- Image 2 en bas à droite -->
      <Motion
        tag="div"
        :initial="{ opacity: 0, y: 50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1 }"
        class="absolute bottom-[5%] right-[5%] z-0 hidden md:block md:w-[27%] md:top-[-11%] md:right-[12%]  "
      >
        <img
          :src="Echec1"
          alt="Illustration d'échec"
          class="object-contain -rotate-12   md:w-[45vw] "
        />
      </Motion>
    </div>

    <!-- Vue des réalisations -->
    <div class="w-full h-auto z-10 overflow-hidden">
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
