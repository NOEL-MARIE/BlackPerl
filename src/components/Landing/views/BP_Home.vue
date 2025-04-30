<script lang="ts">
import { Motion } from '@motionone/vue'
import Echec from '@/assets/images/Home_fou.svg'
import Logo_BlackPurl from '@/assets/images/Logo_Black_Pearl.svg'
import Img1 from '@/assets/images/CARR_IMG1.png'
import Img2 from '@/assets/images/CARR_IMG2.png'
import Img3 from '@/assets/images/CARR_IMG3.png'
import PlayIcons from '@/assets/images/Play_Icon.png'

export default {
  components: {
    Motion,
  },
  data() {
    return {
      Echec,
      Logo_BlackPurl,
      images: [Img1, Img2, Img3],
      PlayIcons,
    }
  },
  computed: {
    extendedImages() {
      return [...this.images, ...this.images, ...this.images] // Triple les images pour un défilement plus fluide
    },
  },
}
</script>

<template>
  <div class="w-screen overflow-hidden">
    <!-- Section haute -->
    <div class="w-screen pt-20 flex justify-around h-52">
      <Motion
        tag="div"
        :initial="{ opacity: 0, y: -50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1 }"
      >
        <img :src="Echec" alt="Illustration d'échec" height="125px" width="190px" class="mt-20" />
      </Motion>

      <Motion
        tag="div"
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 1.2 }"
      >
        <img :src="Logo_BlackPurl" alt="Logo Black Pearl" height="225px" width="490px" />
      </Motion>

      <Motion
        tag="div"
        :initial="{ opacity: 0, y: 50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1 }"
      >
        <img :src="Echec" alt="Illustration d'échec" height="125px" width="190px" class="mt-20" />
      </Motion>
    </div>

    <!-- Carrousel -->
    <div class="w-screen mt-20 overflow-hidden relative">
      <Motion
        tag="div"
        class="flex "
        :initial="{ x: '0%' }"
        :animate="{ x: '-100%' }"
        :transition="{ duration: 50, repeat: Infinity, ease: 'linear' }"
      >
        <div
          v-for="(img, index) in extendedImages"
          :key="index"
          class="relative group flex-none w-[400px]"
        >
          <img
            :src="img"
            :alt="'Image ' + ((index % images.length) + 1)"
            class="w-full h-64 object-contain"
          />

          <!-- Play icon avec classes Tailwind (comme avant) -->
          <img
            :src="PlayIcons"
            alt="Play"
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 opacity-65 transition-all duration-300 scale-100 group-hover:animate-accordion-down group-hover:cursor-pointer group-hover:scale-125 group-hover:opacity-100"
          />
          <img
            :src="PlayIcons"
            alt="Play"
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 opacity-65 transition-all duration-300 scale-100 group-hover:animate-accordion-down group-hover:cursor-pointer group-hover:scale-150 group-hover:opacity-100"
          />
        </div>
      </Motion>
    </div>
  </div>
</template>
