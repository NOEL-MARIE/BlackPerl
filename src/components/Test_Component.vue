<template>
  <div
    class="top-bubble-wrap is-taller"
    :style="topBubbleWrapStyle"
  >
    <div
      class="top-bubble"
      :style="topBubbleStyle"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// Définition réactive des styles transform pour chaque div
const topBubbleWrapStyle = reactive({
  willChange: 'transform',
  transform: 'translate3d(0px, -1.7996vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)',
  transformStyle: 'preserve-3d',
})

const topBubbleStyle = reactive({
  willChange: 'transform',
  transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(42.9755deg) rotateZ(0deg) skew(0deg)',
  transformStyle: 'preserve-3d',
})
</script>

