<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<!-- eslint-disable vue/block-lang -->
<script setup >
import { ref, onMounted, onUnmounted } from 'vue'
import APP from '@/App.vue'
// État du loader
const isLoading = ref(true)
const progress = ref(0)

let progressInterval = null
let loadingTimer = null

onMounted(() => {
  progressInterval = setInterval(() => {
    if (progress.value >= 100) {
      clearInterval(progressInterval)
      progress.value = 100
    } else {
      progress.value += 100 / 190 // 12s = 120 x 100ms
    }
  }, 100)

  loadingTimer = setTimeout(() => {
    isLoading.value = false
  }, 19000)
})

onUnmounted(() => {
  clearInterval(progressInterval)
  clearTimeout(loadingTimer)
})


</script>

<template>
  <div>
    <div v-if="isLoading" class="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden">
      <!-- Background Animation -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div class="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        <div class="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-4000"></div>
      </div>
      <div class="text-center z-10">
        <!-- Loader Icon (SVG animé) -->
        <div class="mb-8 relative">
          <svg class="w-16 h-16 text-white animate-spin mx-auto" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
          </svg>
          <div class="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-400 rounded-full animate-spin mx-auto" style="animation-duration: 0.5s;"></div>
        </div>
        <h1 class="text-4xl font-bold text-white mb-4 animate-pulse">Chargement</h1>
        <!-- Progress Bar -->
        <div class="w-80 mx-auto mb-6">
          <div class="bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <div class="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-100 ease-out"
                 :style="{ width: progress + '%' }"></div>
          </div>
          <p class="text-white/80 text-sm mt-2">{{ Math.round(progress) }}%</p>
        </div>
      </div>
    </div>

    <div v-else class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <!-- Header -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <APP/>
        </div>

      <!-- Footer -->

    </div>
  </div>
</template>
