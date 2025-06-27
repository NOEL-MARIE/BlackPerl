<template>

  <div class="app-wrapper">
    <Cursor_Follower />
    <NavBar_Component v-if="!isImageRoute" />
    <transition name="fade">
    </transition>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Cursor_Follower from '@/components/Cursor_Follower.vue';
import NavBar_Component from './components/NavBar/NavBar_Component.vue';

const route = useRoute();

const isImageRoute = computed(() => route.path.startsWith('/image/'));






// État du loader
const isLoading = ref(true)
const progress = ref(0)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false; // Simule la fin du chargement
  }, 9000);
  const progressInterval = setInterval(() => {
    if (progress.value >= 100) {
      clearInterval(progressInterval)
      progress.value = 100
    } else {
      progress.value += 100 / 190 // 12s = 120 x 100ms
    }
  }, 900)

});
</script>

<style>
/* Style pour que le loader soit en overlay si besoin */
.app-wrapper {
  position: relative;
}
.loader-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Animation fade pour transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
