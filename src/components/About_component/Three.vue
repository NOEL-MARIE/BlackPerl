<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="relative z-50  flex flex-col items-center justify-center w-screen min-h-screen bg-black md:pt-40 2xl:space-y-  pb-2 px-4   pt-5 md:pb-52">
    <div>
      <img
        ref="logoBlackPearlRef"
        src="@/assets/images/Logo Black Pearlwhite.png"
        alt="Logo"
        class="w-[250px] md:w-[450px] 2xl:w-[844px] h-auto"
      />
    </div>

    <!-- Slogan section -->
    <div class="flex flex-col items-center gap-6 mt-10 text-white">
      <!-- Ligne 1 -->
      <div class="flex items-center justify-center gap-4 flex-wrap">
        <img
          ref="typingImageRef"
          src="@/assets/images/Rectangle 155typing.png"
          alt="Clavier"
          class="w-20 h-14 md:w-28 md:h-20 2xl:w-56 2xl:h-56 object-cover"
        />
        <span class="text-4xl md:text-7xl xl:text-9xl 2xl:text-8xl italic font-light whitespace-nowrap">ON JOUE</span>
      </div>

      <!-- Ligne 2 -->
      <div class="flex flex-col md:flex-row 2xl:flex-row  items-center justify-center gap-4 ">
        <span class="text-4xl md:text-6xl xl:text-9xl lg:text-8xl italic font-light whitespace-nowrap">POUR</span>
        <img
          ref="cameraImageRef"
          src="@/assets/images/Rectangle 156camera.png"
          alt="Caméra"
          class="w-20 h-14 md:w-28 2xl:w-56 2xl:h-56 md:h-20 object-cover"
        />

        <!-- Citation -->
        <div class="flex absolute items-start mt-4  md:mt-0 2xl:mr-[500px] md:ml-[40%] md:absolute   text-sm text-center md:text-left">
          <span class="text-xl 2xl:text-8xl 2xl:mb-[520px]  mr-2">*</span>
          <p class="  leading-tight 2xl:text-2xl font-normal">
            "L'AFRIQUE EST NOTRE<br />
            INSPIRATION.<br />
            LE MONDE, NOTRE TERRAIN."
          </p>
        </div>
      </div>

      <!-- Ligne 3 -->
      <div class="flex items-center justify-center gap-4 flex-wrap">
        <img
          ref="cocaImageRef"
          src="@/assets/images/Rectangle 157coca.png"
          alt="Coca"
          class="w-20 h-14 md:w-28 2xl:w-56 2xl:h-56 md:h-20 object-cover"
        />
        <span class="text-4xl md:text-6xl lg:text-8xl italic font-light whitespace-nowrap 2xl:text-9xl">GAGNER</span>
        <img
          ref="pizzaImageRef"
          src="@/assets/images/Rectangle 158pizza.png"
          alt="Pizza"
          class="w-20 h-14 md:w-28 2xl:w-56 2xl:h-56 md:h-20 object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const logoBlackPearlRef = ref<HTMLImageElement | null>(null)
const typingImageRef = ref<HTMLImageElement | null>(null)
const cameraImageRef = ref<HTMLImageElement | null>(null)
const cocaImageRef = ref<HTMLImageElement | null>(null)
const pizzaImageRef = ref<HTMLImageElement | null>(null)

const animateImages = () => {
  const animate = (el: HTMLImageElement | null, delay = 0) => {
    if (!el) return
    gsap.from(el, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      delay,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }

  animate(logoBlackPearlRef.value!)
  animate(typingImageRef.value!)
  animate(cameraImageRef.value!)
  animate(cocaImageRef.value!)
  animate(pizzaImageRef.value!)
}

onMounted(() => {
  animateImages()
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>
