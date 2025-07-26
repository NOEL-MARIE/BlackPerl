<template>
  <div class="container h-screen w-screen md:mt-32" ref="containerElement">
    <div id="ring" ref="ringElement">
      <div v-for="(imga, i) in img" :key="i" class="img">
        <img :src="imga" :alt="'Image ' + (i + 1)" class="image-content" />
        <div class="flex relative hover:cursor-pointer mt-[330px] items-center justify-center">
          <PlayButton/>
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
import PlayButton from '@/components/PlayButton.vue'
import Img1 from '@/assets/images/Kraoké.jpg'
import Img2 from '@/assets/images/Laity.jpg'
import Img3 from '@/assets/images/Christaline.png'
import Img4 from '@/assets/images/lait-rever.jpg'
import Img5 from '@/assets/images/Christaline.png'
import Img6 from '@/assets/images/Laity.jpg'
import Img7 from '@/assets/images/Christaline.png'
import Img8 from '@/assets/images/lait-rever.jpg'
import Img10 from '@/assets/images/Laity.jpg'
import Img11 from '@/assets/images/Christaline.png'
import Img12 from '@/assets/images/lait-rever.jpg'
import Img14 from '@/assets/images/cristaline-rever.png'
import celeste from '@/assets/Archive (1)/Dossier Celeste/Celeste.jpg'
import celeste1 from '@/assets/Archive (1)/Dossier Celeste/celeste 2.jpg'
import celeste2 from '@/assets/Archive (1)/Dossier Celeste/celeste 3.jpg'
import celeste3 from '@/assets/Archive (1)/Dossier Celeste/CELESTE4.jpg'
import celeste4 from '@/assets/Archive (1)/Dossier Celeste/CELESTE5.jpg'
import celeste5 from '@/assets/Archive (1)/Dossier Celeste/CELESTE6.jpg'
import celeste6 from '@/assets/Archive (1)/Dossier Celeste/CELESTE7.jpg'
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
  Img10,
  Img11,
  Img12,
  Img14,
  celeste1,
  celeste2,
  celeste,
  celeste3,
  celeste4,
  celeste5,
  celeste6,
]

// Nombre d'images dans l'anneau
const imageCount = img.length

// Variable pour stocker la position X initiale pendant le glissement
let xPos = 0
let draggableInstance: Draggable | null = null

// Variable pour gérer le défilement automatique
let autoScrollTween: gsap.core.Tween | null = null
let isHovered = false // Variable d'état pour le survol

// Fonction de configuration des animations GSAP et Draggable
function setupGSAPAnimations() {
  if (!ringElement.value || !draggerElement.value || !containerElement.value) {
    console.error('Un ou plusieurs éléments DOM requis ne sont pas disponibles.')
    return
  }

  const images = gsap.utils.toArray<HTMLElement>('.img', ringElement.value)

  // Calcule le rayon de l'anneau en fonction de la taille du conteneur
  // et du nombre d'images pour s'assurer qu'elles s'adaptent correctement.
  function calculateRingRadius(): number {
    if (containerElement.value) {
      const containerWidth = containerElement.value.offsetWidth
      let multiplier = 7 // Facteur par défaut pour les petits écrans (XS)

      // Détecte la taille d'écran "md" (768px par défaut pour Tailwind CSS)
      // Vous pouvez ajuster cette valeur de 768px si vos breakpoints Tailwind sont différents.
      if (window.matchMedia('(min-width: 728px)').matches) {
        multiplier = 4.3 // Facteur pour les écrans MD et plus grands
      }
      if (window.matchMedia('(min-width: 1536px)').matches) {
        multiplier = 7.8 // Facteur pour les écrans XL et plus grands
      }

      // Retourne le rayon calculé basé sur la largeur du conteneur et le multiplicateur approprié
      return containerWidth * multiplier
    }

    // Valeur de secours si le conteneur n'est pas encore monté.
    // Idéalement, cette valeur devrait être une estimation raisonnable pour le cas par défaut.
    // Vous pourriez la baser sur la largeur par défaut du conteneur en l'absence de JS.
    return 3900 // La valeur par défaut de secours pourrait aussi être ajustée si nécessaire.
  }
  // const ringRadius = 2300 // Cette valeur doit correspondre à la translation z dans transformOrigin
  const ringRadius = calculateRingRadius() // Cette valeur doit correspondre à la translation z dans transformOrigin

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
      duration: 2.5,
      y: 200,
      opacity: 0,
      stagger: 0.3, // Anime les images en décalé
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
      // Reprend le défilement automatique après le glissement,
      // mais seulement si la souris n'est pas en survol.
      if (!isHovered) {
        startAutoScroll()
      }
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
    // Crée le tween si n'existe pas encore
    autoScrollTween = gsap.to(ringElement.value, {
      rotationY: `+=${260 * imageCount}`, // Fait tourner le carrousel de plusieurs tours complets (droite vers gauche)
      duration: imageCount * 99, // *** DURÉE AJUSTÉE POUR UN DÉFILEMENT TRÈS LENT ***
      ease: 'none', // Défilement linéaire pour un mouvement constant
      repeat: -1, // Répète l'animation à l'infini
      overwrite: true, // S'assure que ce tween remplace toute autre animation de rotationY
    })
  } else if (autoScrollTween && autoScrollTween.paused()) {
    // Si le tween existe et est en pause, le reprendre
    autoScrollTween.play()
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

/* Styles pour les petits écrans (min-width: 540px) */
@media (min-width: 320px) {
  .container {
    perspective: 400px; /* Nouvelle perspective pour LG */
    width: 140px; /* Largeur de base pour le conteneur 3D */
    height: 180px; /* Hauteur ajustée pour LG */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); /* Centre le conteneur */
  }
  .img {
    /* Ces dimensions déterminent la taille de chaque "emplacement" d'image dans l'anneau 3D */
    width: 300px; /* Ajuster si nécessaire pour la taille de l'image */
    height: 500px; /* Ajuster si nécessaire pour la taille de l'image */
    display: flex; /* Utilise flexbox pour centrer l'image dans le div */
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Cache tout débordement si les images sont légèrement plus grandes que le conteneur */
  }

  .image-content {
    /* Propriétés de l'image pour s'adapter au div .img */
    object-fit: cover; /* Assure que l'image s'adapte, en conservant le rapport d'aspect */
    width: 150%; /* Ces valeurs semblent très grandes, assurez-vous que c'est intentionnel */
    height: 90%; /* Ces valeurs semblent très grandes, assurez-vous que c'est intentionnel */
    display: flex; /* Supprime l'espace supplémentaire sous l'image */
  }
}

@media (min-width: 640px) {
  .container {
    perspective: 1500px; /* Nouvelle perspective pour LG */
    width: 580px; /* Largeur de base pour le conteneur 3D */

    height: 500px; /* Hauteur ajustée pour LG */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); /* Centre le conteneur */
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

  .image-content {
    /* Propriétés de l'image pour s'adapter au div .img */
    object-fit: contain; /* Assure que l'image s'adapte, en conservant le rapport d'aspect */
    width: 100%; /* Ces valeurs semblent très grandes, assurez-vous que c'est intentionnel */
    height: 250%; /* Ces valeurs semblent très grandes, assurez-vous que c'est intentionnel */
    display: block; /* Supprime l'espace supplémentaire sous l'image */
  }
}

@media (min-width: 1880px) {
  .container {
    perspective: 1800px; /* Nouvelle perspective pour XL */
    height: 550px; /* Hauteur ajustée pour XL */
  }
}

@media (min-width: 1536px) {
  .container {
    perspective: 1500px; /* Nouvelle perspective pour 2XL */
    height: 1200px; /* Hauteur ajustée pour 2XL */
    /* Largeur ajustée pour 2XL */
  }

  .img {
    /* Ces dimensions déterminent la taille de chaque "emplacement" d'image dans l'anneau 3D */
    width: 190%; /* Ajuster si nécessaire pour la taille de l'image */
    height: 100%; /* Ajuster si nécessaire pour la taille de l'image */
    display: flex; /* Utilise flexbox pour centrer l'image dans le div */
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Cache tout débordement si les images sont légèrement plus grandes que le conteneur */
  }

  .image-content {
    /* Propriétés de l'image pour s'adapter au div .img */
    object-fit: conatin; /* Assure que l'image s'adapte, en conservant le rapport d'aspect */
    width: 100%; /* Ces valeurs semblent très grandes, assurez-vous que c'est intentionnel */
    height: 120%; /* Ces valeurs semblent très grandes, assurez-vous que c'est intentionnel */
    display: block; /* Supprime l'espace supplémentaire sous l'image */
  }
}

#ring {
  width: 130%;
  height: 100%;
}

/* MASQUER LE GRAGGER */
/* #dragger {
  width:50vw;
  height: 50vh;
  left: 0;
  top: 0;
  cursor: grab;
  overflow: hidden;
} */
</style>
