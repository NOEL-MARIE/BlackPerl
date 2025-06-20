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
    }
  },
}
</script>

<template>
  <div class="w-screen h-screen overflow-hidden">
    <div
      class="relative  w-screen mb-12 r:h-[66%] r:m-0 r:p-0 r: mt-[4%] r:h-[6%] flex  justify-evenly items-center"
    >
      <Motion
        tag="div"
        :initial="{ opacity: 0, y: -50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1 }"
        class="absolute r:top-[-70%] mt-[10%]  r:w-[50%] r:mt-[20%] r:left-[3%] r:flex left-[7%]"
      >
        <img
          :src="Echec"
          alt="Illustration d'échec"
          class="object-contain rotate-12 w-[68%]  r:mb-11 h-auto"
        />
      </Motion>

      <Motion
        tag="div"
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 1.2 }"
        class=" z-40  left-[1%] flex r:h-[570%] r:w-[70%]   pb-16 top-[-30%] items-center justify-center w-ful h-ful r: w-[40%] r:mt-[12%]"
      >
        <img
          :src="Logo_BlackPurl"
          alt="Logo Black Pearl"
          class="object-contain r:h-[5%]  r:h-[100%] l:h-[70%] r:h-[5%] "
        />
      </Motion>

      <Motion
        tag="div"
        :initial="{ opacity: 0, y: 50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1 }"
        class="absolute z-0 r:top-[-180%] mt-[10%]  r:flex right-[-4%]"
      >
        <img
          :src="Echec1"
          alt="Illustration d'échec"
          class="object-contain -rotate-12 w-[68%] h-auto"
        />
      </Motion>
    </div>

    <div class="w-screen  hidden   z-0 hidd r:mt-0 hidde r:pt-24">
      <RealisationsView class="overflow-hidden" />
    </div>
  </div>
</template>

<style scoped>
/* Any specific scoped styles, if needed */
</style>
