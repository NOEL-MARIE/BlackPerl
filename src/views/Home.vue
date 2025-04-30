<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Barre de navigation -->
      <!-- <BP_Home />
      <Marque_Carrousel /> -->
  <First />
  <BlackSection />
  <VideoSection />
  <ChessboardGallery />
</template>

<script setup lang="ts">
import First from './First.vue'
// import BP_Home from '@/components/Landing/views/BP_Home.vue'
// import Marque_Carrousel from '@/components/Landing/component/Marque_Carrousel.vue'
import BlackSection from '@/components/Landing/component/BlackSection.vue'
import VideoSection from '@/components/Landing/component/VideoSection.vue'
import ChessboardGallery from '@/components/Landing/component/ChessboardGallery.vue'
</script>

<style scoped></style>
