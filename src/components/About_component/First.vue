<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import TestProfilView from '@/components/About_component/TestProfilView[1].vue'
import { ref, onBeforeUnmount } from 'vue'



onBeforeUnmount(() => {

})
// importation des element gsap pour animtion de texte
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);
// Create a ref to link my H1 element in the template
const animatedHeadline = ref<HTMLElement | null>(null);

</script>

<template>

    <div class="z-0 flex flex-col  2xl:mt-16 sm:justify-around  w-screen h-screen">
      <div class="flex justify-center w-full md:h-52 h-96">
        <h1 ref="animatedHeadline" class=" text-[30px] 2xl:md:text-[180px] 2xl:pb-9   font-cinzel leading-none text-center md:text-[88px] flex-col">
          DONNEZ VIE À VOTRE <br />
          MARQUE
        </h1>
      </div>
      <div class="z-0 flex md:h-1/2   oblique-carousel-viewport sm:mt-44 2xl:mt-96">
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




</style>
