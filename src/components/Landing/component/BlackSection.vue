<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  // Animate the logo
  gsap.from('.logo img', {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
  })

  // // Add scroll event listener to hide scroll icon when scrolling
  // window.addEventListener('scroll', () => {
  //   showScrollIcon.value = window.scrollY <= 100
  // })
})
</script>

<template>
  <section class="h-screen bg-black pb-10 pt-4">
    <div class="content">
      <div class="logo">
        <img src="@/assets/images/LogoBlackPEARL.png" alt="Logo Black Pearl"  />
      </div>
      <div class=" flex flex-col items-center justify-center mt-20 gap-4">
        <p class="text-white">Tirez l’ancre vers le haut, et commencez le jeu</p>
        
        <img
          src="@/assets/images/Anchor.gif"
          alt="Logo Black Pearl"
          width="40px"
          height="40px"
          class="hover:cursor-grab"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>


.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
}

.wheel {
  width: 4px;
  height: 8px;
  background-color: white;
  position: absolute;
  top: 7px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
  animation: scroll 1.5s infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(15px);
    opacity: 0;
  }
}

@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}
</style>
