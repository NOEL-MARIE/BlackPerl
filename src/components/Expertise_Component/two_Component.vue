<template>
  <div class="expertise-container h-screen w-full p-12">
    <!-- Ligne du haut -->
    <div class="row h-1/2 ">
      <section
        v-for="(card, i) in topCards"
        :key="'top-' + i"
        class="card rounded-3xl"
        :style="{ borderRadius: card.radius + 'px' }"
        :data-top-index="i"
      >
        <img
          :src="card.image"
          :alt="'Image ' + i"
          class="card-image"
          :style="{ borderRadius: card.radius + 'px' }"
          draggable="false"
        />
        <div class="overlay">
          <button class="btn font-cinzel" @click="removeTopCard(i)">VOIR PROJET</button>
        </div>
      </section>
    </div>
    <!-- Ligne du bas -->
    <div class="row h-1/2 ">
      <section
        v-for="(card, i) in bottomCards"
        :key="'bottom-' + i"
        class="card"
        :style="{ borderRadius: card.radius + 'px' }"
        :data-bottom-index="i"
      >
        <img
          :src="card.image"
          :alt="'Image ' + (i + topCards.length)"
          class="card-image"
          :style="{ borderRadius: card.radius + 'px' }"
          draggable="false"
        />
        <div class="overlay">
          <button class="btn font-cinzel" @click="removeBottomCard(i)">VOIR PROJET</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'

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
  { image: AlyssaImg, width: 712, height: 310, radius: 24 },
  { image: Visuel_tabaskyImg, width: 531, height: 310, radius: 24 },
  { image: Visuel_mitstubichiImg, width: 531, height: 310, radius: 24 },
])

const bottomCards = ref<Card[]>([
  { image: Visuel_celesteImg, width: 1931, height: 10, radius: 24 },
  { image: Visuel_infirmierImg, width: 591, height: 310, radius: 24 },
  { image: Visuel_don_de_sangImg, width: 712, height: 310, radius: 24 },
])

function removeTopCard(index: number) {
  const cardElement = document.querySelector(`[data-top-index="${index}"]`) as HTMLElement
  if (!cardElement) return

  gsap.to(cardElement, {
    duration: 0.5,
    opacity: 0,
    scale: 0.8,
    ease: 'power1.in',
    onComplete() {
      topCards.value.splice(index, 1)
    },
  })
}

function removeBottomCard(index: number) {
  const cardElement = document.querySelector(`[data-bottom-index="${index}"]`) as HTMLElement
  if (!cardElement) return

  gsap.to(cardElement, {
    duration: 0.5,
    opacity: 0,
    scale: 0.8,
    ease: 'power1.in',
    onComplete() {
      bottomCards.value.splice(index, 1)
    },
  })
}
</script>

<style scoped>
.expertise-container {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  height: 50%;
}

.card {
  position: relative;
  flex: 1 1 0;
  background: center/cover;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  transition: transform 0.2s;
  min-width: 0;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
  pointer-events: none;
  border-radius: inherit;
}

.card:hover {
  transform: translateY(-6px) scale(1.03);
}

.overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 16px;
  pointer-events: none;
}

.btn {
  pointer-events: auto;
  border: 1.5px solid #fff;
  color: #fff;
  padding: 10px 28px;
  border-radius: 32px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: background 0.2s;
  letter-spacing: 1px;
  background: #222a;
}
.btn:hover {
  background: rgba(0, 0, 0, 0.379);
}

/* Responsive */
@media (max-width: 900px) {
  .row {
    flex-direction: column;
    gap: 18px;
    height: auto;
  }
  .card {
    width: 90vw !important;
    height: 180px !important;
    border-radius: 14px !important;
  }
}
@media (max-width: 600px) {
  .card {
    width: 98vw !important;
    height: 120px !important;
    border-radius: 10px !important;
  }
}
</style>
