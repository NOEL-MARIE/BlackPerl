<template>
  <div class="carousel-container flex items-center justify-center flex-col h-screen w-screen">
    <h2 class="title">STRATÉGIE MARKETING 360°</h2>
    <p class="subtitle">
      Nous avons imaginé et déployé des campagnes à <b>360°</b>, ancrées dans la culture ivoirienne,
      pour repositionner, faire émerger ou renforcer des marques à fort potentiel.
    </p>
    <div class="carousel">
      <button class="arrow left Right rotate-180" @click="prevSlide">
        <img :src="Right" alt="" width="74px"/>
      </button>
      <div class="slide-content">
        <transition name="slide-up" mode="out-in">
          <img
            v-if="currentSlide"
            :key="currentSlide.img"
            class="slide-image"
            :src="currentSlide.img"
            alt="Chicken Party"
          />
        </transition>
        <transition name="slide-left" mode="out-in">
          <div class="slide-text" v-if="currentSlide" :key="currentSlide.title">
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
      <button class="arrow right " @click="nextSlide">
        <img :src="Right" alt="" width="74px"/>

      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Right from '@/assets/images/Right.gif'
interface Slide {
  img: string
  date: string
  title: string
  brand: string
  subtitle: string
  description: string
  result: string
}

const slides = ref<Slide[]>([
  {
    img: 'https://pplx-res.cloudinary.com/image/private/user_uploads/45173632/8a610af2-bf8a-400a-a60e-6cfb4cee9c9a/Strategie-360-1.jpg',
    date: 'Décembre 2024',
    title: 'CHICKEN PARTY\nTEAM PAIYA X TEAM2POY',
    brand: 'Chicken Nation',
    subtitle: 'La conquête du marché du poulet frit en Côte d’Ivoire',
    description:
      'Lancement d’une stratégie 360° mêlant : branding, campagnes social media, activations terrain, humour et références locales.',
    result:
      '+10 millions d’impressions sur les réseaux, un taux de conversion élevé, et une appropriation rapide par le public jeune.',
  },
  // Ajoute d'autres slides ici si besoin
])

const currentIndex = ref(0)
const currentSlide = computed(() => slides.value[currentIndex.value])

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
}

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}
</script>

<style scoped>
.title {
  text-align: center;
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

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow {
  background: none;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  color: #aaa;
  transition: color 0.2s;
}

.arrow:hover {
  color: #ff9800;
}

.slide-content {
  display: flex;
  align-items: flex-start;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  margin: 0 20px;
  min-width: 650px;
  max-width: 700px;
  padding: 24px 32px;
  gap: 32px;
}

.slide-image {
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(255, 152, 0, 0.12);
}

.slide-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

.slide-up-enter-active {
  animation: slideUpIn 0.7s cubic-bezier(0.77, 0, 0.18, 1) both;
}
@keyframes slideUpIn {
  from {
    opacity: 0;
    transform: translateY(70px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.slide-left-enter-active {
  animation: slideLeftIn 0.7s cubic-bezier(0.77, 0, 0.18, 1) both;
}
@keyframes slideLeftIn {
  from {
    opacity: 0;
    transform: translateX(60px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
</style>
