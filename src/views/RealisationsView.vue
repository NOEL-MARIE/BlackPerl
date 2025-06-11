<template>
  <div class="container" ref="containerElement">
    <div id="ring" ref="ringElement">
      <div v-for="i in imageCount" :key="i" class="img"></div>
    </div>
  </div>
  <div id="dragger" ref="draggerElement"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

// Enregistre les plugins GSAP
gsap.registerPlugin(Draggable);

// Références pour les éléments du DOM
const containerElement = ref<HTMLElement | null>(null);
const ringElement = ref<HTMLElement | null>(null);
const draggerElement = ref<HTMLElement | null>(null);

// Nombre d'images dans l'anneau
const imageCount = 20;

// Variable pour stocker la position X initiale pendant le glissement
let xPos = 0;
let draggableInstance: Draggable | null = null; // Stocke l'instance Draggable pour le nettoyage

// Fonction pour calculer la position de l'arrière-plan pour l'effet de parallaxe
function getBgPos(i: number): string {
  // `gsap.getProperty(ringElement.value, 'rotationY')` obtient la rotation actuelle de l'anneau.
  // Les "nombres magiques" (0, 360, 180, 18, 400) sont spécifiques à l'effet de parallaxe original.
  // -180 décale la rotation pour centrer la parallaxe, -i*18 aligne chaque image en fonction de sa position.
  // Ajustement potentiel : arrondir la rotationY pour une meilleure cohérence entre navigateurs
  const currentRotationY = gsap.getProperty(ringElement.value, 'rotationY') as number;
  // console.log(`RotationY pour image ${i}:`, currentRotationY); // Utile pour le débogage dans la console Firefox

  return `${(gsap.utils.wrap(0, 160, currentRotationY - 80 - i * 18) / 160 * 200)}px 0px`;
}

// Fonction de configuration pour les animations GSAP et Draggable
function setupGSAPAnimations() {
  if (!ringElement.value || !draggerElement.value || !containerElement.value) {
    console.error("Un ou plusieurs éléments DOM requis ne sont pas disponibles.");
    return;
  }

  const images = gsap.utils.toArray<HTMLElement>('.img', ringElement.value);

  // Initialise la timeline GSAP pour définir les propriétés et animer
  gsap.timeline()
    .set(draggerElement.value, { opacity: 0 }) // Rend la couche de glissement invisible initialement
    .set(ringElement.value, { rotationY: 180 }) // Définit la rotationY initiale pour un saut de parallaxe hors écran
    .set(images, { // Applique les rotations de transformation à chaque image
      rotateY: (i) => i * -18, // Distribue les images autour de l'anneau
      transformOrigin: '50% 50% 1000px', // Définit le point de pivot pour la rotation
      z: -1000, // Déplace les images vers l'arrière dans l'espace Z pour créer de la profondeur
      backgroundImage: (i) => `url(https://placehold.co/700x300/F0F0F0/000000?text=Img%20${i + 1})`, // Images d'espace réservé
      backgroundPosition: (i) => getBgPos(i), // Applique la position d'arrière-plan initiale
      backfaceVisibility: 'hidden' // Cache l'arrière-face pour éviter le scintillement
    })
    .from(images, { // Anime les images en vue
      duration: 1.5,
      y: 200,
      opacity: 0,
      stagger: 0.1, // Anime en décalé pour chaque image
      ease: 'expo'
    });

  // Crée l'instance Draggable
  draggableInstance = Draggable.create(draggerElement.value, {
    type: 'rotation', // Les glissements affectent la rotation
    inertia: true, // Ajoute de l'inertie pour une sensation naturelle
    snap: {
      rotation: gsap.utils.snap(360 / imageCount) // S'aligne sur l'angle d'image le plus proche
    },
    onDragStart: (e) => {
      // Obtient le clientX initial pour les événements tactiles
      xPos = Math.round((e.touches ? e.touches[0].clientX : e.clientX) as number);
    },
    onDrag: (e) => {
      // Met à jour rotationY en fonction du mouvement de glissement
      const currentClientX = Math.round((e.touches ? e.touches[0].clientX : e.clientX) as number);
      gsap.to(ringElement.value, {
        rotationY: `+=${((currentClientX + xPos) % 360)}`, // Rotation relative basée sur le delta de glissement
        onUpdate: () => {
          // Met à jour la position de l'arrière-plan de chaque image pendant le glissement pour la parallaxe
          gsap.set(images, { backgroundPosition: (i) => getBgPos(i) });
        }
      });
      xPos = currentClientX; // Met à jour xPos pour le prochain événement de glissement
    },
    onDragEnd: () => {
      // Réinitialise la position du dragger pour éviter les sauts visuels
      gsap.set(draggerElement.value, { x: 0, y: 0 });
    }
  })[0]; // Draggable.create renvoie un tableau, nous avons besoin de la première instance
}

// Hooks de cycle de vie
onMounted(() => {
  setupGSAPAnimations();
});

onUnmounted(() => {
  // Tue l'instance Draggable et les tweens GSAP au démontage du composant pour éviter les fuites de mémoire
  if (draggableInstance) {
    draggableInstance.kill();
  }
  gsap.killTweensOf(ringElement.value);
  gsap.killTweensOf('.img');
});
</script>

<style scoped>
/* Styles de base de votre CSS */
html,
body {
  overflow: hidden;
  background: #ff0101;
  margin: 0;
  padding: 0;
  height: 50vh; /* Assure une hauteur de la fenêtre complète */
  width: 50vw; /* Assure une largeur de la fenêtre complète */
}

/* Propriétés communes pour les transformations 3D */
.container,
#dragger,
#ring,
.img {
  transform-style: preserve-3d;
  user-select: none;
}

div {
  position: absolute;
}

.container {
  perspective: 4000px; /* La perspective est très importante pour l'effet 3D */
  width: 300px;
  height: 300px;
  left: 50%;
  top: 50%;
  transform: translate(50%, 50%); /* Centre le conteneur */
  max-width: 90vw;
  max-height: 90vh;
  aspect-ratio: 1 / 1; /* Maintient le rapport d'aspect */
}

#ring {
  width: 100%;
  height: 100%;
}

.img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
}

#dragger {
  width: 50vw; /* Le dragger couvre toute la fenêtre pour faciliter le glissement */
  height: 100vh;
  left: 0;
  top: 0;
  cursor: grab;
}
</style>
