<!-- ExpertiseSection.vue -->
<template>
  <section
    class="flex items-center flex-col min-h-screen justify-center xl:mt-9 w-full text-white px-4 sm:px-6 lg:px-12"
  >
    <div class="flex flex-col xl:flex-row items-center justify-center w-full gap-8 xl:gap-96">
      <!-- BLOC DE GAUCHE -->
      <div class="w-full max-w-[530px] h-auto xl:h-[550px] xl:scale-150 xl:mt-28">
        <div class="flex flex-col gap-4 xl:gap-2 h-auto">
          <!-- PREMIER BLOC -->
          <router-link to="/Strategie_360" class="block hover:cursor-pointer">
            <div
              class="relative w-full h-auto xl:w-[512px] xl:h-[188px] bg-black hover:scale-105 transition-transform duration-300 rounded-xl p-6 xl:pl-8 xl:pt-2 xl:pr-8"
            >
              <div
                class="absolute top-4 right-4 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#F8D065] shadow"
              >
                <span class="text-xl text-black font-bold animated-text">+</span>
              </div>
              <div class="flex flex-col xl:flex-row justify-around mt-2 xl:mt-5 text-white gap-2">
                <div
                  class="uppercase text-start font-HouseOfCardsW03Bold text-[22px] xl:text-[29px] animated-text"
                >
                  Stratégie <br />
                  marketing <br />
                  360°
                </div>
                <div class="text-xs xl:text-sm text-start font-Opensans font-light animated-text">
                  Nous concevons des campagnes <br />
                  intégrées alliant branding, digital, <br />
                  média et terrain, en parfaite <br />
                  cohérence avec vos objectifs <br />
                  de croissance.
                </div>
              </div>
            </div>
          </router-link>

          <!-- DEUX BLOCS DU BAS -->
          <div class="flex flex-col sm:flex-row mt-2 gap-4">
            <!-- ACTIVATIONS -->
            <router-link to="/ActivationsView" class="block w-full sm:w-1/2">
              <div
                class="h-auto xl:h-[274px] bg-black hover:scale-105 transition-transform duration-300 rounded-xl p-4 flex flex-col justify-between group"
              >
                <div class="flex justify-end">
                  <div
                    class="w-[20px] h-[20px] rounded-full bg-[#F8D065] flex items-center justify-center"
                  >
                    <span
                      class="text-xl text-black font-bold group-hover:rotate-90 transition-transform duration-700 animated-text"
                      >+</span
                    >
                  </div>
                </div>
                <div class="gap-3 flex flex-col">
                  <div class="font-HouseOfCardsW03Bold uppercase text-xl xl:text-3xl animated-text">
                    Activations <br />
                    <span class="text-lg xl:text-[24px]">événementielles</span>
                  </div>
                  <div class="text-xs xl:text-sm font-Opensans font-light animated-text">
                    Du concept au terrain, nous imaginons <br />
                    et réalisons des événements impactants, <br />
                    expérientiels et alignés avec votre ADN.
                  </div>
                </div>
              </div>
            </router-link>

            <!-- IMAGE BATEAU -->
            <div
              class="w-full sm:w-[300px] h-auto bg-black rounded-xl flex items-center justify-center p-2 group"
            >
              <img
                src="@/assets/images/Bateau Pirate Noir 1.png"
                class="object-cover max-h-[120px] xl:max-h-none"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <!-- BLOC DE DROITE -->
      <div class="w-full xl:w-[890px] h-auto flex flex-col xl:scale-150 gap-4">
        <div class="flex flex-col xl:flex-row gap-4">
          <!-- Médias immersifs -->
          <router-link to="/Strategie_360" class="block hover:cursor-pointer">

          </router-link>
          <div
            class="w-full xl:w-[240px] bg-black hover:scale-105 transition-transform duration-300 rounded-xl p-4 group"
          >
            <div class="flex justify-end">
              <div
                class="w-[20px] h-[20px] rounded-full bg-[#F8D065] flex items-center justify-center"
              >
                <span
                  class="text-xl text-black font-bold group-hover:rotate-90 transition-transform duration-700 animated-text"
                  >+</span
                >
              </div>
            </div>
            <div class="font-HouseOfCardsW03Bold text-2xl xl:text-4xl mb-2 animated-text">
              Médias immersifs
            </div>
            <div class="text-xs xl:text-sm font-light font-Opensans animated-text">
              Nous créons des formats innovants (vidéos interactives, contenus 3D, motion design…)
              pour capter l’attention et immerger vos audiences.
            </div>
          </div>

          <!-- Branding & Studio -->
          <div class="flex flex-col gap-4 w-full">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="w-full md:w-1/2 bg-black rounded-xl flex items-center justify-center p-2">
                <img
                  src="@/assets/images/bt Pirate Noir.png"
                  alt=""
                  class="object-cover w-[120px] xl:w-[160px]"
                />
              </div>
              <div
                class="w-full md:w-1/2 bg-black hover:scale-105 transition-transform duration-300 text-white rounded-xl p-4 group"
              >
                <div class="flex justify-between items-start">
                  <div class="font-HouseOfCardsW03Bold uppercase text-xl xl:text-3xl animated-text">
                    Branding & <br />
                    contenus
                  </div>
                  <div
                    class="w-[20px] h-[20px] rounded-full bg-[#F8D065] flex items-center justify-center"
                  >
                    <span
                      class="text-xl text-black font-bold group-hover:rotate-90 transition-transform duration-700 animated-text"
                      >+</span
                    >
                  </div>
                </div>
                <div class="text-xs xl:text-sm font-light font-Opensans animated-text">
                  Nous bâtissons des identités fortes, cohérentes et mémorables avec des contenus
                  visuels de qualité.
                </div>
              </div>
            </div>

            <!-- Studio Création -->
            <div
              class="w-full bg-black hover:scale-105 transition-transform duration-300 rounded-xl p-4 group"
            >
              <div class="flex justify-between items-start">
                <div class="font-HouseOfCardsW03Bold text-xl xl:text-2xl uppercase animated-text">
                  Studio de <br />Création
                </div>
                <div
                  class="w-[20px] h-[20px] rounded-full bg-[#F8D065] flex items-center justify-center"
                >
                  <span
                    class="text-xl text-black font-bold group-hover:rotate-90 transition-transform duration-700 animated-text"
                    >+</span
                  >
                </div>
              </div>
              <div class="text-xs xl:text-sm font-Opensans font-light animated-text">
                Notre studio interne conçoit et produit vos visuels, vidéos, jingles, spots et
                supports multi-formats avec exigence.
              </div>
            </div>
          </div>
        </div>

        <!-- Dernière ligne -->
        <div class="flex flex-col md:flex-row gap-4">
          <div
            class="w-full md:w-1/2 bg-black hover:scale-105 transition-transform duration-300 rounded-xl p-4 group"
          >
            <div class="flex justify-between items-start">
              <div class="font-HouseOfCardsW03Bold text-xl xl:text-2xl uppercase animated-text">
                Analyse de <br />performance IA
              </div>
              <div
                class="w-[20px] h-[20px] rounded-full bg-[#F8D065] flex items-center justify-center"
              >
                <span
                  class="text-xl text-black font-bold group-hover:rotate-90 transition-transform duration-700 animated-text"
                  >+</span
                >
              </div>
            </div>
            <div class="text-xs xl:text-sm font-Opensans font-light animated-text">
              Grâce à nos outils intelligents, nous mesurons et optimisons vos campagnes en continu.
            </div>
          </div>
          <div
            class="w-full md:w-1/2 bg-black hover:scale-105 transition-transform duration-300 rounded-xl p-4 group"
          >
            <div class="flex justify-between items-start">
              <div
                class="font-HouseOfCardsW03Bold text-xl xl:text-2xl uppercase leading-6 animated-text"
              >
                Activation <br />
                d’influence
              </div>
              <div
                class="w-[20px] h-[20px] rounded-full bg-[#F8D065] flex items-center justify-center"
              >
                <span
                  class="text-xl text-black font-bold group-hover:rotate-90 transition-transform duration-700 animated-text"
                  >+</span
                >
              </div>
            </div>
            <div class="text-xs xl:text-sm font-Opensans font-light text-justify animated-text">
              Notre studio conçoit et produit vos visuels, vidéos, capsules motion, jingles et
              supports multi-formats.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Boat -->
    <div class="flex items-center justify-center mt-12 xl:mt-44 scale-100 xl:scale-150 flex-col">
      <span class="font-Opensans text-black animated-text">Scrollez</span>
      <img :src="boatGif" alt="boat" width="84px" height="84px" ref="boatGifRef" />
    </div>
  </section>
</template>

<script lang="ts">
import boatGif from '@/assets/images/boat.gif'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import { CustomBounce } from 'gsap/CustomBounce'

gsap.registerPlugin(ScrollTrigger, CustomEase, CustomBounce)

export default {
  name: 'ExpertiseSection',
  data() {
    return {
      boatGif,
    }
  },
  setup() {
    const boatGifRef = ref<HTMLElement | null>(null)
    const animatedTextElements = ref<HTMLElement[]>([])

    onMounted(() => {
      // Animation d'apparition sur tous les textes
      animatedTextElements.value = Array.from(document.querySelectorAll('.animated-text'))

      animatedTextElements.value.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          y: 20,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        })
      })

      // Animation du bateau
      if (boatGifRef.value) {
        CustomBounce.create('boatBounce', {
          strength: 0.4,
          squash: 2,
          squashID: 'boatBounce-squash',
        })

        gsap.to(boatGifRef.value, {
          y: -15,
          repeat: -1,
          yoyo: true,
          duration: 1.2,
          ease: 'sine.inOut',
        })

        gsap.from(boatGifRef.value, {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: boatGifRef.value,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        })
      }
    })

    return {
      boatGifRef,
    }
  },
}
</script>

<style scoped>
.hover-scale {
  transition: transform 0.3s ease-in-out;
}
.hover-scale:hover {
  transform: scale(1.05);
}
</style>
