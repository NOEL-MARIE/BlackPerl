<template>
  <div class="h-full w-full p-4">
    <div class="row h-1/2 bg-amber-60">
      <section
        v-for="(card, i) in topCards"
        :key="i"
        class=" border-2 border-green-950 bg-slate-500 h-1/2 w-1/2"
        :style="{
          // height: card.height + 'px',
          borderRadius: card.radius + 'px',
        }"
        ref="cards"
      >
        <!-- <div class="h-[200px] w-full bg-purple-300 "> -->

        <img
          :src="card.image"
          :alt="'Image ' + i"
          class="card-image"
          :style="{ borderRadius: card.radius + 'px' }"
          draggable="false"
        />
        <!-- </div> -->
        <div class="overlay">
          <button class="btn font-cinzel">VOIR PROJET</button>
        </div>
      </section>
    </div>
    <div class=" row h-1/2 bg-red-500">
      <section
        v-for="(card, i) in topCards"
        :key="i"
        class="car half-card-widt border-2 border-green-950 bg-slate-500 h-1/2 w-1/2"
        :style="{
          // height: card.height + 'px',
          borderRadius: card.radius + 'px',
        }"
        ref="cards"
      >
        <!-- <div class="h-[200px] w-full bg-purple-300 "> -->

        <img
          :src="card.image"
          :alt="'Image ' + i"
          class="card-image"
          :style="{ borderRadius: card.radius + 'px' }"
          draggable="false"
        />
        <!-- </div> -->
        <div class="overlay">
          <button class="btn font-cinzel">VOIR PROJET</button>
        </div>
      </section>
    </div>
  </div>
  <!-- <div class="expertise-containe bg-red-400 h-screen"> -->
  <!--
    <div class="row justify-around items-center">
      <div
        v-for="(card, i) in bottomCards"
        :key="i"
        class="card half-card-width"
        :style="{
          // height: card.height + 'px',
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
    </div> -->
  <!-- </div> -->
  <!-- </template> -->

  <!-- <script setup lang="ts">
import AlyssaImg from '@/assets/images/Visuel_alyssa.jpg'
import Visuel_tabaskyImg from '@/assets/images/Visuel_tabasky.jpg'
import Visuel_mitstubichiImg from '@/assets/images/Visuel_mitstubichi.jpg'
import Visuel_celesteImg from '@/assets/images/Visuel_celeste.jpg'
import Visuel_infirmierImg from '@/assets/images/Visuel_infirmier.jpg'
import Visuel_don_de_sangImg from '@/assets/images/Visuel_don_de_sang.png'

type Card = {
  image: string
  width: number
  // height: number
  radius: number
}

const topCards: Card[] = [
  {
    image: AlyssaImg,
    width: 712,
    // height: 600,
    radius: 24,
  },
  {
    image: Visuel_tabaskyImg,
    width: 531,
    // height: 600,
    radius: 24,
  },
  {
    image: Visuel_mitstubichiImg,
    width: 531,
    // height: 600,
    radius: 24,
  },
]

const bottomCards: Card[] = [
  {
    image: Visuel_celesteImg,
    width: 531,
    // height: 600,
    radius: 24,
  },
  {
    image: Visuel_infirmierImg,
    width: 591,
    // height: 310,
    radius: 24,
  },
  {
    image: Visuel_don_de_sangImg,
    width: 712,
    // height: 310,
    radius: 24,
  },
]
</script> -->

  <!-- <style scoped>
.expertise-container {
  /* height: 50%; */
  display: flex;
  flex-direction: column;
}

/* .row {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
} */

.card {
  width: 50% !important;
  height: 50% !important;
  /* position: relative; */
  background: center/cover;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  transition: transform 0.2s;
  /* width supprimée ici car gérée par .half-width */
}

.half-card-width {
  width: 50% !important;
}

.card-image {
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
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
    rgba(0, 0, 0, 0.174) 60%,
    rgba(44, 44, 44, 0.199) 100%
  );
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 24px;
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
</style> -->
  <!-- <template> -->
  <!-- <div class="justify-between bg-gray-900 flex flex-col p-4 h-screen w-screen"> -->
  <!-- <div class="row justify-around h-1/2 items-center">
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
    </div> -->
  <!-- Ligne du bas -->
  <!-- <div class="row justify-around h-1/2 items-center">
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
    </div> -->
  <!-- </div> -->
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
  width: 70%;
  /* height: 50%; */
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
  /* position: absolute; */
  /* top: 0;
  left: 0;
  right: 0; */
  /* bottom: 0; */
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
