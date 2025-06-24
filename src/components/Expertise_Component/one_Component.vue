<template>
  <section
    class="flex flex-col items-center justify-center w-full px-4 py-12 text-white sm:px-6 md:px-12 lg:px-24 xl:px-32"
  >
    <div class="flex flex-col lg:flex-row w-full max-w-7xl gap-8">
      <!-- Colonne de gauche -->
      <div class="flex flex-col gap-4 w-full lg:w-[530px]">
        <!-- Bloc Stratégie 360° -->
        <router-link to="/Strategie_360" class="block">
          <div class="relative w-full h-[188px] bg-black rounded-xl p-6 overflow-hidden">
            <div
              class="absolute top-4 right-4 flex items-center justify-center w-5 h-5 rounded-full bg-[#F8D065] shadow"
            >
              <span class="text-xl text-black font-bold animated-text">+</span>
            </div>
            <div
              class="flex flex-col sm:flex-row md:flex-col justify-around mt-4 text-white gap-4 h-full"
            >
              <div
                class="uppercase text-start font-HouseOfCardsW03Bold text-[clamp(1.1rem,2.3vw,28px)] leading-tight break-words overflow-hidden"
              >
                Stratégie <br />marketing <br />360°
              </div>
              <div
                class="text-start font-Opensans font-light text-[clamp(0.7rem,1.4vw,14px)] leading-snug break-words overflow-hidden line-clamp-4 sm:line-clamp-none"
              >
                Nous concevons des campagnes intégrées alliant branding, digital, média et terrain,
                en parfaite cohérence avec vos objectifs de croissance.
              </div>
            </div>
          </div>
        </router-link>

        <!-- Deux petits blocs -->
        <div class="flex flex-col sm:flex-row gap-4">
          <router-link to="/ActivationsView" class="block w-full sm:w-1/2">
            <div class="bg-black rounded-xl p-4 h-[274px] flex flex-col justify-between">
              <div class="flex justify-end">
                <div class="w-5 h-5 rounded-full bg-[#F8D065] flex items-center justify-center">
                  <span
                    class="text-xl text-black font-bold group-hover:rotate-90 group-hover:duration-700 animated-text"
                    >+</span
                  >
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <div
                  class="font-HouseOfCardsW03Bold uppercase text-start text-lg md:text-xl animated-text"
                >
                  Activations <br />événementielles
                </div>
                <div class="text-sm font-Opensans font-light text-start animated-text">
                  Du concept au terrain, nous imaginons et réalisons des événements impactants,
                  expérientiels et alignés avec votre ADN de marque.
                </div>
              </div>
            </div>
          </router-link>
          <div
            class="w-full sm:w-1/2 h-[274px] bg-black rounded-xl overflow-hidden flex items-center justify-center"
          >
            <img
              src="@/assets/images/Bateau Pirate Noir 1.png"
              class="object-cover h-full w-full"
              alt=""
            />
          </div>
        </div>
      </div>

      <!-- Colonne de droite -->
      <div class="flex flex-col gap-4 w-full">
        <div class="flex flex-col md:flex-row gap-4">
          <router-link to="/MediasImmersifsView" class="block md:w-[240px]">
            <div class="bg-black rounded-xl p-4 h-full flex flex-col justify-between">
              <div class="flex justify-end">
                <div class="w-5 h-5 rounded-full bg-[#F8D065] flex items-center justify-center">
                  <span
                    class="text-xl text-black font-bold group-hover:rotate-90 group-hover:duration-700 animated-text"
                    >+</span
                  >
                </div>
              </div>
              <div class="font-HouseOfCardsW03Bold uppercase text-2xl md:text-3xl animated-text">
                Médias <br />immersifs
              </div>
              <div class="text-xs font-light font-Opensans animated-text">
                Nous créons des formats innovants (vidéos interactives, contenus 3D, mini-sites,
                motion design…) pour capter l’attention et immerger vos audiences dans votre
                univers.
              </div>
            </div>
          </router-link>

          <div class="flex flex-col gap-4 w-full">
            <div class="flex flex-col sm:flex-row gap-4">
              <div
                class="w-full sm:w-[215px] h-[169px] bg-black rounded-xl flex items-center justify-center overflow-hidden"
              >
                <img
                  src="@/assets/images/bt Pirate Noir.png"
                  alt=""
                  class="object-cover w-[160px]"
                />
              </div>
              <router-link to="/BrandingContenusView" class="block w-full">
                <div class="bg-black rounded-xl p-4 flex flex-col justify-between h-full">
                  <div class="flex justify-between items-start">
                    <div class="font-HouseOfCardsW03Bold uppercase text-2xl animated-text">
                      Branding & contenus
                    </div>
                    <div class="w-5 h-5 rounded-full bg-[#F8D065] flex items-center justify-center">
                      <span
                        class="text-xl text-black font-bold group-hover:rotate-90 group-hover:duration-700 animated-text"
                        >+</span
                      >
                    </div>
                  </div>
                  <div class="text-xs font-light text-start font-Opensans animated-text">
                    Nous bâtissons des identités fortes, cohérentes et mémorables, à travers des
                    contenus visuels et narratifs de haute qualité.
                  </div>
                </div>
              </router-link>
            </div>

            <router-link to="/StudioCreationView" class="block">
              <div class="bg-black rounded-xl p-4 group flex flex-col justify-between">
                <div class="flex justify-between items-start">
                  <div class="font-HouseOfCardsW03Bold uppercase text-2xl animated-text">
                    Studio de <br />création
                  </div>
                  <div class="w-5 h-5 rounded-full bg-[#F8D065] flex items-center justify-center">
                    <span
                      class="text-xl text-black font-bold group-hover:rotate-90 group-hover:duration-700 animated-text"
                      >+</span
                    >
                  </div>
                </div>
                <div class="text-xs font-light font-Opensans text-start animated-text">
                  Notre studio interne conçoit et produit vos visuels, vidéos, capsules motion,
                  jingles, spots et supports multi-formats avec exigence et créativité.
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 mt-4">
          <router-link to="/AnalyseIAView" class="block w-full sm:w-1/2">
            <div class="bg-black rounded-xl p-4 flex flex-col justify-between h-full">
              <div class="flex justify-between items-start">
                <div class="font-HouseOfCardsW03Bold uppercase text-2xl animated-text">
                  Analyse de <br />performance IA
                </div>
                <div class="w-5 h-5 rounded-full bg-[#F8D065] flex items-center justify-center">
                  <span
                    class="text-xl text-black font-bold group-hover:rotate-90 group-hover:duration-700 animated-text"
                    >+</span
                  >
                </div>
              </div>
              <div class="text-xs font-light font-Opensans text-start animated-text">
                Grâce à nos outils intelligents, nous mesurons l’efficacité de chaque action en
                temps réel et optimisons vos campagnes en continu.
              </div>
            </div>
          </router-link>

          <router-link to="/ActivationInfluenceView" class="block w-full sm:w-1/2">
            <div class="bg-black rounded-xl p-4 flex flex-col justify-between h-full">
              <div class="flex justify-between items-start">
                <div class="font-HouseOfCardsW03Bold uppercase text-2xl animated-text">
                  Activation <br />d’influence
                </div>
                <div class="w-5 h-5 rounded-full bg-[#F8D065] flex items-center justify-center">
                  <span
                    class="text-xl text-black font-bold group-hover:rotate-90 group-hover:duration-700 animated-text"
                    >+</span
                  >
                </div>
              </div>
              <div class="text-xs font-light font-Opensans text-start animated-text">
                Nous mobilisons les influenceurs clés de votre secteur pour amplifier votre message
                et engager vos communautés cibles.
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Scroll Boat -->
    <div class="flex items-center justify-center mt-12 flex-col">
      <span class="font-Opensans text-black animated-text">Scrollez</span>
      <img :src="boatGif" alt="boat" width="84" height="84" ref="boatGifRef" />
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
