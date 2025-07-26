<!-- eslint-disable vue/multi-word-component-names -->
  <!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Carrousel_Left from '@/components/About_component/Carrousel_Left.vue'
import Carrousel_Right from '@/components/About_component/Carrousel_Right.vue'
import { ref, onMounted, onBeforeUnmount, nextTick, type Ref } from 'vue' // Ajoutez nextTick
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Enregistrez les plugins
gsap.registerPlugin(SplitText, ScrollTrigger)

// Refs pour chaque bloc de texte
const boldTextRef = ref<HTMLElement | null>(null)
const regularTextRef = ref<HTMLElement | null>(null)
const conquestTextRef = ref<HTMLElement | null>(null)

// Déclarer les instances de SplitText pour pouvoir les réinitialiser/recalculer
let splitBold: SplitText | null = null
let splitRegular: SplitText | null = null
let splitConquest: SplitText | null = null

// --- Animation Functions avec ScrollTrigger ---

const animateText = (elementRef: Ref<HTMLElement | null>, type: 'lines' | 'words' | 'chars') => {
  if (elementRef.value) {
    let splitInstance: SplitText
    let animationProps: {
      opacity: number
      y: number
      stagger: number
      duration: number
      ease: string
    }

    // Gérer les instances de SplitText pour le nettoyage
    // eslint-disable-next-line vue/no-ref-as-operand
    if (elementRef === boldTextRef) {
      if (splitBold) splitBold.revert() // Réinitialiser l'ancien split si existe
      splitBold = new SplitText(elementRef.value, { type: type })
      splitInstance = splitBold
      animationProps = { opacity: 0, y: 20, stagger: 0.05, duration: 0.7, ease: 'power3.out' } // Plus rapide
    // eslint-disable-next-line vue/no-ref-as-operand
    } else if (elementRef === regularTextRef) {
      if (splitRegular) splitRegular.revert()
      splitRegular = new SplitText(elementRef.value, { type: type })
      splitInstance = splitRegular
      animationProps = { opacity: 0, y: 15, stagger: 0.008, duration: 0.5, ease: 'power2.out' } // Plus rapide
    // eslint-disable-next-line vue/no-ref-as-operand
    } else if (elementRef === conquestTextRef) {
      if (splitConquest) splitConquest.revert()
      splitConquest = new SplitText(elementRef.value, { type: type })
      splitInstance = splitConquest
      animationProps = { opacity: 0, y: 10, stagger: 0.003, duration: 0.4, ease: 'power1.out' } // Plus rapide
    } else {
      return // Sécurité
    }

    const targets = splitInstance[type] as HTMLElement[] // Les éléments créés par SplitText (lignes, mots, chars)

    gsap.from(targets, {
      ...animationProps,
      scrollTrigger: {
        trigger: elementRef.value,
        start: 'top 80%', // Déclenche plus tôt quand le haut de l'élément est à 80% du viewport
        end: 'bottom top', // Fin du déclenchement si besoin (pas toujours nécessaire pour 'play once')
        // markers: true, // Décommenter pour voir les marqueurs
        toggleActions: 'play play play play', // Joue une seule fois à l'entrée
      },
    })
  }
}

// --- Lifecycle Hooks ---

onMounted(() => {
  // nextTick assure que le DOM est complètement mis à jour AVANT que GSAP ne calcule les positions
  nextTick(() => {
    animateText(boldTextRef, 'lines')
    animateText(regularTextRef, 'words')
    animateText(conquestTextRef, 'chars')

    // Rafraîchir ScrollTrigger après le chargement initial et lors du redimensionnement
    // C'est CRUCIAL pour que les animations de scroll se recalibrent
    ScrollTrigger.refresh()

    // Ajoute un écouteur d'événement pour rafraîchir ScrollTrigger au redimensionnement
    // C'est important car SplitText et ScrollTrigger doivent recalculer leurs positions
    window.addEventListener('resize', () => ScrollTrigger.refresh());
  })
})

onBeforeUnmount(() => {
  // IMPORTANT : Tue tous les ScrollTriggers créés pour éviter les fuites de mémoire.
  // C'est la meilleure pratique.
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

  // Réinitialiser les splits pour nettoyer le DOM des éléments créés par SplitText
  if (splitBold) splitBold.revert()
  if (splitRegular) splitRegular.revert()
  if (splitConquest) splitConquest.revert()

  // Supprimer l'écouteur de redimensionnement
  window.removeEventListener('resize', () => ScrollTrigger.refresh());
})
</script>

<template>
  <div class="relative bg-black xl:h-screen flex items-center justify-center w-full  px-4">
    <!-- Décor gauche -->


    <!-- Bloc principal -->
    <div class="relative z-20 w-full max-w-[1434px]">
      <!-- TAB positionné en haut du bloc -->
      <div class="w-full flex mb-6 justify-end">
        <div class=" h-[40px] w-[90%]  md:w-[80%]  bg-black rounded-t-xl"></div>
      </div>

      <!-- Contenu principal -->
      <div class="bg-black rounded-b-2xl rounded-tl-lg  p-6 md:p-10">
        <div class="text-white flex flex-col gap-8 2xl:gap-12">
          <!-- Textes -->
          <div class="flex flex-col md:flex-row justify-between gap-8 2xl:gap-12">
            <div ref="boldTextRef" class="text-lg md:text-xl 2xl:text-3xl font-bold font-Opensans leading-snug">
              <p>
                L’équipage créatif d’un navire enraciné dans <br class="hidden sm:inline" />
                l’Afrique moderne
              </p>
              <p class="mt-4">
                Black Pearl Entertainment est bien plus <br class="hidden sm:inline 2xl:hidden" />
                qu’une agence de communication 360°.
              </p>
            </div>

            <div
              ref="regularTextRef"
              class="text-sm md:text-base font-Opensans text-gray-200 2xl:text-2xl leading-relaxed"
            >
              <p>
                C’est un bateau pirate créatif, où stratégie, storytelling et technologie
                s’unissent<br class="hidden sm:inline" />
                pour conquérir les marchés avec audace. Nés d’une légende ivoirienne,
                nous<br class="hidden sm:inline" />
                transformons chaque campagne en jeu de pouvoir.
              </p>
              <p class="mt-4">
                Un terrain d’expérimentation où les marques deviennent des héros<br class="hidden sm:inline" />
                culturels. Nous croyons au pouvoir de la culture, à la magie de l’expérience<br class="hidden sm:inline" />
                et à l’art de surprendre.
              </p>
            </div>
          </div>

          <!-- Conquête -->
          <div>
            <p
              ref="conquestTextRef"
              class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl text-center uppercase font-HouseOfCardsW03Bold"
            >
              Ce n’est pas une campagne. C’est une <br class=" hidden md:flex " />
              <span class="text-[rgba(251,221,120,1)]">conquête</span>.
            </p>
          </div>

          <!-- Carrousels -->
          <div class="flex flex-col  justify-between w-screen overflow-hidden gap-8 mt-12">
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
