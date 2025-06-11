<template>
  <First  />
  <!-- <BlackSection ref="blackRef" /> -->
  <gsap3dpositionv1  />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import First from './First_Component.vue'
// import BlackSection from '@/components/Landing/component/BlackSection.vue'
import gsap3dpositionv1 from '@/components/gsap-3d-position-v1.vue'

gsap.registerPlugin(ScrollTrigger)


// const blackRef = ref<InstanceType<typeof BlackSection> | null>(null)

onMounted(async () => {
  await nextTick() // s'assurer que les refs sont bien montées


  // const blackEl = blackRef.value?.$el as HTMLElement | undefined



  // if (blackEl) {
  //   gsap.fromTo(
  //     blackEl,
  //     { opacity: 0, y: 10, scale: 0.8 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scale: 1,
  //       duration: 3,
  //       scrollTrigger: {
  //         trigger: blackEl,
  //         start: 'top 50%',
  //         end: 'top 30%',
  //         scrub: true,
  //       },
  //     },
  //   )
  // }
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>

<style scoped>
/* Ajoute ici des styles globaux ou spécifiques si besoin */
</style>
