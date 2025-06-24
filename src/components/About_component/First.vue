<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import TestProfilView from '@/components/About_component/TestProfilView[1].vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {

  animateHeadline();
})

onBeforeUnmount(() => {

})
// importation des element gsap pour animtion de texte
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);
// Create a ref to link my H1 element in the template
const animatedHeadline = ref<HTMLElement | null>(null);
const animateHeadline = () => {
  // Ensure the element is mounted and accessible
  if (animatedHeadline.value) {
    // Initialize SplitText on the headline element
    const mySplitText = new SplitText(animatedHeadline.value, { type: 'chars words lines' });
    const lines = mySplitText.lines; // Get the array of split lines

    // Set initial state for the animation (optional, but good for smooth transitions)
    gsap.set(lines, { opacity: 0, y: 20 });

    // Animate each line into view
    gsap.to(lines, {
      opacity: 1,
      y: 0,
      duration: 0.5, // Duration for each line's animation
      ease: 'power3.out', // Easing function
      stagger: 0.15, // Stagger the start time of each line's animation
      delay: 0.5 // Delay before the entire animation sequence begins
    });
  }
};
</script>

<template>

    <div class="z-0 flex flex-col  justify-around w-screen h-screen">
      <div class="flex justify-center w-full h-52">
        <h1 ref="animatedHeadline" class=" text-[70px]   font-cinzel leading-none text-center md:text-[88px] flex-col">
          DONNEZ VIE À VOTRE <br />
          MARQUE
        </h1>
      </div>
      <div class="z-0 flex h-1/2 oblique-carousel-viewport mt-44">
        <TestProfilView />
      </div>


    </div>
</template>

<style scoped>
.oblique-carousel-viewport {
  /* overflow: hidden; */
  position: relative;
}
.oblique-carousel-wrapper {
  display: flex;
  align-items: flex-start;
  position: absolute;

}
.oblique-carousel-img {
  width: 240px;
  height: 240px;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.13);
  background: #b22121;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /* Optionnel: effet d'arc */
  transition: transform 0.4s cubic-bezier(0.4, 1.6, 0.4, 1);
}
.oblique-carousel-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;
  display: block;
}

/* Responsive */
@media (max-width: 600px) {
  .oblique-carousel-img {
    width: 140px;
    height: 140px;
    border-radius: 16px;
  }
  .oblique-carousel-viewport {
    height: 180px;
  }
}
</style>
