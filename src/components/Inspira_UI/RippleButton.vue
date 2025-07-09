<template>
  <button
    ref="rippleButtonRef"
    :class="[
      'relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border font-cinzel border-white text-white px-6 py-2 font-semibold shadow-md bg-black/40 hover:bg-black/60 transition-colors',
      $attrs.class
    ]"
    :style="{ '--duration': duration + 'ms' }"
    @click="handleClick"
    v-bind="$attrs"
  >
    <div class="relative z-10">
      <slot />
    </div>

    <span class="pointer-events-none absolute inset-0">
      <span
        v-for="ripple in buttonRipples"
        :key="ripple.key"
        class="ripple-animation absolute rounded-full opacity-30"
        :style="{
          width: ripple.size + 'px',
          height: ripple.size + 'px',
          top: ripple.y + 'px',
          left: ripple.x + 'px',
          backgroundColor: rippleColor,
          transform: 'scale(0)',
          animationDuration: duration + 'ms',
        }"
      />
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref, watchEffect, defineProps, defineEmits } from 'vue'

const props = defineProps({
  rippleColor: { type: String, default: '#ADD8E6' },
  duration: { type: Number, default: 600 },
})

const emit = defineEmits(['click'])

const rippleButtonRef = ref<HTMLButtonElement | null>(null)
const buttonRipples = ref<
  Array<{ x: number; y: number; size: number; key: number }>
>([])

function handleClick(event: MouseEvent) {
  createRipple(event)
  emit('click', event)
}

function createRipple(event: MouseEvent) {
  const button = rippleButtonRef.value
  if (!button) return

  const rect = button.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = event.clientX - rect.left - size / 2
  const y = event.clientY - rect.top - size / 2

  const newRipple = { x, y, size, key: Date.now() }
  buttonRipples.value.push(newRipple)
}

watchEffect(() => {
  if (buttonRipples.value.length > 0) {
    const lastRipple = buttonRipples.value[buttonRipples.value.length - 1]
    setTimeout(() => {
      buttonRipples.value = buttonRipples.value.filter(
        (ripple) => ripple.key !== lastRipple.key
      )
    }, props.duration)
  }
})
</script>

<style scoped>
@keyframes rippling {
  0% {
    opacity: 1;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
}

.ripple-animation {
  animation: rippling var(--duration) ease-out;
  pointer-events: none;
}
</style>
