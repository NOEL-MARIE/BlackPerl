<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <main class="flex flex-col min-h-screen ">

      <BP_Home />
      <Marque_Carrousel />
    </main>
  </template>

  <script lang="ts" setup>
  import BP_Home from '@/components/Landing/views/BP_Home.vue'
  import Marque_Carrousel from '@/components/Landing/component/Marque_Carrousel.vue'

  </script>
