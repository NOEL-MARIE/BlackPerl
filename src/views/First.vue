<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <main class="flex flex-col min-h-screen justify-between">
      <NavBar_Component />

      <BP_Home />
      <Marque_Carrousel />
    </main>
  </template>

  <script lang="ts" setup>
  import NavBar_Component from '@/components/NavBar/NavBar_Component.vue'
  import BP_Home from '@/components/Landing/views/BP_Home.vue'
  import Marque_Carrousel from '@/components/Landing/component/Marque_Carrousel.vue'
  
  </script>
