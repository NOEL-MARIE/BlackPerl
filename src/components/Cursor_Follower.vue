<template>
  <!-- Élément représentant le curseur personnalisé -->
  <div class="custom-cursor border-white border" ref="cursor"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const cursor = ref<HTMLElement | null>(null)

// Met à jour la position du curseur en fonction des mouvements de la souris
function updateCursor(e: MouseEvent) {
  if (!cursor.value) return

  const cursorSize = 20 // Diamètre du curseur en px
  const offset = cursorSize / 2 // Centre le curseur

  gsap.to(cursor.value, {
    duration: 0.9,
    x: e.clientX - offset,
    y: e.clientY - offset,
    ease: 'power3.out',
  })
}

// Lorsqu’on survole un élément interactif ou textuel
function onMouseOver(e: MouseEvent) {
  if (!cursor.value) return

  const target = e.target as HTMLElement
  if (target.closest('p, span, h1, h2, h3, h4, h5, h6, a, button, li')) {
    gsap.to(cursor.value, {
      duration: 0.3,
      scale: 1, // Agrandit le curseur
      backgroundColor: 'rgba(255, 255, 255, 0.6)', // 🔵 Blanc semi-transparent
      borderColor: 'rgba(0, 0, 0)', // 🔵 Blanc opaque
      ease: 'power3.out',
    })
  }
}

// Quand on quitte un élément interactif ou textuel
function onMouseOut(e: MouseEvent) {
  if (!cursor.value) return

  const related = e.relatedTarget as HTMLElement | null
  if (related && related.closest('p, span, h1, h2, h3, h4, h5, h6, a, button, li')) return

  gsap.to(cursor.value, {
    duration: 0.3,
    scale: 1, // Revient à la taille normale
    backgroundColor: 'rgba(255, 255, 255, 0)', // ⚫ Noir opaque
    borderColor: 'rgba(0, 0, 0)', // 🔵 Bordure blanche
    ease: 'power3.out',
  })
}

// Quand on clique (mousedown)
function onMouseDown() {
  if (!cursor.value) return

  gsap.to(cursor.value, {
    scale: 0.7, // Rétrécit
    backgroundColor: 'rgba(255, 255, 255, 1)', // 🔵 Blanc opaque
    borderColor: 'rgba(0, 0, 0)', // 🔵 Blanc
  })
  gsap.to(cursor.value, {
    scale: 0.1, // Rétrécit
    backgroundColor: 'rgba(255, 255, 255, 1)', // 🔵 Blanc opaque
    borderColor: 'rgba(0, 0, 0)', // 🔵 Blanc
  })
}

// Quand on relâche le clic (mouseup)
function onMouseUp() {
  if (!cursor.value) return

  gsap.to(cursor.value, {
    scale: 1,
    backgroundColor: 'rgba(255, 255, 0,0)', // ⚫ Noir
    borderColor: 'rgba(255, 255, 255, 1)', // 🔵 Blanc
    ease: 'power3.out',
  })
}

// Ajout des écouteurs au montage du composant
onMounted(() => {
  window.addEventListener('mousemove', updateCursor)
  window.addEventListener('mouseover', onMouseOver)
  window.addEventListener('mouseout', onMouseOut)
  window.addEventListener('mousedown', onMouseDown)
  window.addEventListener('mouseup', onMouseUp)
  window.addEventListener('dragstart', onMouseDown)
  window.addEventListener('dragend', onMouseUp)
})

// Suppression des écouteurs à la destruction du composant
onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursor)
  window.removeEventListener('mouseover', onMouseOver)
  window.removeEventListener('mouseout', onMouseOut)
  window.removeEventListener('mousedown', onMouseDown)
  window.removeEventListener('mouseup', onMouseUp)
  window.removeEventListener('dragstart', onMouseDown)
  window.removeEventListener('dragend', onMouseUp)
})
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: rgb(0, 0, 0); /* ⚫ Couleur par défaut : noir */
  border-radius: 50%; /* Cercle parfait */
  pointer-events: none; /* Ne bloque pas les clics */
  transform: translate3d(0, 0, 0) scale(1);
  border: 1px solid rgba(0, 0, 0, 0); /* 🔵 Bordure blanche */
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
  z-index: 9999; /* Toujours au-dessus */
}
</style>
