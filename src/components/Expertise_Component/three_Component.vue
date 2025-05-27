<template>
  <div class="carousel-container flex items-center justify-center flex-col h-screen w-screen">
    <h2 class="title font-HouseOfCardsW03Bold uppercase text-[#808080]">
      STRATÉGIE MARKETING 360°
    </h2>
    <p class=" w-[1147px] text-2xl">
      Nous avons imaginé et déployé des campagnes à <b>360°</b>, ancrées dans la culture <br />
      ivoirienne, pour repositionner, faire émerger ou renforcer des marques à fort <br />
      potentiel.
    </p>

    <div class="carousel flex mt-7 w-[1276px]">
      <!-- Flèche gauche -->
      <button class="arrow left rotate-180" @click="prevSlide">
        <img :src="Right" alt="left arrow" width="74px" />
      </button>

      <!-- Contenu du slide -->
      <div class="slide-content">
        <!-- Image avec fade -->
        <transition name="fade" mode="out-in">
          <img
            v-if="currentSlide"
            :key="currentSlide.img + currentIndex"
            class="slide-image"
            :src="currentSlide.img"
            alt="Slide image"
          />
        </transition>

        <!-- Texte avec transition directionnelle -->
        <transition :name="textTransitionName" mode="out-in">
          <div class="slide-text" v-if="currentSlide" :key="currentSlide.title + currentIndex">
            <div class="slide-date">{{ currentSlide.date }}</div>
            <div class="slide-title">{{ currentSlide.title }}</div>
            <div class="slide-desc">
              <b>{{ currentSlide.brand }}</b> – {{ currentSlide.subtitle }} <br /><br />
              {{ currentSlide.description }}
              <br /><br />
              <b>Résultat :</b><br />
              {{ currentSlide.result }}
            </div>
          </div>
        </transition>
      </div>

      <!-- Flèche droite -->
      <button class="arrow right" @click="nextSlide">
        <img :src="Right" alt="right arrow" width="74px" />
      </button>
    </div>
  </div>
</template>

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
  subtitle: string
  description: string
  result: string
}

// Slides
const slides = ref<Slide[]>([
  {
    img: ImgPaiya,
    date: 'Décembre 2024',
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
    date: 'Janvier 2025',
    title: 'NOUVELLE CAMPAGNE\nTEAM BISSO',
    brand: 'Brand X',
    subtitle: 'Nouvelle stratégie de visibilité en zone urbaine',
    description:
      'Une approche moderne combinant affichage urbain, marketing viral et influence locale.',
    result: 'Augmentation de 25% de la notoriété en 3 semaines.',
  },
  {
    img: ImgCristaline,
    date: 'Janvier 2025',
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
  direction.value === 'right' ? 'slide-right' : 'slide-left'
)

// Fonctions navigation
function prevSlide() {
  direction.value = 'left'
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length
}

function nextSlide() {
  direction.value = 'right'
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
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
  width: 560px;
  height: 560px;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active, .slide-left-leave-active,
.slide-right-enter-active, .slide-right-leave-active {
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
