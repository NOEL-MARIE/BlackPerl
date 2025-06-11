<template>
  <section ref="firstSectionRef" class="relative w-full h-screen bg-white mt-96 first-component-section">
    <div ref="ovalBackgroundRef" class="oval-background"></div>

    <div class="relative z-10 first-component-conten">
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
const ovalBackgroundRef = ref<HTMLElement | null>(null) // Ref pour l'arrière-plan ovale/bulle

let ovalScrollTl: gsap.core.Timeline | null = null // Timeline pour l'animation de la bulle

onMounted(() => {
  if (!firstSectionRef.value || !ovalBackgroundRef.value) {
    console.warn("Les références pour l'animation de la bulle n'ont pas été trouvées. L'animation sera ignorée.");
    return;
  }

  // TRÈS IMPORTANT : Pour que ScrollTrigger fonctionne correctement, assurez-vous qu'il y a suffisamment de contenu défilable APRÈS cette section.
  // Si votre page est trop courte, l'animation n'aura pas la "distance" nécessaire pour se dérouler.
  // Pour les tests, vous pouvez ajouter temporairement ceci dans votre CSS global ou directement dans le <body> :
  // document.body.style.minHeight = '250vh'; // Rend le corps de la page défilable
  // Pensez à retirer ou à ajuster cela une fois que vous aurez plus de contenu sur votre page.

  ovalScrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: firstSectionRef.value, // Cette section sera le déclencheur de l'animation
      start: 'top top', // L'animation démarre lorsque le haut de cette section atteint le haut de la fenêtre d'affichage
      end: '+=1500', // L'animation se déroulera sur 1500 pixels de défilement (ajustez cette valeur selon vos besoins)
      scrub: true, // Lie la progression de l'animation directement au défilement de la page
      pin: true, // Épingle cette section au viewport pendant toute la durée de l'animation
      // markers: true, // Décommentez cette ligne pour voir les marqueurs de débogage de ScrollTrigger dans le navigateur
      id: "FirstComponentOvalGrow" // Un identifiant unique pour ce ScrollTrigger
    }
  });

  // Animation de l'arrière-plan ovale : il va grandir, se déplacer et pivoter
  ovalScrollTl.to(
    ovalBackgroundRef.value,
    {
      y: '-10%', // Déplace l'ovale vers le haut pour un effet de parallaxe
      scale: 1.5, // Fait grandir l'ovale à 150% de sa taille initiale (ajustez cette valeur pour plus ou moins d'agrandissement)
      rotationY: 43.5866, // Fait pivoter l'ovale de 43.5866 degrés sur l'axe Y
      ease: 'none', // Mouvement linéaire, ce qui le synchronise parfaitement avec le défilement
      duration: 1, // Durée relative au sein de la timeline du ScrollTrigger
    },
    0 // Cette animation commence dès le début de la timeline
  );

  // Remarque : Si vous souhaitez que le contenu (comme votre BlackSection) bouge ou disparaisse
  // pendant que l'ovale s'anime, vous ajouteriez des animations supplémentaires ici.
  // Par exemple :
  // ovalScrollTl.to(
  //   firstSectionRef.value.querySelector('.first-component-conten'),
  //   {
  //     y: -100, // Déplace le contenu vers le haut
  //     opacity: 0, // Rend le contenu transparent
  //     ease: 'none',
  //     duration: 0.8,
  //   },
  //   0.1 // Cette animation commencera un peu après le début de l'animation de l'ovale
  // );
});

onUnmounted(() => {
  // Il est important de tuer la timeline ScrollTrigger lorsque le composant est démonté
  // pour éviter les fuites de mémoire et les comportements inattendus.
  if (ovalScrollTl) {
    ovalScrollTl.kill();
    ovalScrollTl = null;
  }
  // Si vous avez temporairement défini le min-height du body pour les tests, pensez à le réinitialiser ici :
  // document.body.style.minHeight = '';
});
</script>

<style scoped>
.first-component-section {
  position: relative;
  /* `h-screen`, `w-full`, `overflow-hidden` sont déjà appliqués via Tailwind CSS */
}

.oval-background {
  position: absolute;
  top: 20%; /* Positionnement initial de l'ovale */
  left: 50%;
  width: 120vw; /* Taille initiale de l'ovale (plus large que le viewport) */
  height: 100vh; /* Hauteur initiale de l'ovale */
  background-color: #f32c2c; /* La couleur de votre ovale */
  border-radius: 50%; /* L'ovale commence comme un cercle */
  /* --- IMPORTANT : Assurez-vous que l'ovale est visible dès le départ et permet les transformations 3D --- */
  transform: translate(-50%, -50%) scale(1); /* Commence visible et à sa taille normale (échelle 1) */
  opacity: 1; /* Commence entièrement opaque */
  will-change: transform; /* Indique au navigateur que cette propriété va changer, pour l'optimisation */
  transform-style: preserve-3d; /* Nécessaire pour que `rotateY` fonctionne correctement */
  z-index: 0; /* Place l'ovale derrière votre contenu */
}

.first-component-content {
  position: relative;
  z-index: 1; /* Assurez-vous que votre contenu est toujours au-dessus de l'ovale */
  /* Ajoutez ici d'autres styles pour le contenu (ex: couleur du texte, centrage) */
  color: #333; /* Exemple de couleur de texte */
}
</style>
