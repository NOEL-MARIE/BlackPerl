<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div class="z-0">
    <section class="h-1/2 mt-28">
      <div class="wheel" ref="wheel">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="wheel__card"
          @click="onClickCard($event, index)"
        >
          <img :src="image" :alt="'Image ' + (index + 1)" class=" " />
        </div>
      </div>
    </section>
  </div>

  <!-- Bloc à placer juste en dessous -->
  <div class="w-full hidden xl:flex flex-col items-center mt-64 justify-center">
    <span class="font-Opensans text-2xl" ref="boatGifRef">Scrollez</span>
    <img :src="boatGif" class="xl:w-[124px]" alt="" width="" height="84px" ref="boatGifRef" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Plugins
gsap.registerPlugin(Draggable, Flip, ScrollTrigger)

// Images
import Alyssa from '@/assets/images/petit poids.png'
import Riziere from '@/assets/images/meilleur riz.png'
import Ketchup from '@/assets/images/le ketchup.png'
import Maman from '@/assets/images/mama.png'
import cleo from '@/assets/images/cleo.png'
import coca from '@/assets/images/Josey curved.png'
import boatGif from '@/assets/images/boat.gif'

// Refs
const wheel = ref<HTMLElement | null>(null)
const header = ref<HTMLElement | null>(null)
const boatGifRef = ref<HTMLElement | null>(null)

// Images à afficher
let images: string[] = []

const isXL = window.matchMedia('(min-width: 1441px)').matches
const isLG = window.matchMedia('(min-width: 1025px)').matches
const isMD = window.matchMedia('(min-width: 768px)').matches
const isSM = window.matchMedia('(min-width: 481px)').matches

if (isXL) {
  images = [
    coca, Riziere, Ketchup, Maman, cleo, Alyssa,
    coca, Riziere, Ketchup, Maman, cleo, Alyssa,
    coca, Riziere, Ketchup, Maman, cleo

  ]
} else if (isLG) {
  images = [
    coca, Riziere, Ketchup, Maman, cleo, Alyssa,
    coca, Riziere, Ketchup, Maman, cleo, Alyssa,
    cleo, Maman, Ketchup, Riziere
  ]
} else if (isMD) {
  images = [
    coca, Riziere, Ketchup, Maman, cleo, Alyssa,
    coca, Riziere, Ketchup, Maman
  ]
} else if (isSM) {
  images = [
    coca, Riziere, Ketchup, Maman, cleo, Alyssa,
    Riziere, Ketchup
  ]
} else {
  images = [
    coca, Riziere, Ketchup, Maman, cleo
  ]
}


let currentCard: HTMLElement | null = null
let draggableInstance: Draggable | null = null

onMounted(() => {
  setupWheel()
  animateBoatGif()

  window.addEventListener('resize', setupWheel)
})

onUnmounted(() => {
  window.removeEventListener('resize', setupWheel)
  if (draggableInstance) draggableInstance.kill()
})

function setupWheel() {
  if (!wheel.value) return

  const wheelElement = wheel.value
  const cards = gsap.utils.toArray('.wheel__card')
  if (cards.length === 0) return

  const baseRadius = wheelElement.offsetWidth / 2
  const center = baseRadius
  const cardWidth = (cards[0] as HTMLElement).offsetWidth

  // Dynamique : ajustement du spacing et du radius selon l'écran
  let spacing = 40
  let adjustedRadius = baseRadius

  if (window.matchMedia('(min-width: 1441px)').matches) {
    spacing = 60
    adjustedRadius = baseRadius * 1.0
  } else if (window.matchMedia('(min-width: 1025px)').matches) {
    spacing = 50
    adjustedRadius = baseRadius * 0.9
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    spacing = 40
    adjustedRadius = baseRadius * 0.85
  } else if (window.matchMedia('(min-width: 481px)').matches) {
    spacing = 30
    adjustedRadius = baseRadius * 0.75
  } else {
    spacing = 20
    adjustedRadius = baseRadius * 0.65
  }

  const slice = ((cardWidth + spacing) / adjustedRadius) * (200 / Math.PI)
  const DEG2RAD = Math.PI / 180

  gsap.set(cards, {
    x: (i: number) => center + adjustedRadius * Math.sin(i * slice * DEG2RAD),
    y: (i: number) => center - adjustedRadius * Math.cos(i * slice * DEG2RAD),
    rotation: (i: number) => i * slice,
    xPercent: -40,
    yPercent: -40,
  })

  gsap.to(wheelElement, {
    rotation: -slice * cards.length,
    ease: 'none',
    duration: cards.length * 2,
    repeat: -1,
  })

  if (draggableInstance) draggableInstance.kill()

  draggableInstance = Draggable.create(wheelElement, {
    type: 'rotation',
    inertia: true,
    snap: {
      rotation: gsap.utils.snap(slice),
    },
  })[0]
}

function animateBoatGif() {
  nextTick(() => {
    if (!boatGifRef.value) return

    gsap.to(boatGifRef.value, {
      y: -15,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: 'sine.inOut',
    })

    gsap.from(boatGifRef.value, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: boatGifRef.value,
        start: 'top 95%',
        toggleActions: 'play none none none',
      },
    })
  })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onClickCard(event: MouseEvent, _index: number) {
  if (!header.value) return

  const card = event.currentTarget as HTMLElement
  const image = card.querySelector('img')
  if (!image) return

  if (card !== currentCard) {
    closeCurrentCard()
    currentCard = card

    const state = Flip.getState(image)
    header.value.appendChild(image)

    Flip.from(state, {
      duration: 0.9,
      scale: true,
      ease: 'power1.inOut',
      onComplete: () => {
        gsap.to(image, {
          width: '20vw',
          height: '20vw',
          maxWidth: '50px',
          maxHeight: '50px',
        })
      },
    })
  } else {
    closeCurrentCard()
  }
}

function closeCurrentCard() {
  if (!currentCard || !header.value) return

  const img = header.value.querySelector('img')
  if (img) {
    const state = Flip.getState(img)
    currentCard.appendChild(img)

    Flip.from(state, {
      ease: 'power1.inOut',
      scale: true,
      onComplete: () => {
        gsap.set(img, { width: '200px', height: 'auto' })
      },
    })
  }

  currentCard = null
}
</script>

<style scoped>
body {
  height: 600vh;
  width: 100vw;
}

.header {
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
}

.slider-section {
  bottom: 0;
  width: 100%;
  z-index: 1;
}

/* Responsive wheel */
.wheel {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 370vw;
  height: 530vw;
  max-width: 3000px;
  max-height: 3000px;
  left: 50%;
  transform: translateX(-50%);
}

/* Responsive cards */
.wheel__card {
  position: absolute;
  top: 0;
  left: 0;
  width: clamp(150px, 25vw, 420px);
  height: clamp(150px, 25vw, 200px);
  cursor: pointer;
}

/* REPONSIVE SECTION ON CSS */
/* Ajustements pour grand écran large (entre desktop et tablette) */
@media (max-width: 1440px) {
  .wheel {
    width: 280vw;
    height: 400vw;
    max-width: 2200px;
    max-height: 2200px;
  }
  .wheel__card {
    width: clamp(140px, 22vw, 280px);
    height: clamp(140px, 22vw, 280px);
  }
}

/* Tablette */
@media (max-width: 1024px) {
  .wheel {
    width: 220vw;
    height: 320vw;
    max-width: 1500px;
    max-height: 1500px;
  }
  .wheel__card {
    width: clamp(120px, 20vw, 250px);
    height: clamp(120px, 20vw, 250px);
  }
}

/* Petit tablette / grand mobile */
@media (max-width: 768px) {
  .wheel {
    width: 180vw;
    height: 280vw;
    max-width: 1200px;
    max-height: 1200px;
  }
  .wheel__card {
    width: clamp(110px, 30vw, 200px);
    height: clamp(110px, 30vw, 200px);
  }
}

/* Mobile */
@media (max-width: 480px) {
  .wheel {
    width: 150vw;
    height: 250vw;
    max-width: 900px;
    max-height: 900px;
  }
  .wheel__card {
    width: clamp(90px, 40vw, 150px);
    height: clamp(90px, 40vw, 150px);
  }
}

/* REPONSIVE SECTION ON CSS */

.wheel__card img {
  object-fit: contain;
  border-radius: 2.5rem;
}

.wheel__card:hover {
  border-radius: 2.5rem;
}

/* Responsive scrollez gif */
img {
  margin-left: 0;
  z-index: 999;
  cursor: pointer;
  will-change: transform;
}

/* Responsive image header lorsqu'elle est animée */
.header img {
  width: clamp(100px, 30vw, 350px);
  height: clamp(100px, 45vw, 350px);
  max-height: 350px;
  max-width: 350px;
}

/* Media queries */
@media (max-width: 768px) {
  .wheel {
    width: 200vw;
    height: 350vw;
  }

  .wheel__card {
    width: clamp(120px, 40vw, 200px);
    height: clamp(120px, 40vw, 200px);
  }

  .header img {
    width: clamp(80px, 50vw, 200px);
    height: clamp(100px, 60vw, 250px);
  }
}

@media (max-width: 480px) {
  .wheel {
    width: 150vw;
    height: 300vw;
  }

  .wheel__card {
    width: clamp(100px, 60vw, 160px);
    height: clamp(100px, 60vw, 160px);
  }

  .header img {
    width: clamp(60px, 70vw, 180px);
    height: clamp(80px, 80vw, 200px);
  }
}
</style>
