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

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

import Alyssa from '@/assets/images/petit poids.png'
import Riziere from '@/assets/images/meilleur riz.png'
import Ketchup from '@/assets/images/le ketchup.png'
import Maman from '@/assets/images/mama.png'

const ring = ref(null)
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
let autoRotateAnim = null

function getParallaxOffset(i) {
  const rotation = gsap.getProperty(ring.value, 'rotationY')
  const angleStep = 360 / images.length
  const wrapped = gsap.utils.wrap(0, 360, rotation - 180 - i * angleStep)
  return (wrapped / 360) * 60 - 30
}

function dragStart(e) {
  if (e.touches) e.clientX = e.touches[0].clientX
  xPos = Math.round(e.clientX)
  isDragging = true
  gsap.set(ring.value, { cursor: 'grabbing' })
  if (autoRotateAnim) autoRotateAnim.pause()
  window.addEventListener('mousemove', drag)
  window.addEventListener('touchmove', drag)
}

function drag(e) {
  if (!isDragging) return
  if (e.touches) e.clientX = e.touches[0].clientX
  const delta = Math.round(e.clientX) - xPos
  gsap.to(ring.value, {
    rotationY: `-=${delta % 360}`,
    onUpdate: () => {
      const imgs = ring.value.querySelectorAll('.img')
      imgs.forEach((el, i) => {
        const offset = getParallaxOffset(i)
        gsap.set(el, { x: offset })
      })
    },
  })
  xPos = Math.round(e.clientX)
}

function dragEnd() {
  isDragging = false
  window.removeEventListener('mousemove', drag)
  window.removeEventListener('touchmove', drag)
  gsap.set(ring.value, { cursor: 'grab' })
  if (autoRotateAnim) autoRotateAnim.resume()
}

onMounted(() => {
  const imgs = ring.value.querySelectorAll('.img')

  gsap.set(ring.value, { rotationY: 180, cursor: 'grab', backgroundColor: 'transparent' })

  const angleStep = 360 / images.length

  imgs.forEach((el, i) => {
    gsap.set(el, {
      rotateY: i * angleStep,
      transformOrigin: '50% 50% 800px', // augmente la profondeur pour mieux répartir sur grand conteneur
      z: -800,
      backfaceVisibility: 'hidden',
      position: 'absolute',
      width: '700px',   // taille adaptée au conteneur large
      height: '550px',
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
  if (autoRotateAnim) autoRotateAnim.kill()
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
  width: 2406px;      /* Largeur demandée */
  height: 594px;      /* Hauteur demandée */
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
  margin-right: 64px;
  transition: transform 0.3s ease;
  object-fit: cover;
  object-position: center;
}
</style>
