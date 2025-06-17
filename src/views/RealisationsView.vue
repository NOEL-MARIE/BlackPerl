<template>
  <div class="container h-screen w-screen " ref="containerElement">
    <div id="ring" ref="ringElement">
      <div v-for="(imga, i) in img" :key="i" class="img overflow-x-hidden">
        <img
          :src="imga"
          :alt="'Image ' + (i + 1)"
          class="object-cover w-sceen h-screen  z-1 "
          style="position: absolute; top: 0; left: 0; z-index: 1"
        />
        <div class="flex hover:cursor-pointer items-center justify-center">
          <img
            :src="PlayIcons"
            alt="Play"
            class="absolute z-10 transition-all duration-300 -translate-x-1/2 -translate-y-1/2 cursor-pointer left-1/2 mt-7 top-1/2 w-14 h-14 opacity-80 hover:opacity-100"
          />
          <img
            :src="PlayIcons"
            alt="Play"
            class="absolute z-20 transition-all duration-300 -translate-x-1/2 -translate-y-1/2 cursor-pointer left-1/2 group-hover:scale-150 mt-7 top-1/2 w-14 h-14 opacity-80 hover:opacity-25"
          />
        </div>
      </div>
    </div>
  </div>
  <div id="dragger" ref="draggerElement"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

// Importation des images
import PlayIcons from '@/assets/images/Play_Icon.png'
import Img1 from '@/assets/images/Kraoké.jpg'
import Img2 from '@/assets/images/Laity.jpg'
import Img3 from '@/assets/images/Christaline.png'
import Img4 from '@/assets/images/lait-rever.jpg'
import Img5 from '@/assets/images/josey.jpg'
import Img6 from '@/assets/images/Laity.jpg'
import Img7 from '@/assets/images/Christaline.png'
import Img8 from '@/assets/images/lait-rever.jpg'
import Img9 from '@/assets/images/josey.jpg'
import Img10 from '@/assets/images/Laity.jpg'
import Img11 from '@/assets/images/Christaline.png'
import Img12 from '@/assets/images/lait-rever.jpg'
import Img13 from '@/assets/images/josey.jpg'
import Img14 from '@/assets/images/cristaline-rever.png'

// Enregistrement des plugins GSAP
gsap.registerPlugin(Draggable)

// Références pour les éléments du DOM
const containerElement = ref<HTMLElement | null>(null)
const ringElement = ref<HTMLElement | null>(null)
const draggerElement = ref<HTMLElement | null>(null)

// Tableau des images à afficher
const img = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
]

// Nombre d'images dans l'anneau
const imageCount = img.length // Défini dynamiquement en fonction du tableau `img`

// Variable pour stocker la position X initiale pendant le glissement
let xPos = 0
let draggableInstance: Draggable | null = null // Stocke l'instance Draggable pour le nettoyage

// Variable pour gérer le défilement automatique
let autoScrollTween: gsap.core.Tween | null = null
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let isHovered = false // Ajouté pour gérer la pause au survol

// Fonction de configuration des animations GSAP et Draggable
function setupGSAPAnimations() {
  if (!ringElement.value || !draggerElement.value || !containerElement.value) {
    console.error('Un ou plusieurs éléments DOM requis ne sont pas disponibles.')
    return
  }

  const images = gsap.utils.toArray<HTMLElement>('.img', ringElement.value)

  // Calcule le rayon de l'anneau en fonction de la taille du conteneur
  // et du nombre d'images pour s'assurer qu'elles s'adaptent correctement.
  const ringRadius = 2300 // Cette valeur doit correspondre à la translation z dans transformOrigin

  // Initialisation de la timeline GSAP pour définir les propriétés et animer
  gsap
    .timeline()
    .set(draggerElement.value, { opacity: 0 }) // Rend la couche de glissement invisible initialement
    .set(ringElement.value, { rotationY: 180 }) // Définit la rotationY initiale pour un saut de parallaxe hors écran
    .set(images, {
      // Applique les rotations de transformation à chaque image
      rotateY: (i) => i * -(360 / imageCount), // Distribue les images uniformément autour de l'anneau
      transformOrigin: `50% 50% ${ringRadius}px`, // Définit le point de pivot pour la rotation
      z: -ringRadius, // Recule les images dans l'espace Z pour créer de la profondeur
      backfaceVisibility: 'hidden', // Cache la face arrière pour éviter le scintillement
    })
    .from(images, {
      // Anime les images en vue
      duration: 1.5,
      y: 200,
      opacity: 0,
      stagger: 0.1, // Anime les images en décalé
      ease: 'expo',
      onComplete: startAutoScroll, // Démarre le défilement automatique une fois l'animation d'entrée terminée
    })

  // Crée l'instance Draggable
  draggableInstance = Draggable.create(draggerElement.value, {
    type: 'rotation', // Les glissements affectent la rotation
    inertia: true, // Ajoute de l'inertie pour une sensation naturelle
    snap: {
      rotation: gsap.utils.snap(360 / imageCount), // S'aligne sur l'angle de l'image la plus proche
    },
    onDragStart: (e) => {
      stopAutoScroll() // Arrête le défilement automatique pendant le glissement
      // Obtient le clientX initial pour les événements tactiles
      xPos = Math.round((e.touches ? e.touches[0].clientX : e.clientX) as number)
    },
    onDrag: (e) => {
      // Met à jour la rotationY en fonction du mouvement de glissement
      const currentClientX = Math.round((e.touches ? e.touches[0].clientX : e.clientX) as number)
      gsap.to(ringElement.value, {
        rotationY: `-=${currentClientX - xPos}`, // Rotation relative basée sur le delta de glissement
      })
      xPos = currentClientX // Met à jour xPos pour le prochain événement de glissement
    },
    onDragEnd: () => {
      startAutoScroll() // Reprend le défilement automatique après le glissement
      // Réinitialise la position du dragger pour éviter les sauts visuels
      gsap.set(draggerElement.value, { x: 0, y: 0 })
    },
  })[0] // Draggable.create renvoie un tableau, nous avons besoin de la première instance

  // Ajoute des écouteurs d'événements pour la pause au survol
  containerElement.value.addEventListener('mouseenter', handleMouseEnter)
  containerElement.value.addEventListener('mouseleave', handleMouseLeave)
}

// Démarre le défilement automatique
function startAutoScroll() {
  if (ringElement.value && !autoScrollTween) {
    // Vérifie qu'un tween n'est pas déjà actif
    autoScrollTween = gsap.to(ringElement.value, {
      rotationY: `+=${360 * imageCount}`, // Fait tourner le carrousel de plusieurs tours complets (droite vers gauche)
      duration: imageCount * 69, // *** DURÉE AJUSTÉE POUR UN DÉFILEMENT TRÈS LENT ***
      // Par exemple, 8 secondes par image, soit 14 * 8 = 112 secondes pour un tour complet
      ease: 'none', // Défilement linéaire pour un mouvement constant
      repeat: -1, // Répète l'animation à l'infini
      overwrite: true, // S'assure que ce tween remplace toute autre animation de rotationY
    })
  }
}

// Arrête le défilement automatique
function stopAutoScroll() {
  if (autoScrollTween) {
    autoScrollTween.pause() // Met en pause le tween de défilement automatique
  }
}

// Gère le survol de la souris sur le conteneur
function handleMouseEnter() {
  isHovered = true
  stopAutoScroll()
}

// Gère la sortie de la souris du conteneur
function handleMouseLeave() {
  isHovered = false
  startAutoScroll()
}

// Hooks de cycle de vie
onMounted(() => {
  setupGSAPAnimations()
})

onUnmounted(() => {
  // Tue l'instance Draggable et les tweens GSAP lors du démontage du composant pour éviter les fuites de mémoire
  if (draggableInstance) {
    draggableInstance.kill()
  }
  if (autoScrollTween) {
    autoScrollTween.kill() // Tue le tween de défilement automatique
  }
  gsap.killTweensOf(ringElement.value)
  gsap.killTweensOf('.img')

  // Supprime les écouteurs d'événements pour le survol
  if (containerElement.value) {
    containerElement.value.removeEventListener('mouseenter', handleMouseEnter)
    containerElement.value.removeEventListener('mouseleave', handleMouseLeave)
  }
})
</script>

<style scoped>
/* Styles de base de votre CSS */
html,
body {
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.container,
#dragger,
#ring,
.img {
  transform-style: preserve-3d;
}

div {
  position: absolute;
}

.container {
  perspective: 1500px;
  width: 600px; /* Largeur de base pour le conteneur 3D */
  height: 600px; /* Hauteur de base pour le conteneur 3D */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); /* Centre le conteneur */
  /* Rend le conteneur réactif en utilisant des unités fluides, par exemple, vw/vh ou max-width */

  /* aspect-ratio: 1 / 1; Maintient le rapport d'aspect */


}


@media (min-width: 540px) {
  .container {
    perspective:500px; /* Nouvelle perspective pour SM */
  }
}

/*
 * Styles pour 'MD' (>= 768px).
 * Correspond au breakpoint 'MD' de votre configuration.
 */
@media (min-width: 768px) {
  .mon-conteneur-3d {
    perspective: 1200px; /* Nouvelle perspective pour MD */
     /* Hauteur ajustée pour MD */
  }
}

/*
 * Styles pour 'LG' (>= 1024px).
 * Correspond au breakpoint 'LG' de votre configuration.
 */
@media (min-width: 1024px) {
  .mon-conteneur-3d {
    perspective: 1500px; /* Nouvelle perspective pour LG */
    height: 500px; /* Hauteur ajustée pour LG */
  }
}

/*
 * Styles pour 'XL' (>= 1280px).
 * Correspond au breakpoint 'XL' de votre configuration.
 */
@media (min-width: 1280px) {
  .mon-conteneur-3d {
    perspective: 1800px; /* Nouvelle perspective pour XL */
    height: 550px; /* Hauteur ajustée pour XL */
  }
}

/*
 * Styles pour '2XL' (>= 1536px).
 * Correspond au breakpoint '2XL' de votre configuration.
 */
@media (min-width: 1536px) {
  .mon-conteneur-3d {
    perspective: 2000px; /* Nouvelle perspective pour 2XL */
    height: 600px; /* Hauteur ajustée pour 2XL */
  }
}



#ring {
  width: 100%;
  height: 100%;

}

.img {
  /* Ces dimensions déterminent la taille de chaque "emplacement" d'image dans l'anneau 3D */
  width: 170%; /* Ajuster si nécessaire pour la taille de l'image */
  height: 100%; /* Ajuster si nécessaire pour la taille de l'image */
  display: flex; /* Utilise flexbox pour centrer l'image dans le div */
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Cache tout débordement si les images sont légèrement plus grandes que le conteneur */
}

.img img {
  /* Propriétés de l'image pour s'adapter au div .img */
  position: relative !important; /* Annule la position absolue si nécessaire, ou la supprime si déjà absolue */
  object-fit: contain; /* S'assure que l'image s'adapte à son conteneur, en conservant le rapport d'aspect */
  width: 500%;
  height: 500%;
  overflow: hidden;

  display: block; /* Supprime l'espace supplémentaire sous l'image */
}

#dragger {
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  cursor: grab;
  overflow: hidden;
}
</style>
