<template>

  <section ref="firstSectionRef" class=" w-screen overflow h-screen bg-white mt-10 first-component-section">
    <div ref="ovalBackgroundWrapRef" class="oval-background-wrap z-0 is-taller overflow-hidden">
      <div ref="ovalBackgroundRef" class="oval-background "></div>
    </div>

    <div class="relative z-10 bg-white">
      <BlackSection />
    </div>
  </section>
</template>

<script setup lang="ts">
import BlackSection from '@/components/Landing/component/BlackSection.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const firstSectionRef = ref<HTMLElement | null>(null)
const ovalBackgroundWrapRef = ref<HTMLElement | null>(null) // Référence pour le conteneur du wrap
const ovalBackgroundRef = ref<HTMLElement | null>(null) // Référence à l'arrière-plan ovale

let ovalScrollTl: gsap.core.Timeline | null = null // Timeline pour l'animation de l'ovale

onMounted(() => {
  if (!firstSectionRef.value || !ovalBackgroundWrapRef.value || !ovalBackgroundRef.value) {
    console.warn("Les références nécessaires pour l'animation de l'ovale n'ont pas été trouvées. L'animation sera ignorée.");
    return;
  }

  // **IMPORTANT :** Pour que ScrollTrigger fonctionne correctement, votre page doit avoir suffisamment de contenu
  // après cette section. Sans cela, il n'y aura pas de "distance" de défilement pour déclencher l'animation.
  // Pour les tests, vous pouvez ajouter temporairement ceci dans votre CSS global ou le <body> :
  // `document.body.style.minHeight = '250vh';`
  // N'oubliez pas de l'ajuster ou de le retirer en production si vous avez d'autres sections.

  ovalScrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: firstSectionRef.value, // Cette section est le déclencheur de l'animation
      start: 'bottom top', // L'animation démarre lorsque le haut de cette section atteint le haut du viewport
      end: '+=1500', // L'animation se déroulera sur 1500 pixels de défilement (ajustez cette valeur !)
      scrub: true, // Lie la progression de l'animation directement au défilement de la page
      pin: true, // Épingle cette section au viewport pendant toute la durée de l'animation
      // markers: true, // Décommentez cette ligne pour voir les marqueurs de débogage visuels de ScrollTrigger
      id: "FirstComponentOvalReplication" // Un identifiant unique pour ce ScrollTrigger
    }
  });

  // Animation du conteneur wrap de l'ovale (pour le mouvement global)
  ovalScrollTl.to(
    ovalBackgroundWrapRef.value,
    {
      y: '-40vw', // Déplace le conteneur vers le haut (selon votre exemple)
      ease: 'none', // Mouvement linéaire
      duration: 1, // Durée relative au sein de la timeline
    },
    0 // Commence dès le début de la timeline
  );

  // Animation de l'ovale lui-même (si des transformations internes sont nécessaires)
  ovalScrollTl.to(
    ovalBackgroundRef.value,
    {
      // Selon votre exemple, .top-bubble n'a pas de transformations dynamiques via GSAP.
      // Il est statique à l'intérieur de son wrap.
      // Si vous voulez qu'il y ait des rotations ou des scales internes ici, ajoutez-les.
      ease: 'none',
      duration: 1,
    },
    0 // Commence en même temps que le wrap
  );

  // L'animation de BlackSection est SUPPRIMÉE pour qu'elle reste visible.
  // Si vous voulez la repositionner sans la faire disparaître, vous pouvez modifier ces lignes.
  // Exemple pour un simple déplacement si souhaité, sans opacité:
  // ovalScrollTl.to(
  //   firstSectionRef.value.querySelector('.first-component-conten'),
  //   {
  //     y: -50, // Déplace légèrement le contenu vers le haut, par exemple
  //     ease: 'none',
  //     duration: 0.8,
  //   },
  //   0.1
  // );
});

onUnmounted(() => {
  // Il est crucial de nettoyer les ressources GSAP ScrollTrigger lors du démontage du composant
  // pour éviter les fuites de mémoire et les comportements indésirables.
  if (ovalScrollTl) {
    ovalScrollTl.kill();
    ovalScrollTl = null;
  }
  // Si vous avez utilisé un `min-height` temporaire pour le <body>, réinitialisez-le ici.
  // `document.body.style.minHeight = '';`
});
</script>

<style scoped>
/* Styles pour la section principale du composant */


/* --- Reproduction des styles du .top-bubble-wrap --- */
.oval-background-wrap {
  width: 100%;
  max-width: 100%;
  max-height: 100%; /* Sera surchargé par .is-taller */
  position: absolute;
  inset: -10vw 0% auto; /* top: -10vw, right: 0%, bottom: auto, left: 0% */
  overflow: hidden; /* Important pour masquer les parties de l'ovale qui dépassent */

  /* Ajout pour GSAP will-change et transform-style */
  will-change: transform;
  transform-style: preserve-3d;

  /* Classe is-taller */
  /* max-height: 180%; Rend le conteneur du wrap plus grand pour la bulle */
}

/* --- Reproduction des styles du .top-bubble --- */
.oval-background {
  /* Positionnement relatif à son parent .oval-background-wrap */
  /* position: relative; Ou absolute si le wrap est son seul parent direct pour le positionnement */

  background-color: #000000; /* Couleur orange de votre exemple */
  border-radius: 80%; /* Forme ovale/circulaire */
  width: 300vw; /* Largeur trois fois la largeur du viewport */
  height: 100vw; /* Hauteur une fois et demie la largeur du viewport */

  /* margin-left: -100vw; est recréé par translate(-100vw, 0) */
  transform: translate(-100vw, 0px); /* Déplace de 100vw vers la gauche */

  /* will-change et transform-style si des animations internes à l'ovale sont prévues */
  will-change: transform;
  transform-style: preserve-3d;

  /* z-index pour s'assurer qu'il est derrière le contenu */
  z-index: 0;
}

/* Styles pour le contenu principal */

</style>

