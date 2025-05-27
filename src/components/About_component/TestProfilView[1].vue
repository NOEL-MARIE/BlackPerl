<template>
  <div class="z-0">
    <section class="h-1/2">
      <div class="wheel" ref="wheel">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="wheel__card"
          @click="onClickCard($event, index)"
        >
          <img :src="image" :alt="'Image ' + (index + 1)" class="rounded-3xl" />
        </div>
      </div>
    </section>
  </div>

  <!-- Bloc à placer juste en dessous -->
  <div class="w-full flex flex-col items-center mt-64 justify-center">
    <span class="font-Opensans">Scrollez</span>
    <img :src="boatGif" alt="" width="84px" height="84px" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { Flip } from 'gsap/Flip'

import Alyssa from '@/assets/images/petit poids.png'
import Riziere from '@/assets/images/meilleur riz.png'
import Ketchup from '@/assets/images/le ketchup.png'
import Maman from '@/assets/images/mama.png'
import boatGif from '@/assets/images/boat.gif'

gsap.registerPlugin(Draggable, Flip)

const wheel = ref<HTMLElement | null>(null)
const header = ref<HTMLElement | null>(null)

const images = [
  Alyssa,
  Riziere,
  Ketchup,
  Maman,
  Ketchup,
  Maman,
  Ketchup,
  Maman,
  Ketchup,
  Maman,  Ketchup,
  Maman,
  Ketchup,
  Maman,
  Ketchup,
  Maman,
  // Ajoute ou duplique plus d'images ici si besoin
]

let currentCard: HTMLElement | null = null
let draggableInstance: Draggable | null = null

onMounted(() => {
  setupWheel()
  window.addEventListener('resize', setupWheel)
})

onUnmounted(() => {
  window.removeEventListener('resize', setupWheel)
  if (draggableInstance) {
    draggableInstance.kill()
  }
})

function setupWheel() {
  if (!wheel.value) return

  const wheelElement = wheel.value
  const cards = gsap.utils.toArray('.wheel__card')
  if (cards.length === 0) return

  // Rayon du cercle
  const radius = wheelElement.offsetWidth / 2
  const center = radius

  // Largeur d'une carte (suppose que toutes ont la même taille)
  const cardWidth = (cards[0] as HTMLElement).offsetWidth

  // Calcul de l'angle slice pour que les cartes soient côte à côte
  const slice = ((cardWidth + 30) / radius) * (180 / Math.PI)

  const DEG2RAD = Math.PI / 180

  gsap.set(cards, {
    x: (i: number) => center + radius * Math.sin(i * slice * DEG2RAD),
    y: (i: number) => center - radius * Math.cos(i * slice * DEG2RAD),
    rotation: (i: number) => i * slice,
    xPercent: -60,
    yPercent: -60,
  })

  gsap.to(wheelElement, {
    rotation: -slice * cards.length,
    ease: 'none',
    duration: cards.length * 2,
    repeat: -1,
  })

  if (draggableInstance) {
    draggableInstance.kill()
  }

  draggableInstance = Draggable.create(wheelElement, {
    type: 'rotation',
    inertia: true,
    snap: {
      rotation: gsap.utils.snap(slice),
    },
  })[0]
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

    currentCard = null
  }
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
  width: 270vw;
  height: 500vw;
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
  margin-top: 2vh;
  width: clamp(150px, 25vw, 320px);
  height: clamp(150px, 25vw, 300px);
  cursor: pointer;
}

.wheel__card img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
}

/* Responsive scrollez gif */
img {
  margin-left: 0;
  z-index: 999;
  cursor: pointer;
  position: static;
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

