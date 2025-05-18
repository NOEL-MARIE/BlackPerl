<template>
  <div class="expertise-container p-24 pb-12 h-screen w-screen justify-between bg-black ">
    <!-- Ligne du haut -->
    <div class="row ">
      <div
        v-for="(card, i) in topCards"
        :key="i"
        class="card"
        :style="{
          width: card.width + 'px',
          height: card.height + 'px',
          borderRadius: card.radius + 'px',
          backgroundImage: `url(${card.image})`
        }"
      >
        <div class="overlay">
          <button class="btn">VOIR PROJET</button>
        </div>
      </div>
    </div>
    <!-- Ligne du bas -->
    <div class="row">
      <div
        v-for="(card, i) in bottomCards"
        :key="i"
        class="card"
        :style="{
          width: card.width + 'px',
          height: card.height + 'px',
          borderRadius: card.radius + 'px',
          backgroundImage: `url(${card.image})`
        }"
      >
        <div class="overlay">
          <button class="btn">VOIR PROJET</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Card = {
  image: string;
  width: number;
  height: number;
  radius: number;
};

// Dimensions réduites et harmonisées pour desktop (facile à ajuster)
const topCards: Card[] = [
  {
    image: 'https://pplx-res.cloudinary.com/image/private/user_uploads/45173632/d5c99bc8-cab4-498f-9ad3-26c0dfa5a5b5/Expertise-2-1.jpg',
    width: 420,
    height: 328,
    radius: 24,
  },
  {
    image: 'https://www.laitylait.com/images/actualites/tabaski2023.jpg',
    width: 390,
    height: 260,
    radius: 24,
  },
  {
    image: 'https://mitsubishi-motors.sn/wp-content/uploads/2022/06/Pajero-Sport-Vacances.jpg',
    width: 390,
    height: 260,
    radius: 24,
  }
];

const bottomCards: Card[] = [
  {
    image: 'https://www.eau-celeste.com/wp-content/uploads/2021/05/hydratation.jpg',
    width: 349,
    height: 328,
    radius: 24,
  },
  {
    image: 'https://www.santeplusmag.com/wp-content/uploads/1er-mai-fete-du-travail.jpg',
    width: 240,
    height: 260,
    radius: 24,
  },
  {
    image: 'https://www.dondusang.net/wp-content/uploads/2019/06/don-du-sang.jpg',
    width: 320,
    height: 260,
    radius: 24,
  }
];
</script>

<style scoped>
.expertise-container {
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  /* min-height: 100vh; */
  /* background: #f5f5f5; */
  /* padding: 32px 0; */
}

.row {
  background-color: azure;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  gap: 24px;
  margin-bottom: 24px;
}

.card {
  position: relative;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 2px 16px rgba(0,0,0,0.10);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 6px 24px rgba(0,0,0,0.15);
}

.overlay {
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.12) 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 24px;
}

.btn {
  background: rgba(0,0,0,0.34);
  border: 1.5px solid #fff;
  color: #fff;
  padding: 10px 28px;
  border-radius: 32px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s;
  letter-spacing: 1px;
}
.btn:hover {
  background: rgba(0,0,0,0.6);
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
