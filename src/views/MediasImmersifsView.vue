<template>
  <div  ref="canvasContainerRef" class="h-screen-xl flex">
    <!-- Partie gauche -->
           <canvas
        ref="canvasRef"
        class="absolute top-0 left-0 w-full h-full pointer-events-none"
      ></canvas>
    <div
      class="w-1/2 flex items-center justify-center flex-col font-HouseOfCardsW03Bold text-8xl text-black"
    >
      <div
        class="h-screen-perso w-full text-black text-5xl uppercase px-40 justify-center flex mt-64"
      >
        Ahoy moussaillons ! Notre navire est en cale sèche, la page est en chantier. En attendant,
        naviguez à bâbord et tribord parmi nos trésors et créations légendaires. Revenez bientôt
        pour une aventure épique ! Que les vents vous soient favorables !
      </div>
      <router-link to="/realisations">
      <div class="w-full flex items-center h-32 justify-center">
        <interactive-hover-button />
      </div>
      </router-link>
    </div>

    <!-- Partie droite -->
    <div

      class="w-1/2 relative flex items-center justify-center  overflow-hidden"
    >

      <img
        ref="boatRef"
        :src="imageBateau"
        alt="Bateau Pirate"
        class="relative h-1/2 select-none"
        draggable="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount, watch, computed } from 'vue'
import { useMouse, useDevicePixelRatio } from '@vueuse/core'
import InteractiveHoverButton from '@/components/Inspira_UI/Dock/Button_Hover/InteractiveHoverButton.vue'
import gsap from 'gsap'
import imageBateau from '@/assets/images/Bateau Pirate Noir 1.png'

// Types
type Circle = {
  x: number
  y: number
  translateX: number
  translateY: number
  size: number
  alpha: number
  targetAlpha: number
  dx: number
  dy: number
  magnetism: number
}

// Refs et réactifs
const boatRef = ref<HTMLElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const canvasContainerRef = ref<HTMLDivElement | null>(null)
const context = ref<CanvasRenderingContext2D | null>(null)
const circles = ref<Circle[]>([])
const mouse = reactive({ x: 0, y: 0 })
const canvasSize = reactive({ w: 0, h: 0 })
const { x: mouseX, y: mouseY } = useMouse()
const { pixelRatio } = useDevicePixelRatio()

// Props personnalisés
const props = reactive({
  color: '#FEEAA1',
  quantity: 600,
  staticity: 80,
  ease: 50,
})

// Traitement de couleur
const color = computed(() => {
  let hex = props.color.replace(/^#/, '')
  if (hex.length === 3)
    hex = hex
      .split('')
      .map((c) => c + c)
      .join('')
  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `${r} ${g} ${b}`
})

// Fonctions particules
function circleParams(): Circle {
  const x = Math.random() * canvasSize.w
  const y = Math.random() * canvasSize.h
  return {
    x,
    y,
    translateX: 0,
    translateY: 0,
    size: Math.random() * 2 + 1,
    alpha: 0,
    targetAlpha: Math.random() * 0.6 + 0.1,
    dx: (Math.random() - 0.5) * 0.2,
    dy: (Math.random() - 0.5) * 0.2,
    magnetism: 0.1 + Math.random() * 4,
  }
}

function drawCircle(circle: Circle, update = false) {
  if (!context.value) return
  const { x, y, translateX, translateY, size, alpha } = circle
  context.value.save()
  context.value.translate(translateX, translateY)
  context.value.beginPath()
  context.value.arc(x, y, size, 0, 2 * Math.PI)
  context.value.fillStyle = `rgba(${color.value}, ${alpha.toFixed(2)})`
  context.value.fill()
  context.value.restore()
  if (!update) circles.value.push(circle)
}

function clearContext() {
  context.value?.clearRect(0, 0, canvasSize.w, canvasSize.h)
}

function resizeCanvas() {
  if (!canvasContainerRef.value || !canvasRef.value || !context.value) return
  circles.value = []
  canvasSize.w = canvasContainerRef.value.offsetWidth
  canvasSize.h = canvasContainerRef.value.offsetHeight

  canvasRef.value.width = canvasSize.w * pixelRatio.value
  canvasRef.value.height = canvasSize.h * pixelRatio.value
  canvasRef.value.style.width = canvasSize.w + 'px'
  canvasRef.value.style.height = canvasSize.h + 'px'

  context.value.setTransform(1, 0, 0, 1, 0, 0)
  context.value.scale(pixelRatio.value, pixelRatio.value)
}

function drawParticles() {
  clearContext()
  for (let i = 0; i < props.quantity; i++) {
    drawCircle(circleParams())
  }
}

function remapValue(
  value: number,
  start1: number,
  end1: number,
  start2: number,
  end2: number,
): number {
  return ((value - start1) * (end2 - start2)) / (end1 - start1) + start2
}

function animate() {
  if (!context.value) return
  clearContext()
  circles.value.forEach((circle, i) => {
    const edge = [
      circle.x + circle.translateX - circle.size,
      canvasSize.w - circle.x - circle.translateX - circle.size,
      circle.y + circle.translateY - circle.size,
      canvasSize.h - circle.y - circle.translateY - circle.size,
    ]
    const closestEdge = Math.min(...edge)
    const remapClosestEdge = Math.max(0, Math.min(1, remapValue(closestEdge, 0, 20, 0, 1)))

    circle.alpha += (circle.alpha < circle.targetAlpha ? 0.02 : -0.02) * remapClosestEdge
    circle.alpha = Math.max(0, Math.min(circle.alpha, circle.targetAlpha))

    circle.x += circle.dx
    circle.y += circle.dy
    circle.translateX +=
      (mouse.x / (props.staticity / circle.magnetism) - circle.translateX) / props.ease
    circle.translateY +=
      (mouse.y / (props.staticity / circle.magnetism) - circle.translateY) / props.ease

    if (
      circle.x < -circle.size ||
      circle.x > canvasSize.w + circle.size ||
      circle.y < -circle.size ||
      circle.y > canvasSize.h + circle.size
    ) {
      circles.value.splice(i, 1)
      drawCircle(circleParams())
    } else {
      drawCircle(circle, true)
    }
  })
  requestAnimationFrame(animate)
}

function onMouseMove() {
  if (!canvasRef.value) return
  const rect = canvasRef.value.getBoundingClientRect()
  const x = mouseX.value - rect.left - canvasSize.w / 2
  const y = mouseY.value - rect.top - canvasSize.h / 2
  if (Math.abs(x) < canvasSize.w / 2 && Math.abs(y) < canvasSize.h / 2) {
    mouse.x = x
    mouse.y = y
  }
}

// Montage
onMounted(() => {
  if (canvasRef.value) context.value = canvasRef.value.getContext('2d')
  resizeCanvas()
  drawParticles()
  animate()

  // Animation bateau avec ondulation GSAP
  if (boatRef.value) {
    gsap.to(boatRef.value, {
      y: -15,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: 'sine.inOut',
    })
  }

  window.addEventListener('resize', resizeCanvas)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCanvas)
})

watch([mouseX, mouseY], onMouseMove)
</script>

<style scoped>
canvas {
  display: block;
  width: 100% !important;
  height: 100% !important;
}
</style>
