<script lang="ts">
import { Motion } from '@motionone/vue'
import RealisationsView from '@/views/RealisationsView.vue'

// Importez vos assets
import Echec from '@/assets/images/image 10first.jpg'
import Echec1 from '@/assets/images/image 9three.png'
import Logo_BlackPurl from '@/assets/images/Logo_Black_Pearl.svg'
import BANNER_TOP from '@/assets/images/66d8fb8ddb89c6bbf01deb18_top.svg'

export default {
  components: {
    Motion, // Il faut le déclarer ici en Options API
    RealisationsView,
  },
  data() {
    return {
      BANNER_TOP,
      Echec,
      Echec1,
      Logo_BlackPurl,
    }
  },
}
</script>

<template>
  <div class="w-screen h-screen bg-red-800 overflow-hidden relative  flex flex-col justify-center items-center">
    <div
      class="relative w-full h-full flex justify-center items-center "
    >
      <Motion
        tag="div"
        :initial="{ opacity: 0, y: -50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1 }"
        class="absolute top-[10%] left-[5%] z-10 hidden md:block md:top-[15%] md:left-[10%]"
      >
        <img
          :src="Echec"
          alt="Illustration d'échec"
          class="object-contain rotate-12 w-[25vw] max-w-[200px] md:w-[15vw] md:max-w-[250px] lg:w-[10vw] lg:max-w-[300px]"
        />
      </Motion>

      <Motion
        tag="div"
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 1.2 }"
        class="z-40 relative flex items-center justify-center w-[80%] h-[80%] md:w-[50%] md:h-[50%] lg:w-[40%] lg:h-[40%]"
      >
        <img
          :src="Logo_BlackPurl"
          alt="Logo Black Pearl"
          class="object-contain w-full h-full max-w-full max-h-full"
        />
      </Motion>

      <Motion
        tag="div"
        :initial="{ opacity: 0, y: 50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1 }"
        class="absolute bottom-[10%] right-[5%] z-10 hidden md:block md:bottom-[15%] md:right-[10%]"
      >
        <img
          :src="Echec1"
          alt="Illustration d'échec"
          class="object-contain -rotate-12 w-[25vw] max-w-[200px] md:w-[15vw] md:max-w-[250px] lg:w-[10vw] lg:max-w-[300px]"
        />
      </Motion>
    </div>

    <div class="w-screen hidde z-0">
      <RealisationsView class="overflow-hidden" />
    </div>
  </div>
</template>

<style scoped>
/* Pas de styles spécifiques nécessaires pour ces ajustements responsive avec Tailwind CSS */
</style>


