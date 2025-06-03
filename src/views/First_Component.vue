
<template>
  <!-- Conteneur principal en flex column qui répartit l'espace verticalement sur toute la hauteur de l'écran -->
  <main class="flex flex-col relative space-y-16 h-screen">

    <!-- Composant principal de la page d'accueil -->
    <BP_Home />

    <!-- Composant affichant un carrousel de marques -->
    <Marque_Carrousel class="bg-transparent overflow-hidden" />
  </main>
</template>

<script lang="ts" setup>
  // Import du composant BP_Home depuis le dossier components/Landing/views
  import BP_Home from '@/components/Landing/views/BP_Home.vue'

  // Import du composant Marque_Carrousel depuis components/Landing/component
  import Marque_Carrousel from '@/components/Landing/component/Marque_Carrousel.vue'
</script>
