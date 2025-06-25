<template>
  <div class="stage"
       @mousedown="dragStart"
       @touchstart="dragStart"
       @mouseup="dragEnd"
       @touchend="dragEnd"
  >
    <div class="container">
      <div class="ring" ref="ring">
        <img
          v-for="(img, i) in images"
          :key="i"
          class="img"
          :src="img"
          :alt="`Image ${i + 1}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

import Alyssa from '@/assets/images/petit poids.png'
import Riziere from '@/assets/images/meilleur riz.png'
import Ketchup from '@/assets/images/le ketchup.png'
import Maman from '@/assets/images/mama.png'

const ring = ref<HTMLElement | null>(null)

const images = [
  Alyssa,
  Riziere,
  Ketchup,
  Ketchup,
  Ketchup,
  Ketchup,
  Ketchup,
  Ketchup,
  Ketchup,
  Maman,
]

let xPos = 0
let isDragging = false
let autoRotateAnim: gsap.core.Tween | null = null

function getParallaxOffset(i: number) {
  if (!ring.value) return 0
  const rotation = gsap.getProperty(ring.value, 'rotationY') as number
  const angleStep = 360 / images.length
  const wrapped = gsap.utils.wrap(0, 360, rotation - 180 - i * angleStep)
  return (wrapped / 360) * 60 - 30
}

function dragStart(e: MouseEvent | TouchEvent) {
  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
  xPos = Math.round(clientX)
  isDragging = true
  if (ring.value) gsap.set(ring.value, { cursor: 'grabbing' })
  autoRotateAnim?.pause()
  window.addEventListener('mousemove', drag)
  window.addEventListener('touchmove', drag)
}

function drag(e: MouseEvent | TouchEvent) {
  if (!isDragging || !ring.value) return
  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
  const delta = Math.round(clientX) - xPos

  gsap.to(ring.value, {
    rotationY: `-=${delta % 360}`,
    onUpdate: () => {
      const imgs = ring.value?.querySelectorAll('.img')
      imgs?.forEach((el, i) => {
        const offset = getParallaxOffset(i)
        gsap.set(el, { x: offset })
      })
    },
  })

  xPos = Math.round(clientX)
}

function dragEnd() {
  isDragging = false
  window.removeEventListener('mousemove', drag)
  window.removeEventListener('touchmove', drag)
  if (ring.value) gsap.set(ring.value, { cursor: 'grab' })
  autoRotateAnim?.resume()
}

onMounted(() => {
  if (!ring.value) return

  const imgs = ring.value.querySelectorAll('.img')
  gsap.set(ring.value, { rotationY: 180, cursor: 'grab', backgroundColor: 'transparent' })

  const angleStep = 360 / images.length

  imgs.forEach((el, i) => {
    gsap.set(el, {
      rotateY: i * angleStep,
      transformOrigin: '50% 50% 800px',
      z: -800,
      backfaceVisibility: 'hidden',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: '0',
      top: '0',
      cursor: 'pointer',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
      objectFit: 'cover',
      objectPosition: 'center',
      scale: 1,
      x: 0,
    })
  })

  gsap.from(imgs, {
    duration: 1.5,
    y: 200,
    opacity: 1,
    stagger: 0.1,
    ease: 'expo.out',
  })

  autoRotateAnim = gsap.to(ring.value, {
    rotationY: '+=360',
    duration: 30,
    ease: 'linear',
    repeat: -1,
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', drag)
  window.removeEventListener('touchmove', drag)
  autoRotateAnim?.kill()
})
</script>

<style scoped>
html,
body,
.stage,
.ring,
.img {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  user-select: none;
}

.container {
  perspective: 2000px;
  width: 100vw;
  height: 65vh;
  max-width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.ring {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: grab;
  transform-style: preserve-3d;
  transform-origin: center center;
  background-color: transparent !important;
  box-shadow: none !important;
}

.img {
  position: absolute;
  margin-right: 2vw;
  transition: transform 0.3s ease;
  object-fit: cover;
  object-position: center;
  max-width: 90vw;
  max-height: 90vh;
  width: 70vw;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
}

@media (min-width: 768px) {
  .container {
    width: 90vw;
    height: 70vh;
  }

  .img {
    width: 40vw;
    height: auto;
  }
}

@media (min-width: 1280px) {
  .container {
    width: 70vw;
    height: 75vh;
  }

  .img {
    width: 30vw;
  }
}
</style>
