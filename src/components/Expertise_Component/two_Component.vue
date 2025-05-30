<script setup lang="ts">
import { ref, nextTick } from 'vue'
import gsap from 'gsap'

// Images locales importées
import AlyssaImg from '@/assets/images/Visuel_alyssa.jpg'
import Visuel_tabaskyImg from '@/assets/images/Visuel_tabasky.jpg'
import Visuel_mitstubichiImg from '@/assets/images/Visuel_mitstubichi.jpg'
import Visuel_celesteImg from '@/assets/images/Visuel_celeste.jpg'
import Visuel_infirmierImg from '@/assets/images/Visuel_infirmier.jpg'
import Visuel_don_de_sangImg from '@/assets/images/Visuel_don_de_sang.png'

type Card = {
  image: string
  width: number
  height: number
  radius: number
}

const topCards = ref<Card[]>([
  { image: AlyssaImg, width: 712, height: 400, radius: 24 },
  { image: Visuel_tabaskyImg, width: 531, height: 400, radius: 24 },
  { image: Visuel_mitstubichiImg, width: 531, height: 400, radius: 24 },
])

const bottomCards = ref<Card[]>([
  { image: Visuel_celesteImg, width: 531, height: 400, radius: 24 },
  { image: Visuel_infirmierImg, width: 531, height: 400, radius: 24 },
  { image: Visuel_don_de_sangImg, width: 712, height: 400, radius: 24 },
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
  <div class="flex flex-col h-screen w-full p-6 bg-white">
    <!-- Ligne du haut -->
    <div class="flex gap-6 justify-center mb-6">
      <section
        v-for="(card, i) in topCards"
        :key="'top-' + i"
        class="relative shadow-lg overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
        :style="{
          borderRadius: card.radius + 'px',
          width: card.width + 'px',
          height: card.height + 'px',
        }"
        :data-top-index="i"
      >
        <img
          :src="card.image"
          :alt="'Image ' + i"
          class="w-full h-full object-cover select-none pointer-events-none"
          :style="{ borderRadius: card.radius + 'px' }"
          draggable="false"
        />
        <div
          class="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none"
          style="
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.8) 18%,
              /* bas plus noir */
               rgba(0, 0, 0, 0.3) 49%,
              /* transition plus marquée */
              rgba(0, 0, 0, 0.1) 100%
              /* fondu doux vers le haut */
            );
          "
        >
          <button
            class="pointer-events-auto border font-cinzel border-white text-white px-7 py-2 rounded-full font-semibold shadow-md bg-black/40 hover:bg-black/60 transition-colors"
            @click="removeTopCard(i)"
          >
            VOIR PROJET
          </button>
        </div>
      </section>
    </div>
    <!-- Ligne du bas -->
    <div class="flex gap-6 justify-center">
      <section
        v-for="(card, i) in bottomCards"
        :key="'bottom-' + i"
        class="relative shadow-lg overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
        :style="{
          borderRadius: card.radius + 'px',
          width: card.width + 'px',
          height: card.height + 'px',
        }"
        :data-bottom-index="i"
      >
        <img
          :src="card.image"
          :alt="'Image ' + (i + topCards.length)"
          class=" object-cover select-none pointer-events-none"
          :style="{ borderRadius: card.radius + 'px' }"
          draggable="false"
        />
        <div
          class="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none"
          style="
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.8) 18%,
              /* bas plus noir */
               rgba(0, 0, 0, 0.3) 49%,
              /* transition plus marquée */
              rgba(0, 0, 0, 0.1) 100%
              /* fondu doux vers le haut */
            );
          "
        >
          <button
            class="pointer-events-auto border border-white text-white px-7 py-2 rounded-full font-semibold shadow-md bg-black/40 hover:bg-black/60 transition-colors"
            @click="removeBottomCard(i)"
          >
            VOIR PROJET
          </button>
        </div>
      </section>
    </div>
  </div>
</template>
