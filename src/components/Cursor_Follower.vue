<template>
  <div
    class="custom-cursor border-amber-500 border"
    ref="cursor"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const cursor = ref<HTMLElement | null>(null)

function updateCursor(e: MouseEvent) {
  if (!cursor.value) return

  const cursorSize = 10 // largeur/hauteur du cercle en px
  const offset = cursorSize / 2

  gsap.to(cursor.value, {
    duration: 0.3,
    x: e.clientX - offset,
    y: e.clientY - offset,
    ease: 'power3.out',
  })
}


function onMouseOver(e: MouseEvent) {
  if (!cursor.value) return

  // Vérifie si la cible est un élément de texte (ajuste la liste selon tes besoins)
  const target = e.target as HTMLElement
  if (target.closest('p, span, h1, h2, h3, h4, h5, h6, a, button, li')) {
    gsap.to(cursor.value, {
      duration: 0.3,
      scale: 2,
      backgroundColor: 'rgba(255, 213, 0, 0.6)', // couleur orange semi-transparente
      borderColor: 'rgba(255, 213, 0, 1)',
      ease: 'power3.out',
    })
  }
}

function onMouseOut(e: MouseEvent) {
  if (!cursor.value) return

  // Quand on quitte un élément texte, on revient à l’état normal
  const related = e.relatedTarget as HTMLElement | null
  // Si on quitte vers un autre élément texte, ne pas réduire
  if (related && related.closest('p, span, h1, h2, h3, h4, h5, h6, a, button, li')) {
    return
  }

  gsap.to(cursor.value, {
    duration: 0.3,
    scale: 5,
    // backgroundColor: 'rgba()', // transparent
    borderColor: 'rgba(255, 213, 0)',
    ease: 'power3.out',
  })
}

onMounted(() => {
  window.addEventListener('mousemove', updateCursor)
  window.addEventListener('mouseover', onMouseOver)
  window.addEventListener('mouseout', onMouseOut)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursor)
  window.removeEventListener('mouseover', onMouseOver)
  window.removeEventListener('mouseout', onMouseOut)
})
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  background-color: rgb(255, 255, 0);
  border-radius: 50%;
  pointer-events: none;
  transform: translate3d(0, 0, 0) scale(1);
  border: 1px solid rgb(255, 255, 0);
  transition: background-color 0.2s ease, border-color 0.2s ease;
  z-index: 9999;
}
</style>
