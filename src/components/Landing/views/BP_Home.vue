<script lang="ts">
import { Motion } from '@motionone/vue'
import RealisationsView from '@/views/RealisationsView.vue' // Your RealisationsView component

// Import your assets
import Echec from '@/assets/images/image 10first.jpg'
import Echec1 from '@/assets/images/image 9three.png'
import Logo_BlackPurl from '@/assets/images/Logo_Black_Pearl.svg'
import BANNER_TOP from '@/assets/images/66d8fb8ddb89c6bbf01deb18_top.svg'

export default {
  // Register components used in the template
  components: {
    Motion,
    RealisationsView, // RealisationsView must be registered here
  },
  data() {
    return {
      BANNER_TOP,
      Echec,
      Echec1,
      Logo_BlackPurl,
      // Removed carousel-related data (images, PlayIcons, scrollX, animationFrame, isHovered)
    }
  },
  // Removed computed property (duplicatedImages) as it's no longer needed
  // Removed mounted and beforeUnmount hooks as auto-scroll is not needed
  // Removed methods related to auto-scroll (startAutoScroll, stopAutoScroll, handleMouseEnter, handleMouseLeave)
}
</script>

<template>
  <div class="w-screen h-screen overflow-hidden">
    <div class="relative w-screen overflow-hidden xs:h-[66%] xs:m-0 xs:p-0  md:h-[40vh] flex justify-center items-center">
      <Motion
        tag="div"
        :initial="{ opacity: 0, y: -50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1 }"
        class="absolute top-[-30%] hidden lg:flex  left-[7%]"
      >
        <img
          :src="Echec"
          alt="Illustration d'échec"
          style="width: 68%; height: auto"
          class="object-contain rotate-12"
        />
      </Motion>

      <Motion
        tag="div"
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 1.2 }"
        class="absolute z-40 left-[1%] flex top-[-10%] items-center justify-center   w-full h-full"
      >
        <img
          :src="Logo_BlackPurl"
          alt="Logo Black Pearl"
          class="object-contain  md:h-[69%] xs:h-[40%] top-[30%]"
        />
      </Motion>

      <Motion
        tag="div"
        :initial="{ opacity: 0, y: 50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1 }"
        class="absolute z-0 top-[-40%] hidden lg:flex right-[-4%]"
      >
        <img
          :src="Echec1"
          alt="Illustration d'échec"
          style="width: 68%; height: auto"
          class="-rotate-12"
        />
      </Motion>
    </div>

    <div class="w-screen z-0 overflow-hidden xs:mt-0  md:mt-32">
      <RealisationsView class="overflow-hidden "/>
    </div>H
  </div>
</template>

<style scoped>
/* Any specific scoped styles, if needed */
</style>
