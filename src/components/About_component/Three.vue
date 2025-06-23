<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="relative z-50 flex flex-col items-center justify-center w-screen h-screen bg-black pt-52 mt-14 pb-52 mb-14">
    <div>
      <img ref="logoBlackPearlRef"  src="@/assets/images/Logo Black Pearlwhite.png" width="444px" height="264px" alt="" class="">
    </div>
    <div>
      <!-- Section ON JOUE POUR GAGNER -->
      <div class="slogan-section">
        <div class="slogan-line">
          <img ref="typingImageRef"  src="@/assets/images/Rectangle 155typing.png" alt="Clavier" class="slogan-image" />
          <span class="slogan-text">ON JOUE</span>
        </div>

        <div class="slogan-line ">
          <span class="slogan-text ">POUR</span>
          <img ref="cameraImageRef" src="@/assets/images/Rectangle 156camera.png" alt="Camera" class="slogan-image mr-60" />
          <div class="flex-row slogan-quote mt-11">
            <span class="text-xl quote-star ">*</span>
            <div class="ml-2 quote-text ">
              "L'AFRIQUE EST NOTRE<br>
              INSPIRATION.<br>
              LE MONDE, NOTRE TERRAIN."
            </div>
          </div>
        </div>

        <div class="slogan-line">
          <img ref="cocaImageRef"  src="@/assets/images/Rectangle 157coca.png" alt="Coca" class="slogan-image" />
          <span class="slogan-text">GAGNER</span>
          <img ref="pizzaImageRef" src="@/assets/images/Rectangle 158pizza.png" alt="Pizza" class="slogan-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrez le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Refs pour chaque image que nous voulons animer
const logoBlackPearlRef = ref<HTMLImageElement | null>(null);
const typingImageRef = ref<HTMLImageElement | null>(null);
const cameraImageRef = ref<HTMLImageElement | null>(null);
const cocaImageRef = ref<HTMLImageElement | null>(null);
const pizzaImageRef = ref<HTMLImageElement | null>(null);

const animateImages = () => {
  // Animation pour le logo Black Pearl
  if (logoBlackPearlRef.value) {
    gsap.from(logoBlackPearlRef.value, {
      y: 100, // Commence 100px plus bas
      opacity: 0, // Commence invisible
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: logoBlackPearlRef.value,
        start: 'top 90%', // Déclenche quand le haut de l'image est à 90% du haut de la vue
        toggleActions: 'play none none none',
        // markers: true, // Pour le débogage
      },
    });
  }

  // Animation pour l'image du clavier (typing.png)
  if (typingImageRef.value) {
    gsap.from(typingImageRef.value, {
      y: 80, // Commence 80px plus bas
      opacity: 0,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: typingImageRef.value,
        start: 'top 85%', // Ajustez la position de déclenchement
        toggleActions: 'play none none none',
        // markers: true,
      },
    });
  }

  // Animation pour l'image de la caméra (camera.png)
  if (cameraImageRef.value) {
    gsap.from(cameraImageRef.value, {
      y: 80,
      opacity: 0,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cameraImageRef.value,
        start: 'top 85%',
        toggleActions: 'play none none none',
        // markers: true,
      },
    });
  }

  // Animation pour l'image du coca (coca.png)
  if (cocaImageRef.value) {
    gsap.from(cocaImageRef.value, {
      y: 80,
      opacity: 0,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cocaImageRef.value,
        start: 'top 85%',
        toggleActions: 'play none none none',
        // markers: true,
      },
    });
  }

  // Animation pour l'image de la pizza (pizza.png)
  if (pizzaImageRef.value) {
    gsap.from(pizzaImageRef.value, {
      y: 80,
      opacity: 0,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: pizzaImageRef.value,
        start: 'top 85%',
        toggleActions: 'play none none none',
        // markers: true,
      },
    });
  }
};

onMounted(() => {
  animateImages();
});

onBeforeUnmount(() => {
  // Tue tous les ScrollTriggers créés pour éviter les fuites de mémoire
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<style scoped>
.slogan-section {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.slogan-line {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  gap: 20px;
}

.slogan-text {
  font-size: 8rem;
  font-weight: 300px;
  color: white;
  font-style: italic;
  white-space: nowrap;
}

.slogan-image {
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 0;
}

.slogan-quote {
  position: absolute;
  right: 0;
 margin-bottom: 50px;
  display: flex;


}

.quote-star {
  color: white;
}

.quote-text {
  font-size: 0.9rem;
  line-height: 1.4;
  color: white;
  font-weight: 400;
}

@media (max-width: 768px) {
  .slogan-text {
    font-size: 4rem;
  }

  .slogan-image {
    width: 80px;
    height: 60px;
  }

  .slogan-quote {
    position: relative;
    margin-top: 20px;
    right: auto;
    top: auto;
    justify-content: center;
  }
}
</style>
