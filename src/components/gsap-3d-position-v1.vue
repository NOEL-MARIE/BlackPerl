<template>
  <div class="container h-screen" ref="containerElement">
    <div id="ring" ref="ringElement">
      <!-- Dynamically rendered image elements -->
      <div v-for="i in imageCount" :key="i" class="img"></div>
    </div>
  </div>
  <!-- Draggable overlay to capture mouse/touch events for rotation -->
  <div id="dragger" ref="draggerElement"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const containerElement = ref<HTMLElement | null>(null);
const ringElement = ref<HTMLElement | null>(null);
const draggerElement = ref<HTMLElement | null>(null);

const imageCount = 20;

let lastClientX = 0;
let rotationY = 180; // initial rotation
let draggableInstance: Draggable | null = null;

function getBgPos(i: number): string {
  if (!ringElement.value) return '0px 0px';
  const rotY = gsap.getProperty(ringElement.value, 'rotationY') as number;
  // Wrap rotation between 0 and 360
  const wrappedRotation = gsap.utils.wrap(0, 360, rotY - 180 - i * 18);
  return `${(-wrappedRotation / 360) * 400}px 0px`;
}

function setupGSAPAnimations() {
  if (!ringElement.value || !draggerElement.value || !containerElement.value) {
    console.error("One or more required DOM elements are not available.");
    return;
  }

  const images = gsap.utils.toArray<HTMLElement>('.img', ringElement.value);

  gsap.timeline()
    .set(draggerElement.value, { opacity: 0 })
    .set(ringElement.value, { rotationY: rotationY })
    .set(images, {
      rotateY: (i) => i * -18,
      transformOrigin: '50% 50% 1000px',
      z: -1000,
      backgroundImage: (i) => `url(https://placehold.co/700x300/F0F0F0/000000?text=Img%20${i + 1})`,
      backgroundPosition: (i) => getBgPos(i),
      backfaceVisibility: 'hidden'
    })
    .from(images, {
      duration: 1.5,
      y: 200,
      opacity: 0,
      stagger: 0.1,
      ease: 'expo'
    });

  draggableInstance = Draggable.create(draggerElement.value, {
    type: 'x',
    inertia: true,
    onPress: (e) => {
      lastClientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    },
    onDrag: (e) => {
      const currentClientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      const deltaX = currentClientX - lastClientX;
      rotationY += deltaX * 0.5; // Sensitivity factor
      gsap.set(ringElement.value, { rotationY: rotationY });
      const images = gsap.utils.toArray<HTMLElement>('.img', ringElement.value);
      gsap.set(images, { backgroundPosition: (i) => getBgPos(i) });
      lastClientX = currentClientX;
    },
    onRelease: () => {
      // Optionally snap rotation to nearest image angle
      const snapRotation = Math.round(rotationY / (360 / imageCount)) * (360 / imageCount);
      rotationY = snapRotation;
      gsap.to(ringElement.value, { rotationY: snapRotation, duration: 0.5, ease: 'power3.out', onUpdate: () => {
        const images = gsap.utils.toArray<HTMLElement>('.img', ringElement.value);
        gsap.set(images, { backgroundPosition: (i) => getBgPos(i) });
      }});
      gsap.set(draggerElement.value, { x: 0, y: 0 });
    }
  })[0];
}

onMounted(() => {
  setupGSAPAnimations();
});

onUnmounted(() => {
  if (draggableInstance) {
    draggableInstance.kill();
    draggableInstance = null;
  }
  if (ringElement.value) {
    gsap.killTweensOf(ringElement.value);
  }
  gsap.killTweensOf('.img');
});
</script>

<style scoped>
html,
body {
  overflow: hidden;
  background: #000;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}

.container,
#dragger,
#ring,
.img {
  transform-style: preserve-3d;
  user-select: none;
}

div {
  position: absolute;
}

.container {
  perspective: 2000px;
  width: 300px;
  height: 300px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 90vw;
  max-height: 90vh;
  aspect-ratio: 1 / 1;
}

#ring {
  width: 100%;
  height: 100%;
}

.img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

#dragger {
  position: fixed; /* fixed to cover viewport */
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  cursor: grab;
  touch-action: none; /* prevent default touch gestures */
  user-select: none;
}
</style>
