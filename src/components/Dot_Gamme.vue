<template>
  <div class="dot-track bg-black" :style="trackStyle">
    <div
      v-for="(dot, index) in dots"
      :key="dot.id"
      class="dot"
      :class="{ 'is-out': dot.isOut, 'is-active': index === activeIndex }"
      :style="getDotStyle(index)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Dot {
  id: number
  isOut: boolean
}

// Index actif
const activeIndex = ref(3)

// Liste des dots
const dots = ref<Dot[]>([
  { id: 1, isOut: false },
  { id: 2, isOut: false },
  { id: 3, isOut: false },
  { id: 4, isOut: false },
  { id: 5, isOut: true },
  { id: 6, isOut: false },
  { id: 7, isOut: false },
  { id: 8, isOut: false },
  { id: 9, isOut: false },
  { id: 10, isOut: false }
])

// Style du conteneur
const trackStyle = computed(() => ({
  transform: `translateX(-${activeIndex.value * 24}px)`,
  transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
}))

// Style individuel des dots
function getDotStyle(index: number) {
  const isActive = index === activeIndex.value
  return {
    transform: `scale(${isActive ? 1.2 : 1})`,
    transition: 'transform 0.3s ease, opacity 0.3s ease'
  }
}
</script>

<style scoped>
.dot-track {
  display: flex;
  gap: 12px;
  will-change: transform;
  overflow: hidden;
}

.dot {
  width: 12px;
  height: 12px;
  background-color: #fff;
  border-radius: 50%;
  opacity: 0.4;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.dot.is-out {
  opacity: 0.2;
  transform: scale(0.8);
}

.dot.is-active {
  opacity: 1;
  transform: scale(1.2);
}

.dot:hover {
  opacity: 0.8;
  transform: scale(1.1);
}
</style>
