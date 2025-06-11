<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Carrousel_Left from '@/components/About_component/Carrousel_Left.vue'
import Carrousel_Right from '@/components/About_component/Carrousel_Right.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger' // Importez ScrollTrigger

// Enregistrez les plugins
gsap.registerPlugin(SplitText, ScrollTrigger) // Enregistrez ScrollTrigger ici aussi

// Refs pour chaque bloc de texte
const boldTextRef = ref<HTMLElement | null>(null)
const regularTextRef = ref<HTMLElement | null>(null)
const conquestTextRef = ref<HTMLElement | null>(null)

// --- Animation Functions avec ScrollTrigger ---

const animateBoldTextByLines = () => {
  if (boldTextRef.value) {
    const split = new SplitText(boldTextRef.value, { type: 'lines' })
    const lines = split.lines

    // Créez une timeline pour l'animation afin de la contrôler plus facilement avec ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boldTextRef.value, // L'élément qui déclenchera l'animation
        start: 'top 80%', // Quand le haut de l'élément arrive à 80% de la fenêtre (du haut)
        // markers: true, // Décommenter pour voir les marqueurs ScrollTrigger (utile pour le débogage)
        toggleActions: 'play none none none', // play, pause, resume, reverse, restart, reset, complete, none
        // onEnter, onLeave, onEnterBack, onLeaveBack
      },
    })

    // Ajoutez l'animation à la timeline
    tl.from(lines, {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
    })
  }
}

const animateRegularTextByWords = () => {
  if (regularTextRef.value) {
    const split = new SplitText(regularTextRef.value, { type: 'words' })
    const words = split.words

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: regularTextRef.value,
        start: 'top 80%', // Déclenchement similaire au premier bloc
        // markers: true,
        toggleActions: 'play none none none',
      },
    })

    tl.from(words, {
      opacity: 0,
      y: 10,
      stagger: 0.02,
      duration: 0.6,
      ease: 'power2.out',
    })
  }
}

const animateConquestTextByChars = () => {
  if (conquestTextRef.value) {
    const split = new SplitText(conquestTextRef.value, { type: 'chars' })
    const chars = split.chars

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: conquestTextRef.value,
        start: 'top 80%', // Déclenchement similaire
        // markers: true,
        toggleActions: 'play none none none',
      },
    })

    tl.from(chars, {
      opacity: 0,
      y: -10,
      stagger: 0.01,
      duration: 0.4,
      ease: 'power1.out',
    })
  }
}

// --- Lifecycle Hooks ---

onMounted(() => {
  // Appelez les fonctions d'animation au montage du composant
  animateBoldTextByLines()
  animateRegularTextByWords()
  animateConquestTextByChars()
})

onBeforeUnmount(() => {
  // IMPORTANT : Tue tous les ScrollTriggers créés pour éviter les fuites de mémoire.
  // C'est plus efficace que de tuer les tweens individuels liés aux refs ici.
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

  // Si vous aviez des tweens qui n'étaient PAS contrôlés par ScrollTrigger,
  // vous devriez toujours les tuer explicitement.
  // Exemple (si vous aviez une animation non liée au scroll) :
  // gsap.killTweensOf(someOtherElementRef.value);
})
</script>

<template>
  <div class="relative flex items-center justify-center w-screen mt-24">
    <!-- Images en arrière-plan gauche et droite -->
    <img
      src="@/assets/images/BOAT_DRAW.png"
      width="751"
      alt=""
      class="absolute left-0 z-10 mb-16 -translate-x-1/2 mr-72 opacity-30"
    />
    <img
      src="@/assets/images/BOAT_DRAW.png"
      width="751"
      alt=""
      class="absolute right-0 z-10 mb-16 translate-x-1/2 opacity-30"
    />

    <!-- Contenu principal -->
    <div class="relative z-20 folder">
      <div class="tab"></div>
      <div class="body">
        <div class="flex flex-col text-white h-ful">
          <div class="flex-1">
            <div class="flex flex-col items-center justify-center gap-16">
              <div class="flex justify-between mt-11 gap-9">
                <div ref="boldTextRef" class="flex-col flex text-[20px] font-Opensans font-bold">
                  <p>
                    L’équipage créatif d’un navire enraciné dans <br />
                    l’Afrique moderne
                  </p>
                  <p>
                    Black Pearl Entertainment est bien plus <br />
                    qu’une agence de communication 360°.
                  </p>
                </div>
                <div ref="regularTextRef" class="flex-col flex text-[15px] font-Opensans">
                  <p>
                    C’est un bateau pirate créatif, où stratégie, storytelling et technologie
                    s’unissent <br />
                    pour conquérir les marchés avec audace. Nés d’une légende ivoirienne, nous
                    <br />
                    transformons chaque campagne en jeu de pouvoir.
                  </p>
                  <p>
                    un terrain d’expérimentation où les marques deviennent des héros <br />
                    culturels. Nous croyons au pouvoir de la culture, à la magie de l’expérience et
                    à
                    <br />
                    l’art de surprendre.
                  </p>
                </div>
              </div>
              <div>
                <p
                  ref="conquestTextRef"
                  class="text-6xl text-center uppercase font-HouseOfCardsW03Bold"
                >
                  Ce n’est pas une campagne. C’est une <br />
                  <span class="text-[rgba(251,221,120,1)]">conquête</span>.
                </p>
              </div>
            </div>
          </div>

          <div class="flex-1 mb">
            <Carrousel_Left />
            <Carrousel_Right />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.folder {
  position: relative;
  width: 90vw; /* Largeur relative à la fenêtre */
  max-width: 1434px; /* Largeur max desktop */
  height: 100vh; /* Hauteur relative à la fenêtre */
  max-height: 960px; /* Hauteur max desktop */
  margin: 0 auto;
}

/* Tablettes (largeur entre 600px et 900px) */
@media screen and (max-width: 900px) and (min-width: 600px) {
  .folder {
    width: 80vw;
    max-width: 768px;
    height: auto; /* Hauteur automatique pour s’adapter au contenu */
    max-height: none;
  }
}

/* Mobiles (largeur inférieure à 600px) */
@media screen and (max-width: 599px) {
  .folder {
    width: 95vw;
    max-width: none;
    height: auto;
    max-height: none;
    padding: 10px; /* Pour éviter que le contenu touche les bords */
  }
}

.tab {
  position: absolute;
  top: 0;
  right: 0;
  width: 1100px;
  height: 40px;
  background: #000000;
  border-top-right-radius: 15px;
  border-top-left-radius: 8px;
  z-index: 2;
}

.body {
  position: absolute;
  top: 30px;
  width: 1434px;
  height: 730px;
  background: #000000;
  border-radius: 15px;
  z-index: 1;
}
</style>
