<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  'https://cdn.prod.website-files.com/66d8fb8ddb89c6bbf01dea7a/66d8fb8ddb89c6bbf01deb14_Gallery%20Studio%201.webp',
  'https://cdn.prod.website-files.com/66d8fb8ddb89c6bbf01dea7a/66d8fb8ddb89c6bbf01deb15_Gallery%20Studio%202.webp',
  'https://cdn.prod.website-files.com/66d8fb8ddb89c6bbf01dea7a/66d8fb8ddb89c6bbf01deb16_Gallery%20Studio%203.webp',
  'https://cdn.prod.website-files.com/66d8fb8ddb89c6bbf01dea7a/66d8fb8ddb89c6bbf01deb14_Gallery%20Studio%201.webp',
  'https://cdn.prod.website-files.com/66d8fb8ddb89c6bbf01dea7a/66d8fb8ddb89c6bbf01deb15_Gallery%20Studio%202.webp'
]

const angleOffset = ref(0)
let interval: number

onMounted(() => {
  interval = window.setInterval(() => {
    angleOffset.value += 0.5
  }, 30)
})

onUnmounted(() => {
  clearInterval(interval)
})

const getStyle = (index: number) => {
  const total = images.length
  const baseAngle = 180 / (total - 1)
  const currentAngle = baseAngle * index + angleOffset.value
  const radius = window.innerWidth / 3 // Adapté à la largeur

  const radian = (currentAngle * Math.PI) / 180
  const x = radius * Math.cos(radian)
  const y = radius * Math.sin(radian)

  return {
    transform: `translate(calc(50vw + ${x}px - 50px), ${-y + 100}px)`,
    transition: 'transform 0.1s linear'
  }
}
</script>

<template>
  <div class="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
    <div class="relative w-full h-[300px]">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="absolute w-[100px] h-[100px] rounded-full overflow-hidden"
        :style="getStyle(index)"
      >
        <img
          :src="image"
          class="w-full h-full object-cover"
          alt="carousel image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}
</style>
