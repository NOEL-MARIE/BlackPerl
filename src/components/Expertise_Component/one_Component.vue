<template>
  <section class="flex items-center flex-col h-screen justify-center w-screen text-white">
    <div class="h-[550px] pl-44 items-center justify-center w-screen flex flex-row">
      <div class="w-[530px] h-[550px]">
        <div class="flex flex-col gap-2 h-[512px]">
          <button class="hover:cursor-pointer">
            <router-link to="/Strategie_360" class="block hover:cursor-pointer">
              <div class="relative w-[512px] h-[188px] bg-black rounded-xl pl-8 pt-2 pr-8">
                <div
                  class="absolute top-4 right-4 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#F8D065] shadow"
                >
                  <span class="text-xl text-black font-bold animated-text">+</span>
                </div>

                <div class="flex justify-around mt-5 text-white">
                  <div
                    class="uppercase text-start font-HouseOfCardsW03Bold text-[29px] flex animated-text"
                  >
                    Stratégie <br />
                    marketing <br />
                    360°
                  </div>
                  <div class="text-sm text-start font-Opensans font-light animated-text">
                    Nous concevons des campagnes <br />
                    intégrées alliant branding, digital,<br />
                    média et terrain, en parfaite <br />
                    cohérence avec vos objectifs de <br />
                    croissance.
                  </div>
                </div>
              </div>
            </router-link>
          </button>
          <div class="flex flex-row mt-2 gap-5">
            <div class="w-[246px] h-[274px] bg-black rounded-xl pl-8 pr-8 flex">
              <button>
                <router-link to="/ActivationsView">
                  <div class="flex group flex-col">
                    <div>
                      <div
                        class="ml-[180px] top4 right-4 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#F8D065]"
                      >
                        <span
                          class="text-xl group-hover:rotate-90 group-hover:duration-700 text-black font-bold animated-text"
                          >+</span
                        >
                      </div>
                    </div>
                    <div class="gap-7 flex flex-col">
                      <div
                        class="font-HouseOfCardsW03Bold uppercase text-start text-3xl text-cente flex flex-col animated-text"
                      >
                        Activations
                        <span class="font-HouseOfCardsW03Bold uppercase text-[24px] animated-text"
                          >événementielles</span
                        >
                      </div>
                      <div
                        class="flex flex-col text-sm text-start font-Opensans font-light animated-text"
                      >
                        Du concept au terrain, nous <br />
                        imaginons et réalisons des <br />
                        événements impactants,<br />
                        expérientiels et alignés avec <br />
                        votre ADN de marque.
                      </div>
                    </div>
                  </div>
                </router-link>
              </button>
            </div>
            <div
              class="w-[246px] h-[274px] bg-black rounded-xl flex items-center justify-center overflow-hidden"
            >
              <img
                src="@/assets/images/Bateau Pirate Noir 1.png"
                class="overflow-hidden object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-[890px] h-[555px] flex flex-col">
        <div class="h-[330px] gap-3 flex">
          <button>
            <router-link to="MediasImmersifsView">
              <div class="w-[240px] h-[320px] group gap-2 bg-black rounded-xl p-3">
                <div class="flex flex-col">
                  <div
                    class="ml-[199px] top-4 right-4 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#F8D065] shadow"
                  >
                    <span
                      class="text-xl group-hover:rotate-90 group-hover:duration-700 text-black font-bold animated-text"
                      >+</span
                    >
                  </div>
                  <div class="flex justify-between text-start flex-col gap-9">
                    <div class="font-HouseOfCardsW03Bold uppercase text-5xl animated-text">
                      Médias <br />
                      immersifs
                    </div>
                    <div class="text-xs font-light font-Opensans animated-text">
                      Nous créons des formats <br />
                      innovants (vidéos <br />
                      interactives, contenus 3D, <br />
                      mini-sites, motion design…) <br />
                      pour capter l’attention et <br />
                      immerger vos audiences <br />
                      dans votre univers.
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </button>
          <div class="w-[476px] h-[300px] flex gap-2 flex-col">
            <div class="flex gap-3 justify-between">
              <div
                class="w-[215px] h-[169px] bg-black rounded-xl overflow-hidden flex items-center justify-center"
              >
                <img
                  src="@/assets/images/bt Pirate Noir.png"
                  alt=""
                  class="object-cover"
                  width="160px"
                />
              </div>
              <div class="w-[350px] h-[169px] group bg-black text-white rounded-xl">
                <button>
                  <router-link to="BrandingContenusView">
                    <div class="flex flex-col p-4">
                      <div class="flex justify-between text-start">
                        <div class="font-HouseOfCardsW03Bold uppercase text-3xl animated-text">
                          Branding & <br />
                          contenus
                        </div>
                        <div
                          class="top-4 right-4 ml-24 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#F8D065]"
                        >
                          <span
                            class="text-xl group-hover:rotate-90 group-hover:duration-700 text-black font-bold animated-text"
                            >+</span
                          >
                        </div>
                      </div>
                      <div class="font-light text-xs text-start font-Opensans animated-text">
                        Nous bâtissons des identités fortes, <br />
                        cohérentes et mémorables, à travers <br />
                        des contenus visuels et narratifs de <br />
                        haute qualité.
                      </div>
                    </div>
                  </router-link>
                </button>
              </div>
            </div>
            <div class="w-[476px] h-[151px] rounded-xl group bg-black">
              <button>
                <router-link to="StudioCreationView">
                  <div class="flex-col flex p-4">
                    <div class="flex justify-between">
                      <div
                        class="font-HouseOfCardsW03Bold text-start text-2xl uppercase animated-text"
                      >
                        Studio de <br />Création
                      </div>
                      <div
                        class="top-4 ml-80 right-4 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#F8D065]"
                      >
                        <span
                          class="text-xl group-hover:rotate-90 group-hover:duration-700 text-black font-bold animated-text"
                          >+</span
                        >
                      </div>
                    </div>
                    <div class="text-xs font-Opensans text-start font-light animated-text">
                      Notre studio interne conçoit et produit vos visuels, vidéos, <br />
                      capsules motion, jingles, spots et supports multi-formats <br />
                      avec exigence et créativité.
                    </div>
                  </div>
                </router-link>
              </button>
            </div>
          </div>
        </div>
        <div class="w-[729px] h-[210px] gap-2 flex group mt-3">
          <div class="w-[405px] h-[150px] bg-black rounded-xl">
            <button>
              <router-link to="AnalyseIAView">
                <div class="flex-col flex p-4">
                  <div class="flex">
                    <div
                      class="font-HouseOfCardsW03Bold text-start text-2xl uppercase animated-text"
                    >
                      Analyse de <br />
                      performance IA
                    </div>
                    <div
                      class="top-4 ml-[155px] right-4 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#F8D065]"
                    >
                      <span
                        class="text-xl group-hover:rotate-90 group-hover:duration-700 text-black font-bold animated-text"
                        >+</span
                      >
                    </div>
                  </div>
                  <div class="text-xs font-light text-start font-Opensans animated-text">
                    Grâce à nos outils intelligents, nous mesurons l’efficacité <br />
                    de chaque action en temps réel et optimisons vos <br />
                    campagnes en continu.
                  </div>
                </div>
              </router-link>
            </button>
          </div>
          <div class="w-[390px] h-[150px] group bg-black rounded-xl">
            <button>
              <router-link to="ActivationInfluenceView">
                <div class="flex-col flex p-4">
                  <div class="flex">
                    <div
                      class="font-HouseOfCardsW03Bold text-start text-2xl uppercase leading-6 animated-text"
                    >
                      Activation <br />
                      d’influence
                    </div>
                    <div
                      class="top-4 ml-auto right-4 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#F8D065]"
                    >
                      <span
                        class="text-xl group-hover:rotate-90 group-hover:duration-700 text-black font-bold animated-text"
                        >+</span
                      >
                    </div>
                  </div>
                  <div class="text-xs font-Opensans text-start mt-4 font-light animated-text">
                    Nous mobilisons les influenceurs clés de votre secteur pour amplifier <br />
                    votre message et engager vos communautés cibles.
                  </div>
                </div>
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center pb-12 flex-col">
      <span class="font-Opensans text-black animated-text">Scrollez</span>
      <img :src="boatGif" alt="" width="84px" height="84px" ref="boatGifRef" />
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

// Enregistrement des plugins GSAP
gsap.registerPlugin(ScrollTrigger, CustomEase, CustomBounce)

export default {
  name: 'ExpertiseSection',
  components: {},
  data() {
    return {
      boatGif,
    }
  },
  setup() {
    // Références pour les éléments du DOM
    const boatGifRef = ref<HTMLElement | null>(null)
    const animatedTextElements = ref<HTMLElement[]>([])

    onMounted(() => {
      // Sélectionne tous les éléments avec la classe 'animated-text' pour les animations
      animatedTextElements.value = Array.from(document.querySelectorAll('.animated-text'))

      // Animation pour chaque élément textuel
      animatedTextElements.value.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%', // Déclenche l'animation lorsque le haut de l'élément est à 90% du viewport
            toggleActions: 'play none none none', // Joue l'animation une seule fois
            // markers: true, // Décommenter pour visualiser les marqueurs de ScrollTrigger
          },
          y: 20, // Commence 20px plus bas
          opacity: 0, // Commence invisible
          duration: 1, // Durée de l'animation
          ease: 'power2.out', // Type d'ease
        })
      })

      // Animation du GIF du bateau
      if (boatGifRef.value) {
        // Crée une ease CustomBounce personnalisée pour le bateau
        CustomBounce.create('boatBounce', {
          strength: 0.4, // Force du rebond
          squash: 2, // Effet d'écrasement/étirement
          squashID: 'boatBounce-squash',
        })

        // Animation de flottaison constante
        gsap.to(boatGifRef.value, {
          y: -15, // Déplace le bateau de haut en bas
          repeat: -1, // Répète à l'infini
          yoyo: true, // Inverse l'animation à chaque répétition
          duration: 1.2, // Durée d'un cycle de flottaison
          ease: 'sine.inOut', // Courbe d'animation douce
        })

        // Animation de l'apparition du bateau avec rebond au scroll
        gsap.from(boatGifRef.value, {
          scale: 0.8, // Commence légèrement plus petit
          opacity: 0, // Commence invisible
          duration: 1, // Durée de l'animation d'apparition
          ease: 'elastic.out(1, 0.5)', // Effet élastique pour le rebond
          scrollTrigger: {
            trigger: boatGifRef.value,
            start: 'top 95%', // Déclenche l'animation lorsque le haut du bateau est à 95% du viewport
            toggleActions: 'play none none none', // Joue l'animation une seule fois
            // markers: true, // Décommenter pour visualiser les marqueurs de ScrollTrigger
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
/* Styles existants pour les effets de survol */
.hover-scale {
  transition: transform 0.3s ease-in-out;
}

.hover-scale:hover {
  transform: scale(1.05);
}

/* Vous pouvez ajouter ici d'autres styles spécifiques si nécessaire */
</style>
