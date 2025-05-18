<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue';
import { gsap } from 'gsap';
import ChessboardGallery from '@/components/Landing/component/ChessboardGallery.vue';

const showLoader = ref(true);
const galleryRef = ref<HTMLElement | null>(null);

onMounted(() => {
  setTimeout(() => {
    showLoader.value = false;
  }, 3000);
});

// Animation GSAP à l’apparition du ChessboardGallery
watch(showLoader, async (newVal) => {
  if (!newVal) {
    await nextTick(); // attendre que le DOM soit mis à jour
    if (galleryRef.value) {
      gsap.fromTo(
        galleryRef.value,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }
});
</script>

<template>
  <section v-if="showLoader" class="flex items-center justify-center w-screen h-screen">
    <video src="@/assets/images/Scroll-BP.mp4" autoplay ></video>
  </section>

  <div v-else ref="galleryRef" style="opacity: 0;">
    <ChessboardGallery />
  </div>
</template>

<style scoped>
section {
  transition: opacity 0.5s ease;
}
</style>
