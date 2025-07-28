<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { useRouter } from 'vue-router'

gsap.registerPlugin(Draggable)

const router = useRouter()

const sectionRef = ref<HTMLElement | null>(null)
const logoRef = ref<HTMLImageElement | null>(null)
const anchorRef = ref<HTMLImageElement | null>(null)
const videoSectionRef = ref<HTMLElement | null>(null)

const showVideoSection = ref(false)
// buttonClicked n'est plus nécessaire si la navigation est automatique au scroll
// const buttonClicked = ref(true)

let draggableInstance: Draggable | null = null

function animateVideoSection() {
  if (!videoSectionRef.value) return
  gsap.fromTo(
    videoSectionRef.value,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      onComplete: () => {
        // C'EST ICI QUE LA NAVIGATION DOIT AVOIR LIEU !
        // Une fois l'animation de la section vidéo terminée, naviguez automatiquement.
        router.push('/Scroll_Video')
      },
    },
  )
}



onMounted(() => {
  // Animation d'entrée du logo
  gsap.from(logoRef.value, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })

  // 💡 Effet de flottaison pour l'ancre
  if (anchorRef.value) {
    gsap.to(anchorRef.value, {
      y: -15,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: 'sine.inOut',
    })
  }

  // Gestion du drag pour anchorRef
  if (anchorRef.value && sectionRef.value) {
    draggableInstance = Draggable.create(anchorRef.value, {
      type: 'y',
      edgeResistance: 0.65,
      bounds: { minY: -window.innerHeight, maxY: 0 },
      inertia: true,
      onDrag() {
        const y = this.y
        if (sectionRef.value) gsap.set(sectionRef.value, { y })
        if (logoRef.value) {
          const rotation = Math.min(Math.abs(y) / 5, 15)
          gsap.to(logoRef.value, { rotate: rotation, duration: 0.1, overwrite: 'auto' })
        }
      },
      onDragEnd() {
        if (this.y < -80 && sectionRef.value) {
          gsap.to(sectionRef.value, {
            y: -window.innerHeight,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.in',
            onComplete: () => {
              showVideoSection.value = true
              nextTick(() => animateVideoSection())
            },
          })
          gsap.to(anchorRef.value, { y: 0, duration: 0.7, ease: 'power3.out' })
        } else {
          gsap.to(sectionRef.value, { y: 0, duration: 0.4, ease: 'power3.out' })
          gsap.to(anchorRef.value, { y: 0, duration: 0.4, ease: 'power3.out' })
          gsap.to(logoRef.value, { rotate: 0, duration: 0.5, ease: 'power3.out' })
        }
      },
    })[0]
  }
})

onUnmounted(() => {
  if (draggableInstance) {
    draggableInstance.kill()
    draggableInstance = null
  }
})
</script>

<template>
  <div

      >
    <section
      id="galerie"
      v-if="!showVideoSection"
      ref="sectionRef"
      class="flex flex-col items-center justify-center h-screen pt-4 pb-10 font-sans bg-black"
    >
      <div class="mb-10 logo">
        <img
          width=""
          height=""
          src="@/assets/images/LogoBlackPEARL.png"
          alt="Logo Black Pearl"
          class="relative W-[10px] h-[250px] md:W-[303px] md:h-[303px] 2xl:w-[600px] 2xl:h-[600px]"
        />
      </div>
      <p class="mb-6 text-white text-center md:text-start mx-8 md:mx-0 text-2xl 2xl:text-4xl">
        Tirez l’ancre vers le haut, et commencez le jeu
      </p>


      <img
        ref="anchorRef"
        src="@/assets/images/Anchor.gif"
        alt="Ancre"
        width="40"
        height="40"
        class="cursor-grab active:cursor-grabbing touch-none 2xl:w-[100px] 2xl:h-[100px]"
        draggable="false"
      />
    </section>

    <section
      v-if="showVideoSection"
      ref="videoSectionRef"
      class="flex flex-col items-center bg-white justify-center h-screen"
    ></section>
  </div>
</template>

<style scoped>
.cursor-grab {
  cursor: grab;
  user-select: none;
  touch-action: none;
}
.cursor-grab:active {
  cursor: grabbing;
}
.logo img {
  user-select: none;
  pointer-events: none;
}
button {
  user-select: none;
  cursor: pointer;
}
</style>
