<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'

// Images locales importées
import AlyssaImg from '@/assets/images/Visuel_alyssa.jpg'
import Visuel_tabaskyImg from '@/assets/images/Visuel_tabasky.jpg'
import Visuel_mitstubichiImg from '@/assets/images/Visuel_mitstubichi.jpg'
import Visuel_celesteImg from '@/assets/images/Visuel_celeste.jpg'
import Visuel_infirmierImg from '@/assets/images/Visuel_infirmier.jpg'
import Visuel_don_de_sangImg from '@/assets/images/Visuel_don_de_sang.png'

interface ResponsiveCard {
  image: string
  radius: number
  size: {
    lg: { width: number; height: number }
    xl: { width: number; height: number }
  }
}

const screenSize = ref<'lg' | 'xl'>('lg')

// Met à jour screenSize selon la largeur de la fenêtre
const updateSize = () => {
  screenSize.value = window.innerWidth >= 1280 ? 'xl' : 'lg'
}

onMounted(() => {
  updateSize()
  window.addEventListener('resize', updateSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSize)
})

// Cartes haut
const topCards = ref<ResponsiveCard[]>([
  {
    image: AlyssaImg,
    radius: 24,
    size: {
      lg: { width: 680, height: 340 },
      xl: { width: 912, height: 522 },
    },
  },
  {
    image: Visuel_tabaskyImg,
    radius: 24,
    size: {
      lg: { width: 500, height: 340 },
      xl: { width: 731, height: 522 },
    },
  },
  {
    image: Visuel_mitstubichiImg,
    radius: 24,
    size: {
      lg: { width: 500, height: 340 },
      xl: { width: 631, height: 522 },
    },
  },
])

// Cartes bas
const bottomCards = ref<ResponsiveCard[]>([
  {
    image: Visuel_celesteImg,
    radius: 24,
    size: {
      lg: { width: 500, height: 340 },
      xl: { width: 631, height: 522 },
    },
  },
  {
    image: Visuel_infirmierImg,
    radius: 24,
    size: {
      lg: { width: 500, height: 340 },
      xl: { width: 731, height: 522 },
    },
  },
  {
    image: Visuel_don_de_sangImg,
    radius: 24,
    size: {
      lg: { width: 680, height: 340 },
      xl: { width: 912, height: 522 },
    },
  },
])

function removeTopCard(index: number) {
  nextTick(() => {
    const cardEl = document.querySelector(`[data-top-index="${index}"]`) as HTMLElement
    if (!cardEl) return
    gsap.to(cardEl, {
      duration: 0.5,
      opacity: 0,
      scale: 0.8,
      ease: 'power1.in',
      onComplete() {
        topCards.value.splice(index, 1)
      },
    })
  })
}

function removeBottomCard(index: number) {
  nextTick(() => {
    const cardEl = document.querySelector(`[data-bottom-index="${index}"]`) as HTMLElement
    if (!cardEl) return
    gsap.to(cardEl, {
      duration: 0.5,
      opacity: 0,
      scale: 0.8,
      ease: 'power1.in',
      onComplete() {
        bottomCards.value.splice(index, 1)
      },
    })
  })
}
</script>

<template>
  <div class="flex flex-col w-full p-4 xl: min-h-screen bg-white overflow-auto">
    <!-- Cartes du haut -->
    <div class="flex flex-wrap justify-around gap-6 mb-6">
      <section
        v-for="(card, i) in topCards"
        :key="'top-' + i"
        class="relative rounded-2xl shadow-lg overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
        :data-top-index="i"
        :style="{
          width: card.size[screenSize].width + 'px',
          height: card.size[screenSize].height + 'px',
          borderRadius: card.radius + 'px'
        }"
      >
        <img
          :src="card.image"
          :alt="'Image ' + i"
          class="w-full h-full object-cover select-none pointer-events-none"
          :style="{ borderRadius: card.radius + 'px' }"
          draggable="false"
        />
        <div
          class="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none bg-gradient-to-t from-black/80 via-black/30 to-black/10"
          :style="{ borderRadius: card.radius + 'px' }"
        >
          <button
            class="pointer-events-auto border font-cinzel border-white text-white px-6 py-2 rounded-full font-semibold shadow-md bg-black/40 hover:bg-black/60 transition-colors"
            @click="removeTopCard(i)"
          >
            VOIR PROJET
          </button>
        </div>
      </section>
    </div>

    <!-- Cartes du bas -->
    <div class="flex flex-wrap justify-around gap-6">
      <section
        v-for="(card, i) in bottomCards"
        :key="'bottom-' + i"
        class="relative rounded-2xl shadow-lg overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
        :data-bottom-index="i"
        :style="{
          width: card.size[screenSize].width + 'px',
          height: card.size[screenSize].height + 'px',
          borderRadius: card.radius + 'px'
        }"
      >
        <img
          :src="card.image"
          :alt="'Image ' + (i + topCards.length)"
          class="w-full h-full object-cover select-none pointer-events-none"
          :style="{ borderRadius: card.radius + 'px' }"
          draggable="false"
        />
        <div
          class="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none bg-gradient-to-t from-black/80 via-black/30 to-black/10"
          :style="{ borderRadius: card.radius + 'px' }"
        >
          <button
            class="pointer-events-auto border font-cinzel border-white text-white px-6 py-2 rounded-full font-semibold shadow-md bg-black/40 hover:bg-black/60 transition-colors"
            @click="removeBottomCard(i)"
          >
            VOIR PROJET
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* Complément optionnel si tu veux améliorer les animations ou les responsive paddings */
</style>
