<template>
  <span
    ref="containerRef"
    class="duration-700"
    style="transform-style: preserve-3d; perspective: 1000px"
    @mouseenter="handleMouseEnter"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { useMouseState } from './Ts/useMouseState'

const containerRef = ref<HTMLElement | null>(null)

const mouseState = useMouseState()
provide('use3DCardMouseState', mouseState)

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function handleMouseMove(e: MouseEvent) {
  if (!containerRef.value) return
  const { left, top, width, height } = containerRef.value.getBoundingClientRect()
  let x = (e.clientX - left - width / 2) / 8
  let y = (e.clientY - top - height / 2) / 8

  x = clamp(x, -15, 15)
  y = clamp(y, -15, 15)

  containerRef.value.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
}

function handleMouseEnter() {
  mouseState.setMouseEntered(true)
}

function handleMouseLeave() {
  if (!containerRef.value) return
  mouseState.setMouseEntered(false)
  containerRef.value.style.transform = `rotateY(0deg) rotateX(0deg)`
}
</script>
