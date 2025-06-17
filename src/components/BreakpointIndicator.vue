<template>
  <div class="breakpoint-switcher-container ">
    <div
      :class="currentBgColor"
      class="
        fixed bottom-4 right-4 p-3  rounded-lg shadow-lg text-white font-bold text-8xl
        z-50 transition-colors duration-300 ease-in-out
        flex items-center justify-center cursor-pointer select-none
        min-w-[100px] min-h-[100px] h-12
      "
      @click="toggleBreakpointMenu"
    >
      <span >{{ currentBreakpoint }}</span>
      <span class=" opacity-75 ml-1 text-7xl">({{ currentBreakpointWidth }})</span>
      <svg
        class="ml-2 w-4 h-4 transition-transform duration-300"
        :class="{ 'rotate-180': menuOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>

    <div
      ref="menuRef"
      class="
        fixed bottom-4 right-4 z-40
        flex flex-col items-end space-y-24
        invisible opacity-0 pointer-events-none
        transition-all duration-300 ease-in-out
      "
    >
      <button
        v-for="(width, bp) in sortedBreakpoints"
        :key="bp"
        @click="simulateBreakpoint(bp, width)"
        class="
          p-2 px-4 rounded-md shadow-md text-white font-bold
          transition-colors duration-200 hover:scale-105 transform
        "
        :class="getButtonBgColor(bp)"
      >
        {{ bp }} (≥ {{ width }}px)
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import gsap from 'gsap'; // Importer GSAP

const currentBreakpoint = ref('XS');
const screenWidth = ref(window.innerWidth);
const menuOpen = ref(false);
const menuRef = ref<HTMLElement | null>(null);

// Définition des breakpoints (les mêmes que dans tailwind.config.js)
const breakpoints = {
  '2XL': 1536,
  'XL': 1280,
  'LG': 1024,
  'MD': 768,
  'SM': 640,
  'XS': 0, // Représente la base mobile
};

// Obtenez les breakpoints triés du plus grand au plus petit pour l'affichage du menu
const sortedBreakpoints = computed(() => {
  return Object.entries(breakpoints)
    .sort(([, widthA], [, widthB]) => widthB - widthA)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
});

// Fonction pour obtenir la largeur affichée dans l'indicateur
const currentBreakpointWidth = computed(() => {
  const currentBpKey = currentBreakpoint.value;
  if (currentBpKey === 'XS') {
    return `< ${breakpoints.SM}px`;
  }
  return `≥ ${breakpoints[currentBpKey]}px`;
});

// Fonction pour mettre à jour le breakpoint actuel
const updateBreakpoint = () => {
  screenWidth.value = window.innerWidth;
  if (screenWidth.value >= breakpoints['2XL']) {
    currentBreakpoint.value = '2XL';
  } else if (screenWidth.value >= breakpoints['XL']) {
    currentBreakpoint.value = 'XL';
  } else if (screenWidth.value >= breakpoints['LG']) {
    currentBreakpoint.value = 'LG';
  } else if (screenWidth.value >= breakpoints['MD']) {
    currentBreakpoint.value = 'MD';
  } else if (screenWidth.value >= breakpoints['SM']) {
    currentBreakpoint.value = 'SM';
  } else {
    currentBreakpoint.value = 'XS';
  }
};

// Computed property pour la couleur de fond de l'indicateur
const currentBgColor = computed(() => {
  return getButtonBgColor(currentBreakpoint.value);
});

// Fonction utilitaire pour obtenir la couleur du bouton en fonction du breakpoint
function getButtonBgColor(bp: string) {
  switch (bp) {
    case 'XS': return 'bg-red-500';
    case 'SM': return 'bg-orange-500';
    case 'MD': return 'bg-yellow-500';
    case 'LG': return 'bg-green-500';
    case 'XL': return 'bg-blue-500';
    case '2XL': return 'bg-indigo-500';
    default: return 'bg-gray-700';
  }
}

// --- Logique d'animation du menu avec GSAP ---
const toggleBreakpointMenu = () => {
  menuOpen.value = !menuOpen.value;
  if (menuRef.value) {
    if (menuOpen.value) {
      gsap.to(menuRef.value, {
        opacity: 1,
        y: 0,
        ease: 'power3.out',
        duration: 0.3,
        stagger: 0.05, // Stagger effect for items
        onStart: () => {
          if (menuRef.value) {
            menuRef.value.style.pointerEvents = 'auto'; // Réactiver les événements de la souris
            menuRef.value.style.visibility = 'visible'; // Rendre visible
            gsap.set(menuRef.value.children, { y: 20, opacity: 0 }); // Préparer les éléments pour l'animation stagger
          }
        },
      });
      // Animer chaque bouton individuellement
      gsap.to(menuRef.value.children, {
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        duration: 0.3,
        stagger: 0.05,
      });
    } else {
      gsap.to(menuRef.value, {
        opacity: 0,
        y: 0, // Reset y position
        ease: 'power3.in',
        duration: 0.2,
        onComplete: () => {
          if (menuRef.value) {
            menuRef.value.style.pointerEvents = 'none'; // Désactiver les événements de la souris
            menuRef.value.style.visibility = 'hidden'; // Masquer
          }
        },
      });
    }
  }
};

// --- Simulation de Changement de Breakpoint ---
const simulateBreakpoint = (bp: string, width: number) => {
  toggleBreakpointMenu(); // Ferme le menu après le clic

  // ************ IMPORTANT : LIMITATIONS DU NAVIGATEUR ************
  // La modification directe de window.innerWidth ou window.resizeTo()
  // n'est pas permise par les navigateurs pour des raisons de sécurité.
  // Nous allons simuler cela via un zoom sur le corps du document,
  // ce qui est une approche pour les tests, mais a des limites.

  const body = document.body;
  const desiredWidth = width === 0 ? 320 : width; // Pour XS, choisir une petite largeur fixe

  // Option 1: Modifier la largeur du body ou un élément wrapper (peut briser le layout)
  // body.style.width = `${desiredWidth}px`;
  // body.style.margin = '0 auto'; // Centrer pour une meilleure visibilité

  // Option 2: Utiliser le zoom (peut affecter le rendu des polices/images)
  // Calculer le facteur de zoom nécessaire pour que la largeur de la fenêtre
  // semble correspondre à la largeur du breakpoint.
  // Note: Cette méthode peut être imprécise et a des effets secondaires visuels.

  // Calcul du ratio pour le zoom
  const currentWindowWidth = window.innerWidth;
  const zoomRatio = desiredWidth / currentWindowWidth;

  // Appliquer le zoom au corps du document
  // Vous devrez peut-être ajuster pour vos besoins spécifiques
  // ou même créer une iframe pour une simulation plus isolée.
  // Pour un test simple, on peut faire un set de style pour l'exemple
  body.style.transform = `scale(${zoomRatio})`;
  body.style.transformOrigin = 'top left'; // Important pour que ça zoome depuis le coin
  body.style.width = `${100 / zoomRatio}%`; // Ajuster la largeur pour le zoom
  body.style.height = `${100 / zoomRatio}%`; // Ajuster la hauteur pour le zoom

  // Afficher un message à l'utilisateur car le redimensionnement réel n'est pas possible
  alert(
    `Simulating ${bp} breakpoint (≥ ${width}px).` +
    `\n\nPour une vraie expérience de test responsive, utilisez les outils de développement de votre navigateur (F12) et redimensionnez la fenêtre ou utilisez le mode appareil (Ctrl+Maj+M ou Cmd+Maj+M).` +
    `\n\n(Le zoom du navigateur a été ajusté. Pour revenir à la normale, rafraîchissez la page ou réinitialisez le zoom manuellement.)`
  );

  // Si vous avez des pages spécifiques pour chaque breakpoint, vous pourriez naviguer ici:
  // router.push(`/demo/${bp}`);
};

// Écouteurs d'événements
onMounted(() => {
  updateBreakpoint(); // Appel initial
  window.addEventListener('resize', updateBreakpoint);
  // Cacher le menu au chargement
  if (menuRef.value) {
    gsap.set(menuRef.value, { opacity: 0, y: 0, pointerEvents: 'none', visibility: 'hidden' });
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', updateBreakpoint);
  // Réinitialiser les styles du body pour éviter les problèmes après la navigation
  const body = document.body;
  body.style.transform = '';
  body.style.transformOrigin = '';
  body.style.width = '';
  body.style.height = '';
});
</script>

<style scoped>
/* Pas de styles spécifiques nécessaires ici, Tailwind gère tout */
.breakpoint-switcher-container {
  /* Pour s'assurer que le conteneur est au-dessus de tout et ne soit pas coupé */
  z-index: 9999;
}
</style>
