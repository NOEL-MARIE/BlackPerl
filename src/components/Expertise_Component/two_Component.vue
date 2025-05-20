<template>
  <div class="expertise-container p-4 h-screen w-screen">
    <!-- Ligne du haut -->
    <div class="row justify-around items-center">
      <div
        v-for="(card, i) in topCards"
        :key="i"
        class="card"
        :style="{
          width: card.width + 'px',
          height: card.height + 'px',
          borderRadius: card.radius + 'px',
        }"
        ref="cards"
      >
        <img
          :src="card.image"
          :alt="'Image ' + i"
          class="card-image"
          :style="{ borderRadius: card.radius + 'px' }"
          draggable="false"
        />

        <div class="overlay">
          <button class="btn font-cinzel">VOIR PROJET</button>
        </div>
      </div>
    </div>
    <!-- Ligne du bas -->
    <div class="row justify-around items-center">
      <div
        v-for="(card, i) in bottomCards"
        :key="i"
        class="card"
        :style="{
          width: card.width + 'px',
          height: card.height + 'px',
          borderRadius: card.radius + 'px',
        }"
        ref="cards"
      >
        <img
          width="310px"
          :src="card.image"
          :alt="'Image ' + (i + topCards.length)"
          class="card-image"
          :style="{ borderRadius: card.radius + 'px' }"
          draggable="false"
        />
        <div class="overlay">
          <button class="btn font-cinzel">VOIR PROJET</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

const topCards: Card[] = [
  {
    image: AlyssaImg, // image locale importée
    width: 712,
    height: 310,
    radius: 24,
  },
  {
    image: Visuel_tabaskyImg,
    width: 531,
    height: 310,
    radius: 24,
  },
  {
    image: Visuel_mitstubichiImg,
    width: 531,
    height: 310,
    radius: 24,
  },
]

const bottomCards: Card[] = [
  {
    image: Visuel_celesteImg,
    width: 531,
    height: 310,
    radius: 24,
  },
  {
    image: Visuel_infirmierImg,
    width: 591,
    height: 310,
    radius: 24,
  },
  {
    image: Visuel_don_de_sangImg,
    width: 712,
    height: 310,
    radius: 24,
  },
]
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
}

.card {
  position: relative;
  background: center/ cover;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  transition: transform 0.2s;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* L’image est contenue entièrement dans le conteneur */
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5) 40%,
    /* fondu sombre en bas */ rgba(0, 0, 0, 0.174) 60%,
    /* transition intermédiaire */ rgba(44, 44, 44, 0.199) 100% /* léger fondu vers le haut */
  );
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 24px;
  pointer-events: none;
}

.btn {
  pointer-events: auto; /* bouton cliquable */
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
}
.btn:hover {
  background: rgba(0, 0, 0, 0.379);
}

/* Responsive */
@media (max-width: 900px) {
  .row {
    flex-direction: column;
    gap: 18px;
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
