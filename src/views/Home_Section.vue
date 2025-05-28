<template>
  <First ref="firstRef" />
  <BlackSection ref="blackRef" />
  <Test_Component  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import First from './First_Component.vue'
import BlackSection from '@/components/Landing/component/BlackSection.vue'
import Test_Component from '@/components/Test_Component.vue'

gsap.registerPlugin(ScrollTrigger)

const firstRef = ref<InstanceType<typeof First> | null>(null)
const blackRef = ref<InstanceType<typeof BlackSection> | null>(null)

onMounted(async () => {
  await nextTick() // s'assurer que les refs sont bien montées

  const firstEl = firstRef.value?.$el as HTMLElement | undefined
  const blackEl = blackRef.value?.$el as HTMLElement | undefined

  if (firstEl) {
    gsap.fromTo(
      firstEl,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: firstEl,
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      },
    )
  }

  if (blackEl) {
    gsap.fromTo(
      blackEl,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 3,
        scrollTrigger: {
          trigger: blackEl,
          start: 'top 50%',
          end: 'top 30%',
          scrub: true,
        },
      },
    )
  }
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>

<style scoped>
/* Ajoute ici des styles globaux ou spécifiques si besoin */
</style>
