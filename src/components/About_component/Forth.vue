<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="team-section">
    <h2 class="section-title" ref="sectionTitleRef">Notre équipe</h2>
    <Dot_Gamme />

    <div class="stats flex items-center justify-center">
      <div>
        <p class="stat-title" ref="clientTitleRef">Clients</p>
        <div class="stat-item">
          <p class="stat-number" ref="clientNumberRef">0</p>
          <p class="stat-desc" ref="clientDescRef">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
          </p>
        </div>
      </div>
      <div>
        <p class="stat-title text-[#F8D065]" ref="referencesTitleRef">Références</p>
        <div class="stat-item highlight">
          <p class="stat-number" ref="referencesNumberRef">0%</p>
          <p class="stat-desc" ref="referencesDescRef">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
          </p>
        </div>
      </div>
      <div>
        <p class="stat-title" ref="ratioTitleRef">Ration / Homme:Femme</p>
        <div class="stat-item">
          <p class="stat-number" ref="ratioNumberRef">0:0</p>
          <p class="stat-desc" ref="ratioDescRef">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
          </p>
        </div>
      </div>
      <div>
        <p class="stat-title" ref="projectsTitleRef">Projets réalisés</p>
        <div class="stat-item">
          <p class="stat-number" ref="projectsNumberRef">0</p>
          <p class="stat-desc" ref="projectsDescRef">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Dot_Gamme from '@/components/Profile_Squad.vue'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger' // N'oubliez pas d'importer ScrollTrigger !

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// Références pour les éléments de la section "Notre équipe"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const teamSectionRef = ref<HTMLElement | null>(null) // Référence à la section principale
const sectionTitleRef = ref<HTMLElement | null>(null)

// Références pour les éléments "Clients"
const clientTitleRef = ref<HTMLElement | null>(null)
const clientNumberRef = ref<HTMLElement | null>(null)
const clientDescRef = ref<HTMLElement | null>(null)

// Références pour les éléments "Références"
const referencesTitleRef = ref<HTMLElement | null>(null)
const referencesNumberRef = ref<HTMLElement | null>(null)
const referencesDescRef = ref<HTMLElement | null>(null)

// Références pour les éléments "Ratio Homme:Femme"
const ratioTitleRef = ref<HTMLElement | null>(null)
const ratioNumberRef = ref<HTMLElement | null>(null)
const ratioDescRef = ref<HTMLElement | null>(null)

// Références pour les éléments "Projets réalisés"
const projectsTitleRef = ref<HTMLElement | null>(null)
const projectsNumberRef = ref<HTMLElement | null>(null)
const projectsDescRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // Obtenez une référence à la section principale pour le ScrollTrigger
  // On utilise querySelector ici car la `ref` sur la section elle-même est "teamSectionRef"
  // mais la détection du ScrollTrigger peut être faite sur la classe.
  const sectionTrigger = document.querySelector('.team-section')

  if (!sectionTrigger) {
    console.warn("La section '.team-section' n'a pas été trouvée. Les animations ne seront pas déclenchées.")
    return
  }

  // Animation pour le titre de la section
  gsap.from(sectionTitleRef.value, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionTrigger,
      start: 'top 80%', // Commence quand le haut de la section est à 80% du viewport
      // markers: true, // Décommentez pour le débogage visuel
      toggleActions: 'play none none none', // Joue l'animation une fois
    },
  })

  // Animation pour le composant Dot_Gamme
  // IMPORTANT : Assurez-vous que Dot_Gamme a bien la classe 'dot-gamme-component'
  // ou changez le sélecteur si c'est un autre élément que vous voulez animer.
  gsap.from('.dot-gamme-component', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2, // Petit délai pour qu'il apparaisse après le titre
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionTrigger,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })

  // Animation pour les titres des statistiques
  gsap.from([clientTitleRef.value, referencesTitleRef.value, ratioTitleRef.value, projectsTitleRef.value], {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.15, // Délai entre chaque titre
    scrollTrigger: {
      trigger: sectionTrigger,
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
  })

  // Animation pour les descriptions des statistiques
  gsap.from([clientDescRef.value, referencesDescRef.value, ratioDescRef.value, projectsDescRef.value], {
    y: 20,
    opacity: 0,
    duration: 0.7,
    ease: 'power1.out',
    stagger: 0.1, // Délai entre chaque description
    scrollTrigger: {
      trigger: sectionTrigger,
      start: 'top 70%',
      toggleActions: 'play none none none',
    },
  })

  // --- Animations de comptage pour les chiffres ---

  // Clients (250+)
  if (clientNumberRef.value) {
    gsap.to(clientNumberRef.value, {
      textContent: 250, // Anime la propriété textContent vers 250
      duration: 2,
      ease: 'power1.out',
      snap: { textContent: 1 }, // S'assure que le nombre est toujours un entier
      onUpdate: () => {
        // Ajoute le '+' à la fin après chaque mise à jour du nombre
        if (clientNumberRef.value) {
          clientNumberRef.value.textContent = Math.round(Number(clientNumberRef.value.textContent)) + '+'
        }
      },
      scrollTrigger: {
        trigger: clientNumberRef.value, // Le trigger est l'élément du chiffre lui-même
        start: 'top 85%', // L'animation démarre quand le chiffre est visible à 85% du viewport
        toggleActions: 'play none none none',
      },
    })
  }

  // Références (55%)
  if (referencesNumberRef.value) {
    gsap.to(referencesNumberRef.value, {
      textContent: 55, // Anime la propriété textContent vers 55
      duration: 2,
      ease: 'power1.out',
      snap: { textContent: 1 },
      onUpdate: () => {
        // Ajoute le '%' à la fin
        if (referencesNumberRef.value) {
          referencesNumberRef.value.textContent = Math.round(Number(referencesNumberRef.value.textContent)) + '%'
        }
      },
      scrollTrigger: {
        trigger: referencesNumberRef.value,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }

  // Ratio Homme:Femme (56:44)
  if (ratioNumberRef.value) {
    const ratio = { value1: 0, value2: 0 } // Objet pour animer les deux valeurs séparément
    gsap.to(ratio, {
      value1: 56,
      value2: 44,
      duration: 2,
      ease: 'power1.out',
      onUpdate: () => {
        // Concatène les deux valeurs arrondies avec ':'
        if (ratioNumberRef.value) {
          ratioNumberRef.value.textContent = `${Math.round(ratio.value1)}:${Math.round(ratio.value2)}`
        }
      },
      scrollTrigger: {
        trigger: ratioNumberRef.value,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }

  // Projets réalisés (380)
  if (projectsNumberRef.value) {
    gsap.to(projectsNumberRef.value, {
      textContent: 380, // Anime la propriété textContent vers 380
      duration: 2,
      ease: 'power1.out',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: projectsNumberRef.value,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }
})
</script>

<style scoped>
.team-section {
  margin: 0 auto;
  padding: 40px 20px 80px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #111;
}

.section-title {
  text-align: center;
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 40px;
}

/* Statistiques */
.stats {
  max-width: 1200px;
  margin: 48px auto 0; /* centre horizontalement et ajoute un espace en haut */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  margin-top: 48px;
  padding: 0 10px;
}

.stat-item {
  border-top: 1px solid #ddd;
  padding-bottom: 20px;
}

.stat-item.highlight {
  border-color: #f5c046;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  color: #111;
  /* L'opacité est gérée par GSAP au début, pas besoin de la cacher ici */
}

.stat-item.highlight .stat-number {
  color: #f5c046;
}

.stat-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0 0 12px 0;
  color: #222;
}

.stat-desc {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
  margin: 0;
}

/* Responsive */
@media (max-width: 900px) {
  .stats {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .stats {
    grid-template-columns: 1fr;
  }
}
</style>
