<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="team-section text-[#111] px-4 py-12 max-w-7xl mx-auto">
    <h2 class="text-center text-3xl sm:text-4xl font-semibold mb-10" ref="sectionTitleRef">Notre équipe</h2>

    <Dot_Gamme class="dot-gamme-component mb-12" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <p class="text-lg font-semibold mb-2" ref="clientTitleRef">Clients</p>
        <div class="border-t border-gray-300 pt-4">
          <p class="text-4xl font-bold text-[#111]" ref="clientNumberRef">0</p>
          <p class="text-sm text-[#555] leading-snug mt-2" ref="clientDescRef">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
          </p>
        </div>
      </div>

      <div>
        <p class="text-lg font-semibold text-[#F8D065] mb-2" ref="referencesTitleRef">Références</p>
        <div class="border-t border-[#F5C046] pt-4">
          <p class="text-4xl font-bold text-[#F5C046]" ref="referencesNumberRef">0%</p>
          <p class="text-sm text-[#555] leading-snug mt-2" ref="referencesDescRef">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
          </p>
        </div>
      </div>

      <div>
        <p class="text-lg font-semibold mb-2" ref="ratioTitleRef">Ratio / Homme:Femme</p>
        <div class="border-t border-gray-300 pt-4">
          <p class="text-4xl font-bold text-[#111]" ref="ratioNumberRef">0:0</p>
          <p class="text-sm text-[#555] leading-snug mt-2" ref="ratioDescRef">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
          </p>
        </div>
      </div>

      <div>
        <p class="text-lg font-semibold mb-2" ref="projectsTitleRef">Projets réalisés</p>
        <div class="border-t border-gray-300 pt-4">
          <p class="text-4xl font-bold text-[#111]" ref="projectsNumberRef">0</p>
          <p class="text-sm text-[#555] leading-snug mt-2" ref="projectsDescRef">
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
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionTitleRef = ref<HTMLElement | null>(null)

const clientTitleRef = ref<HTMLElement | null>(null)
const clientNumberRef = ref<HTMLElement | null>(null)
const clientDescRef = ref<HTMLElement | null>(null)

const referencesTitleRef = ref<HTMLElement | null>(null)
const referencesNumberRef = ref<HTMLElement | null>(null)
const referencesDescRef = ref<HTMLElement | null>(null)

const ratioTitleRef = ref<HTMLElement | null>(null)
const ratioNumberRef = ref<HTMLElement | null>(null)
const ratioDescRef = ref<HTMLElement | null>(null)

const projectsTitleRef = ref<HTMLElement | null>(null)
const projectsNumberRef = ref<HTMLElement | null>(null)
const projectsDescRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const sectionTrigger = document.querySelector('.team-section')

  gsap.from(sectionTitleRef.value, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionTrigger,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })

  gsap.from('.dot-gamme-component', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionTrigger,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })

  gsap.from(
    [clientTitleRef.value, referencesTitleRef.value, ratioTitleRef.value, projectsTitleRef.value],
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: sectionTrigger,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    }
  )

  gsap.from(
    [clientDescRef.value, referencesDescRef.value, ratioDescRef.value, projectsDescRef.value],
    {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: 'power1.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionTrigger,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    }
  )

  if (clientNumberRef.value) {
    gsap.to(clientNumberRef.value, {
      textContent: 250,
      duration: 2,
      ease: 'power1.out',
      snap: { textContent: 1 },
      onUpdate: () => {
        if (clientNumberRef.value) {
          clientNumberRef.value.textContent = Math.round(
            Number(clientNumberRef.value.textContent)
          ) + '+'
        }
      },
      scrollTrigger: {
        trigger: clientNumberRef.value,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }

  if (referencesNumberRef.value) {
    gsap.to(referencesNumberRef.value, {
      textContent: 55,
      duration: 2,
      ease: 'power1.out',
      snap: { textContent: 1 },
      onUpdate: () => {
        if (referencesNumberRef.value) {
          referencesNumberRef.value.textContent = Math.round(
            Number(referencesNumberRef.value.textContent)
          ) + '%'
        }
      },
      scrollTrigger: {
        trigger: referencesNumberRef.value,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }

  if (ratioNumberRef.value) {
    const ratio = { value1: 0, value2: 0 }
    gsap.to(ratio, {
      value1: 56,
      value2: 44,
      duration: 2,
      ease: 'power1.out',
      onUpdate: () => {
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

  if (projectsNumberRef.value) {
    gsap.to(projectsNumberRef.value, {
      textContent: 380,
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
/* Aucun style nécessaire ici grâce à Tailwind */
</style>
