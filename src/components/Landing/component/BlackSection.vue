<script setup lang="ts">
import Scroll_Video from '@/components/Landing/component/VideoSection.vue'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

gsap.registerPlugin(Draggable)

const sectionRef = ref<HTMLElement | null>(null)
const logoRef = ref<HTMLImageElement | null>(null)
const anchorRef = ref<HTMLImageElement | null>(null)
const videoSectionRef = ref<HTMLElement | null>(null)

const showVideoSection = ref(false)

let draggableInstance: Draggable | null = null

function animateVideoSection() {
  if (!videoSectionRef.value) return
  gsap.fromTo(
    videoSectionRef.value,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
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
          // Faire sortir la section First
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
          // Retour à la position initiale
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
  <div>
    <section
      v-if="!showVideoSection"
      ref="sectionRef"
      class="h-screen font-sans bg-black pb-10 pt-4 flex flex-col items-center justify-center"
    >
      <div class="logo mb-10">
        <img
          ref="logoRef"
          width="303"
          height="330"
          src="@/assets/images/LogoBlackPEARL.png"
          alt="Logo Black Pearl"
          class="relative"
          draggable="false"
        />
      </div>
      <p class="text-white mb-6">Tirez l’ancre vers le haut, et commencez le jeu</p>
      <img
        ref="anchorRef"
        src="@/assets/images/Anchor.gif"
        alt="Ancre"
        width="40"
        height="40"
        class="cursor-grab active:cursor-grabbing touch-none"
        draggable="false"
      />
    </section>

    <section
      v-if="showVideoSection"
      ref="videoSectionRef"
    >
      <Scroll_Video />
    </section>
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
</style>
