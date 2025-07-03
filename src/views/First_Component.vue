<template>
  <main class="relative flex mb-36 flex-col h-screen w-screen ">
    <BP_Home class="overflow-hidden "/>

    <Marque_Carrousel class="overflow-hidden bg-transparent " />
  </main>
</template>

<script lang="ts" setup>
import BP_Home from '@/components/Landing/views/BP_Home.vue'

import Marque_Carrousel from '@/components/Landing/component/Marque_Carrousel.vue'
</script>
