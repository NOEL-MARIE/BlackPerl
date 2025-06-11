<template>
  <main class="relative flex flex-col h-screen space-y-16">
    <BP_Home />

    <Marque_Carrousel class="overflow-hidden bg-transparent" />
  </main>
</template>

<script lang="ts" setup>
import BP_Home from '@/components/Landing/views/BP_Home.vue'

import Marque_Carrousel from '@/components/Landing/component/Marque_Carrousel.vue'
</script>
