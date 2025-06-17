<template>
  <div class="app-wrapper">
    <Cursor_Follower/>
    <Responsible_Recall/>
    <NavBar_Component v-if="!isImageRoute"/>
    <router-view v-slot="{ Component }">
      <transition >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router'; // Import useRoute
import Cursor_Follower from '@/components/Cursor_Follower.vue';
import Responsible_Recall from '@/components/BreakpointIndicator.vue';
import NavBar_Component from './components/NavBar/NavBar_Component.vue';

const route = useRoute(); // Get the current route object

// Create a computed property to check if the current route matches /image/:id
const isImageRoute = computed(() => {
  return route.path.startsWith('/image/');
});
</script>

<style>
/* Your existing styles */
</style>
