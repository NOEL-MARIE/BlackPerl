<template>
  <div class="app-wrapper">
    <Cursor_Follower/>
    <NavBar_Component/>
    <router-view v-slot="{ Component }">
      <transition name="">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import Cursor_Follower from '@/components/Cursor_Follower.vue'
import NavBar_Component from './components/NavBar/NavBar_Component.vue';
</script>

<style>
</style>
