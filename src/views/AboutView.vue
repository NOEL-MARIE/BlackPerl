<script setup lang="ts">
const images = [
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80"
]

// Fonction pour calculer la translation verticale et la rotation pour un arc inversé
function getArcStyle(index: number) {
  const total = images.length
  const center = (total - 1) / 2
  const offset = index - center

  // Ici, la translation Y est POSITIVE pour descendre sur les côtés (arc inversé)
  const translateY = Math.abs(offset) * 40 + 10
  const rotate = offset * 10

  return {
    transform: `translateY(${translateY}px) rotate(${rotate}deg)`
  }
}
</script>

<template>
  <div class="arc-row">
    <div
      v-for="(img, i) in images"
      :key="i"
      class="arc-img"
      :style="getArcStyle(i)"
    >
      <img :src="img" alt="" />
    </div>
  </div>
  <div class="folder-container">
    <div class="folder-tab"></div>
    <div class="folder-main"></div>
  </div>
</template>

<style scoped>
.folder-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 400px;
  margin: 40px auto;
}

.folder-main {
  position: absolute;
  top: 30px; /* Décale pour la languette */
  left: 0;
  width: 100%;
  height: 370px;
  background: #000;
  border-radius: 24px;
  z-index: 1;
}

/* Languette à droite */
.folder-tab {
  position: absolute;
  top: 0;
  right: 0;
  width: 720px;
  height: 60px;
  background: #000;
  border-top-right-radius: 24px 24px;
  border-top-left-radius: 24px 24px;
  z-index: 2;
}

.arc-row {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  padding: 40px 0;
  width: 100vw;
  overflow-x: auto;
  background: white;
}

.arc-img {
  width: 240px;
  height: 240px;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.13);
  background: #fff;
  transition: transform 0.4s cubic-bezier(.4,1.6,.4,1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.arc-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;
  display: block;
}
</style>
