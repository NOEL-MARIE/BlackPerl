
<template>
  <!-- Barre de navigation -->
  <div class="h-screen w-screen">
    <NavBar_Component />
    <BP_Home />
    <Marque_Carrousel />
    <BlackSection />
    <VideoSection />
    <ChessboardGallery/>
  </div>
</template>




<script setup lang="ts">

import NavBar_Component from '@/components/NavBar/NavBar_Component.vue'
import BP_Home from '@/components/Landing/views/BP_Home.vue'
import Marque_Carrousel from '@/components/Landing/component/Marque_Carrousel.vue'
import BlackSection from '@/components/Landing/component/BlackSection.vue'
import VideoSection from '@/components/Landing/component/VideoSection.vue'
import ChessboardGallery from '@/components/Landing/component/ChessboardGallery.vue'
</script>

<style scoped></style>
