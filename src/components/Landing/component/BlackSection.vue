<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const sectionRef = ref<HTMLElement | null>(null)
const logoRef = ref<HTMLImageElement | null>(null)
const isDragging = ref(false)
const startY = ref(0)
const currentY = ref(0)

onMounted(() => {
  gsap.from(logoRef.value, {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
  })
})

function onMouseDown(e: MouseEvent | TouchEvent) {
  isDragging.value = true
  startY.value = 'touches' in e ? e.touches[0].clientY : e.clientY

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
  document.addEventListener('touchmove', onMouseMove)
  document.addEventListener('touchend', onMouseUp)
}

function onMouseMove(e: MouseEvent | TouchEvent) {
  if (!isDragging.value) return

  currentY.value = 'touches' in e ? e.touches[0].clientY : e.clientY
  const deltaY = currentY.value - startY.value

  // Ignorer tout mouvement vers le bas
  if (deltaY >= 0) return

  if (sectionRef.value) {
    sectionRef.value.style.transform = `translateY(${deltaY}px)`

    if (logoRef.value) {
      const rotation = Math.min(Math.abs(deltaY) / 5, 15)
      gsap.to(logoRef.value, { rotate: rotation, duration: 0.2 })
    }
  }
}

function onMouseUp() {
  if (!isDragging.value) return
  isDragging.value = false

  const deltaY = currentY.value - startY.value

  if (sectionRef.value && deltaY < -80) {
    // Drag suffisant vers le haut → animation de sortie
    gsap.to(sectionRef.value, {
      y: -window.innerHeight,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.in',
      onComplete: () => {
        // Tu peux émettre un événement ici si nécessaire
      },
    })
  } else if (sectionRef.value) {
    // Retour à la position initiale si glissement insuffisant
    gsap.to(sectionRef.value, {
      y: 0,
      duration: 0.4,
      ease: 'power3.out',
    })
  }

  if (logoRef.value) {
    gsap.to(logoRef.value, { rotate: 0, duration: 0.5, ease: 'power3.out' })
  }

  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
  document.removeEventListener('touchmove', onMouseMove)
  document.removeEventListener('touchend', onMouseUp)
}
</script>

<template>
  <section ref="sectionRef" class="h-screen font-sans bg-black pb-10 pt-4">
    <div class="content">
      <div class="logo">
        <img
          ref="logoRef"
          width="303"
          height="330"
          src="@/assets/images/LogoBlackPEARL.png"
          alt="Logo Black Pearl"
          class="relative"
        />
      </div>
      <div class="flex flex-col items-center justify-center mt-20 gap-4">
        <p class="text-white">Tirez l’ancre vers le haut, et commencez le jeu</p>
        <img
          src="@/assets/images/Anchor.gif"
          alt="Ancre"
          width="40"
          height="40"
          class="cursor-grab active:cursor-grabbing"
          @mousedown="onMouseDown"
          @touchstart="onMouseDown"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  will-change: transform;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

.logo img {
  will-change: transform;
}
</style>
