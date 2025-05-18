<template>
  <div class="app-wrapper">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
// Composant App principal - aucune logique spécifique ici
</script>

<style>

</style>
