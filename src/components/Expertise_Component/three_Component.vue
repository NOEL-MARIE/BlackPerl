<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/require-toggle-inside-transition -->
<template>
  <div class="carousel-container flex pt-9 items-center justify-center flex-col h-screen w-screen">
    <button
      class="absolute top-5 left-5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
      @click="goBack"
    >
      Retour
    </button>

    <h2 class="title font-HouseOfCardsW03Bold uppercase text-[#808080]">
      STRATÉGIE MARKETING 360°
    </h2>
    <div class="flex items-center justify-center ml-64">

      <p class="w-[1147px] text-xl ">
        Nous avons imaginé et déployé des campagnes à <b>360°</b>, ancrées dans la culture <br />
        ivoirienne, pour repositionner, faire émerger ou renforcer des marques à fort <br />
        potentiel.
      </p>
    </div>
    <div class="carousel flex mt-7 w-[1206px]">
      <button class="arrow left rotate-180" @click="prevSlide">
        <img :src="Right" alt="left arrow" width="74px" />
      </button>

      <div class="slide-content group">
        <transition name="fade" mode="out-in">
          <a
            href="https://madebyshape.co.uk/work/forma/"
            class="relative group flex flex-col items-start transform rotate-001"
          >
            <div class="w-[490px] h-[490px] relative overflow-hidden">
              <div
                class="absolute -top-px pt-px -right-px z-20 bg-white pl-3 pb-3 transition-transform duration-300 transform-gpu rotate-001 rounded-bl-3xl xl:-translate-y-full xl:group-hover:translate-y-0 dark:bg-grayDark-600"
              >
                <svg
                  id="Layer_1"
                  class="w-10 h-10 lg:w-10 lg:h-10 text-white fill-current absolute top-0 left-px transform-gpu -translate-x-full dark:text-grayDark-600"
                  version="1.1"
                  xmlns="http://www.w3.org/4900/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 100 100"
                  xml:space="preserve"
                >
                  <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                </svg>
                <svg
                  id="Layer_1"
                  class="w-10 h-10 lg:w-10 lg:h-10 text-white fill-current absolute bottom-px right-0 transform-gpu translate-y-full dark:text-grayDark-600"
                  version="1.1"
                  xmlns="http://www.w3.org/4900/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 100 100"
                  xml:space="preserve"
                >
                  <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
                </svg>
                <div class="flex flex-wrap items-center -mb-2 lg:-mb-3 -mr-2">
                  <div
                    class="bg-gray-50 shadow-slate-200 shadow-inner leading-tight rounded-full mr-2 mb-2 lg:mr-3 lg:mb-3 text-sm pt-2 pb-1.5 px-4 dark:bg-grayDark-400 dark:text-white"
                  >
                    {{ currentSlide.date }} <br />
                    {{ currentSlide.date1 }}
                  </div>
                </div>
              </div>
              <div
                class="shadow-2xl rounded-2xl transform-gpu overflow-hidden relative bg-gray-50 dark:bg-grayDark-400 lg:rounded-3xl"
              >
                <div class="w-[490px] h-[490px] relative overflow-hidden">
                  <div
                    class="w-full transform scale-110 transition-transform xl:group-hover:-translate-y-2.5"
                  >
                    <div
                      class="relative overflow-hidden w-[490px] h-[490px]"
                      style="padding-top: 75%"
                    >
                      <picture class="w-[490px] bg-cover h-[490px] absolute top-0 left-0">
                        <source
                          class=" "
                          type="image/webp"
                          :srcset="currentSlide.img"
                          sizes="100vw"
                        />
                        <img
                          class="bg-cover"
                          :src="currentSlide.img"
                          sizes="100vw"
                          :alt="currentSlide.description"
                          width="490px"
                          height="490px"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div> </a
        ></transition>

        <transition :name="textTransitionName" mode="out-in">
          <div
            class="slide-text mt-20"
            v-if="currentSlide"
            :key="currentSlide.title + currentIndex"
          >
            <div class="slide-desc w-[420px] h-[185px]">
              <b v-html="currentSlide.brand"></b> – {{ currentSlide.subtitle }} <br /><br />
              {{ currentSlide.description }}
              <br /><br />
              <b>Résultat :</b><br />
              {{ currentSlide.result }}
            </div>
          </div>
        </transition>
      </div>

      <button class="arrow right" @click="nextSlide">
        <img :src="Right" alt="right arrow" width="74px" />
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Ajoute ces styles si tu veux que le bouton "Retour" soit positionné absolument */
.carousel-container {
  position: relative; /* Important pour que l'absolute du bouton fonctionne */
}

/* Styles pour les transitions si tu en as besoin, sinon, c'est déjà dans ton template */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Right from '@/assets/images/Right.gif'
import ImgPaiya from '@/assets/images/TeamPaiya.jpg'
import ImgCeleste from '@/assets/images/Celeste.png'
import ImgCristaline from '@/assets/images/Christaline.png'

// Type de slide
interface Slide {
  img: string
  date: string
  title: string
  brand: string
  date1: string
  subtitle: string
  description: string
  result: string
}

// Slides
const slides = ref<Slide[]>([
  {
    img: ImgPaiya,
    date: 'Décembre',
    date1: '2025',
    title: 'CHICKEN PARTY\nTEAM PAIYA X TEAM2POY',
    brand: 'Chicken Nation',
    subtitle: 'La conquête du marché du poulet frit en Côte d’Ivoire',
    description:
      'Lancement d’une stratégie 360° mêlant : branding, campagnes social media, activations terrain, humour et références locales.',
    result:
      '+10 millions d’impressions sur les réseaux, un taux de conversion élevé, et une appropriation rapide par le public jeune.',
  },
  {
    img: ImgCeleste,
    date: 'Janvier',
    date1: '2025',
    title: 'NOUVELLE CAMPAGNE\nTEAM BISSO',
    brand: 'Céleste',
    subtitle: ' L’eau officielle de la CAN 2023',
    description:
      'Céleste – L’eau officielle de la CAN 2023 Création de la campagne “Céleste, l’eau de <br> la victoire” : Stratégie 360° (vidéos, influence, <br> éditorial) production de 7 épisodes digitaux <br> immersifs avec un influenceur sportif.',
    result: '+30 millions de vues cumulées, forte <br> notoriété, ancrage culturel pendant la CAN.',
  },
  {
    img: ImgCristaline,
    date: 'Janvier',
    date1: '2025',
    title: 'NOUVELLE CAMPAGNE\nTEAM BISSO',
    brand: 'Brand X',
    subtitle: 'Nouvelle stratégie de visibilité en zone urbaine',
    description:
      'Une approche moderne combinant affichage urbain, marketing viral et influence locale.',
    result: 'Augmentation de 25% de la notoriété en 3 semaines.',
  },
])

const currentIndex = ref(0)
const direction = ref<'left' | 'right'>('right')

// Slide actuel
const currentSlide = computed(() => slides.value[currentIndex.value])
const textTransitionName = computed(() =>
  direction.value === 'right' ? 'slide-right' : 'slide-left',
)

// Fonctions navigation
function prevSlide() {
  direction.value = 'left'
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
}

function nextSlide() {
  direction.value = 'right'
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}
import { useRouter } from 'vue-router'
// Nouvelle fonction pour le bouton "Retour"
const goBack = () => {
  // Option 1: Revenir à la page précédente dans l'historique du navigateur
  // window.history.back();

  // Option 2: Si tu utilises Vue Router, tu peux faire ceci:

  const router = useRouter()
  router.back() // Revient à la route précédente
  // ou
  // router.push('/ta-page-precedente'); // Va à une route spécifique
}
</script>

<style scoped>
/* TITRE + SOUS-TITRE */
.title {
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.subtitle {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 30px;
}

/* STRUCTURE CAROUSEL */
.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
}
.arrow {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.slide-content {
  display: flex;
  align-items: flex-start;
  width: 1147px;
  gap: 32px;
}
.slide-image {
  width: 360px;
  height: 360px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(255, 152, 0, 0.12);
}
.slide-text {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.slide-date {
  font-size: 0.9rem;
  color: #ff9800;
  font-weight: bold;
  margin-bottom: 8px;
}
.slide-title {
  font-size: 1.6rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 12px;
  white-space: pre-line;
}
.slide-desc {
  font-size: 1.08rem;
  color: #444;
}

/* TRANSITIONS */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.6s ease;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(50px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
