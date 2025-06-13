<template>
  <div class="h-screen w-screen  flex flex-col space-y-14 gap-16 pb-28">
    <First />

    <gsap3dpositionv1 />
  </div>
  </template>

<script setup lang="ts">
import { onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import First from './First_Component.vue'
// Si vous prévoyez d'utiliser BlackSection, décommentez cet import
// import BlackSection from '@/components/Landing/component/BlackSection.vue'
import gsap3dpositionv1 from '@/components/gsap-3d-position-v1.vue'

// Enregistre le plugin GSAP ScrollTrigger une fois
gsap.registerPlugin(ScrollTrigger)

onMounted(async () => {
  // S'assure que le DOM est entièrement mis à jour avant d'exécuter potentiellement du code GSAP ou lié au DOM.
  // Actuellement, ce nextTick est vide, mais c'est une bonne pratique si vous prévoyez d'ajouter des animations ici.
  await nextTick()

  // Exemple : Si First ou gsap3dpositionv1 avaient des éléments spécifiques
  // qui devaient être ciblés par ScrollTrigger depuis *ce* composant parent,
  // vous ajouteriez leur configuration ici après nextTick.
})

onUnmounted(() => {
  // Crucial pour la performance : Termine tous les ScrollTriggers actifs lorsque le composant est démonté
  // afin d'éviter les fuites de mémoire et les comportements inattendus.
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>

<style scoped>
/* Ajoutez ici les styles spécifiques à ce composant si nécessaire. */
/* Les classes Tailwind sur le div (h-screen, w-screen, flex, etc.) fournissent déjà un style de base. */
</style>

