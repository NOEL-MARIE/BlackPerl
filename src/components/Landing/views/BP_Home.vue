<script lang="ts">
import { Motion } from '@motionone/vue'
import Echec from '@/assets/images/image 10first.jpg'
import Echec1 from '@/assets/images/image 9three.png'
import Logo_BlackPurl from '@/assets/images/Logo_Black_Pearl.svg'
import Img1 from '@/assets/images/Kraoké.jpg'
import Img2 from '@/assets/images/Laity.jpg'
import Img3 from '@/assets/images/Christaline.png'
import PlayIcons from '@/assets/images/Play_Icon.png'
import BANNER_TOP from '@/assets/images/66d8fb8ddb89c6bbf01deb18_top.svg'

export default {
  components: { Motion },
  data() {
    return {
      BANNER_TOP,
      Echec,
      Echec1,
      Logo_BlackPurl,
      images: [Img1, Img2, Img3],
      PlayIcons,
      scrollX: 0,
      animationFrame: null as number | null,
      isHovered: false,
    }
  },
  computed: {
    duplicatedImages() {
      return [...this.images, ...this.images, ...this.images]
    },
  },
  mounted() {
    this.startAutoScroll()
  },
  beforeUnmount() {
    this.stopAutoScroll()
  },
  methods: {
    startAutoScroll() {
      const imageWidth = 590 + 32 // largeur image + gap en px
      const resetPoint = this.images.length * imageWidth // largeur d’une série d’images (non dupliquée)

      const scroll = () => {
        if (!this.isHovered) {
          this.scrollX -= 0.4 // vitesse de défilement

          // Remise à zéro pour boucle infinie fluide
          if (Math.abs(this.scrollX) >= resetPoint) {
            this.scrollX = 0
          }
        }
        this.animationFrame = requestAnimationFrame(scroll)
      }
      scroll()
    },
    stopAutoScroll() {
      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame)
        this.animationFrame = null
      }
    },
    handleMouseEnter() {
      this.isHovered = true
    },
    handleMouseLeave() {
      this.isHovered = false
    },
  },
}
</script>

<template>
  <div class="w-screen overflow-hidden">
    <!-- Section haute avec images fixes -->
    <div class="w-screen flex justify-around h-36 pb-12">
      <Motion
        tag="div"
        :initial="{ opacity: 0, y: -50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1 }"
      >
        <img :src="Echec" alt="Illustration d'échec" height="125px" width="290px" />
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
        <img :src="Echec1" alt="Illustration d'échec" height="125px" width="290px" />
      </Motion>
    </div>

    <!-- Carrousel -->
    <div
      class="w-full relative h-[350px] mt-24 overflow-hidden group"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <img :src="BANNER_TOP" alt="" class="absolute w-[4090px] h-16 object-cover z-10" />

      <div class="relative w-full flex justify-center items-center overflow-visible h-[320px]">
        <img
          :src="BANNER_TOP"
          alt=""
          class="absolute bottom-[-40px] left-0 right-0 h-16 object-cover rotate-180 z-10 w-full"
        />

        <div
          class="flex gap-8"
          :style="{
            transform: `translateX(${scrollX}px)`,
            width: `${duplicatedImages.length * 590 + duplicatedImages.length * 32}px`
          }"
        >
          <div
            v-for="(img, i) in duplicatedImages"
            :key="i"
            class="relative flex-shrink-0"
            style="width: 590px; height: 750px"
          >
            <img
              :src="img"
              :alt="'Image ' + (i + 1)"
              class="object-cover w-full h-full z-0"
              style="position: relative; z-index: 1"
            />
            <img
              :src="PlayIcons"
              alt="Play"
              class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer z-10"
            />
            <img
              :src="BANNER_TOP"
              alt=""
              class="absolute w-[4090px] top-10 pt-40 h-16 object-cover rotate-180 z-10"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  user-select: none;
}
</style>
