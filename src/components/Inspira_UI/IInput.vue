<template>
  <div
    ref="inputContainerRef"
    :class="cn('group/input rounded-lg p-[9px] border transition duration-300')"
    :style="{ background: containerBg }"
    @mouseenter="() => (visible = true)"
    @mouseleave="() => (visible = false)"
    @mousemove="handleMouseMove"
  >
    <input
      id="email"
      name="email"
      v-model="email"
      type="email"
      required
      placeholder="Entrez votre e-mail"
      class="text-xs sm:text-sm px-3  py-2 w-full sm:w-[244px] 2xl:w-[474px] 2xl:h-[74px] rounded outline-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-amber-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 shadow-input dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] transition duration-400"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils' // ta fonction utilitaire pour les classes

const email = ref('')

const inputContainerRef = ref<HTMLDivElement | null>(null)
const mouse = ref({ x: 0, y: 0 })
const radius = 100
const visible = ref(false)

const containerBg = computed(() => {
  return `
    radial-gradient(
      ${visible.value ? radius + 'px' : '0px'} circle at ${mouse.value.x}px ${mouse.value.y}px,
      bg-black,
      transparent 10%
    )
  `
})

function handleMouseMove(event: MouseEvent) {
  if (!inputContainerRef.value) return
  const { left, top } = inputContainerRef.value.getBoundingClientRect()
  mouse.value = { x: event.clientX - left, y: event.clientY - top }
}
</script>

<style scoped>
input {
  box-shadow:
    0px 2px 3px -1px rgba(191, 0, 0, 0.1),
    0px 1px 0px 0px rgba(0, 94, 255, 0.02),
    0px 0px 0px 1px rgba(0, 92, 250, 0.08);
}
</style>
