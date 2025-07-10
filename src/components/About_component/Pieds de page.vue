<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="hero-bg w-full flex flex-col overflow-hidden justify-between 2xl:justify-between">
    <div class="flex flex-col justify-around 2xl:gap-96 gap-96">
      <!-- Hero Content -->
      <div
        class="hero-content mb-11 sm:mb-0 px-4 pt-20 sm:px-8 sm:pt-24 2xl:px-20 2xl:pt-32 text-white max-w-full sm:max-w-[600px]"
      >
        <h1
          ref="heroTitleRef"
          class="text-2xl sm:text-4xl 2xl:text-5xl font-bold leading-tight mb-6"
        >
          ENTREZ MAINTENANT<br />
          DANS LE JEU EN 1 MINUTES
        </h1>
        <p ref="heroDescRef" class="text-sm sm:text-base 2xl:text-lg text-gray-200">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam
        </p>
      </div>

      <!-- Footer -->
      <footer
        ref="footerRef"
        class="footer-blur mx-4 sm:mx-6 2xl:mx-14 mb-6 sm:mb-9 h-fit sm:h-[190px] 2xl:h-[390px] rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row justify-between gap-6"
      >
        <div class="flex flex-col sm:flex-row items-center w-full gap-6 sm:gap-12 px-4 sm:px-8">
          <!-- Newsletter -->
          <div class="flex-1 min-w-[240px]">
            <label
              for="email"
              class="text-white justify-center sm:justify-start font-bold text-sm sm:text-base 2xl:text-5xl mb-3 flex items-center"
            >
              RESTEZ À JOUR
              <img
                src="@/assets/images/paper plane.gif"
                class="w-8 2xl:w-32 2xl:h-32 h-8 ml-2"
                alt=""
              />
              <span class="ml-2 text-lg">
                <i class="fa-regular fa-paper-plane"></i>
              </span>
            </label>
            <form @submit.prevent="subscribe" class="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <IInput />

              <button
                type="submit"
                class="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded w-full sm:w-fit"
              >
                S’inscrire
              </button>
            </form>
          </div>

          <!-- Footer Links -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 text-white flex-1">
            <div class="flex flex-col gap-2">
              <a href="/" class="hover:underline text-xl">Accueil</a>
              <a href="/about" class="mt-2 hover:underline text-xl">À propos</a>
            </div>
            <div class="flex flex-col gap-2">
              <a href="/expertise" class="hover:underline text-xl">Expertise</a>
              <a href="/realisations" class="mt-2 hover:underline text-xl">Réalisations</a>
            </div>
            <div class="flex flex-col gap-2">
              <a href="/carriere" class="hover:underline text-xl">Carrière</a>
              <div class="flex flex-wrap gap-6 mt-2">
                <a href="https://www.facebook.com" target="_blank" rel="noopener">
                  <img :src="facebook" alt="Facebook" class="w-6" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener">
                  <img :src="instagram" alt="Instagram" class="w-6" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener">
                  <img :src="linkedin" alt="LinkedIn" class="w-6" />
                </a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener">
                  <img :src="tiktok" alt="TikTok" class="w-6" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener">
                  <img :src="youtube" alt="YouTube" class="w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

    <!-- Footer Copy -->
    <div class="text-center text-xs sm:text-sm text-gray-500 py-2 px-4">
      © 2025 – Black Pearl Entertainment. Tous les droits sont réservés.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { CustomBounce } from 'gsap/CustomBounce'
// Images réseaux sociaux
import facebook from '@/assets/images/Facebook.png'
import instagram from '@/assets/images/Instagram.png'
import linkedin from '@/assets/images/LinkedIn.png'
import tiktok from '@/assets/images/TikTok.png'
import youtube from '@/assets/images/YouTube.png'
gsap.registerPlugin(CustomEase, CustomBounce)

const heroTitleRef = ref<HTMLElement | null>(null)
const heroDescRef = ref<HTMLElement | null>(null)
const footerRef = ref<HTMLElement | null>(null)

const email = ref('')

function subscribe() {
  alert(`Merci pour votre inscription, ${email.value} !`)
  email.value = ''
}

onMounted(() => {
  const heroTimeline = gsap.timeline({ delay: 0.5 })

  if (heroTitleRef.value) {
    heroTimeline.from(heroTitleRef.value, {
      x: 50,
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
    })
  }

  if (heroDescRef.value) {
    heroTimeline.from(
      heroDescRef.value,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.5',
    )
  }

  if (footerRef.value) {
    CustomBounce.create('myCustomBounce', {
      strength: 0.6,
      squash: 3,
      squashID: 'myCustomBounce-squash',
    })

    gsap.from(footerRef.value, {
      x: 200,
      opacity: 0,
      duration: 1.5,
      ease: 'myCustomBounce',
      delay: heroTimeline.duration() + 0.5,
    })
  }
})
</script>

<style scoped>
.hero-bg {
  background: url('@/assets/images/img_cavalier.png') center/cover no-repeat;
}
.footer-blur {
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(6px);
}
</style>
