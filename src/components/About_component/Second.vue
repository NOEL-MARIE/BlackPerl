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
        toggleActions: 'play none none none', // Joue une seule fois à l'entrée
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
  <div class="relative flex items-center justify-center w-screen mt-24">
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

    <div class="relative z-20 folder">
      <div class="tab"></div>
      <div class="body">
        <div class="flex flex-col text-white h-full">
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
                <div ref="regularTextRef" class="flex-col gap-5 flex text-[15px] font-Opensans">
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
