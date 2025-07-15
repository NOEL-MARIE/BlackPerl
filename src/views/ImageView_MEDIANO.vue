<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import NavBar_Component from '@/components/NavBar/NavBar_Component.vue'

const props = defineProps<{ id: string }>()
const router = useRouter()

interface Image {
  id: number
  url: string
  title: string
  description?: string
  Logo?: string
}

const allImages = ref<Image[]>([
  {
    id: 1,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/007754.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Accueil chaleureux',
    description:
      'Mediano vous accueille dans un environnement pensé pour votre confort et votre bien-être, avec une équipe dédiée à vos soins.',
  },
  {
    id: 2,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/008843.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Infrastructures modernes',
    description: 'Une architecture contemporaine offrant des espaces innovants pour des soins de qualité et adaptés à chaque patient.',
  },
  {
    id: 3,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/77-000087.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Simplicité et efficacité',
    description: 'Une organisation fluide et accessible pour faciliter votre parcours médical avec rapidité et simplicité.',
  },
  {
    id: 4,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/80098.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Approche personnalisée',
    description: 'Chaque patient bénéficie d’une prise en charge adaptée, attentive et humaine pour un suivi complet.',
  },
  {
    id: 5,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/86665.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Proximité avec les patients',
    description:
      "Mediano s'engage à rester proche de vous, assurant un suivi régulier et une écoute attentive à chaque étape de votre santé.",
  },
  {
    id: 6,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/889977.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Technologies de pointe',
    description: 'Des équipements modernes pour garantir des diagnostics précis et des traitements innovants.',
  },
  {
    id: 7,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/MEDIANO4.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Espace d’accueil convivial',
    description: 'Un cadre apaisant favorisant le bien-être des patients et de leurs proches au sein de Mediano.',
  },
  {
    id: 8,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/MEDIANO2.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Un accompagnement complet',
    description: 'Médecins, infirmiers et spécialistes travaillent ensemble pour un suivi global et coordonné.',
  },
  {
    id: 9,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/MEDIANO.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Conception harmonieuse',
    description: 'Un design architectural qui allie fonctionnalité et esthétique pour un environnement sain et accueillant.',
  },
  {
    id: 10,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/MEDIANO9.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Espaces de soins adaptés',
    description: 'Des salles modernes et confortables pour garantir la meilleure qualité des traitements et interventions.',
  },
  {
    id: 11,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/MEDIANO8.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Lumière et transparence',
    description: "Des espaces baignés de lumière naturelle, favorisant sérénité et récupération.",
  },
  {
    id: 12,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/MEDIANO7.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Design fonctionnel',
    description: 'Chaque détail pensé pour faciliter la circulation et le travail des équipes médicales.',
  },
  {
    id: 13,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/MEDIANO6.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Environnement urbain',
    description: 'Une implantation stratégique au cœur de la ville pour une accessibilité optimale.',
  },
  {
    id: 14,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/MEDIANO5.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Reflets et transparences',
    description: 'Des effets de lumière soigneusement travaillés pour une ambiance sereine.',
  },
  {
    id: 15,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/MEDIANO4.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Structures audacieuses',
    description: 'Une architecture innovante qui symbolise le dynamisme et l’excellence des soins.',
  },
  {
    id: 16,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/MEDIANO3.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Motifs répétitifs',
    description: 'Des éléments architecturaux qui réunissent esthétique et fonctionnalité au service des patients.',
  },
  {
    id: 17,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/MEDIANO2.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Modernité affirmée',
    description: 'Une vision tournée vers l’avenir avec des installations à la pointe de la technologie.',
  },
  {
    id: 18,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/MEDIANO.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Perspectives uniques',
    description: 'Une architecture qui invite à la réflexion et au bien-être par des angles de vue innovants.',
  },
  {
    id: 19,
    url: new URL('@/assets/Archive (1)/Dossier Mediano/MEDIANO1.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Mediano/Logo mediano.png', import.meta.url).href,
    title: 'Une équipe dédiée',
    description:
      'Mediano rassemble des professionnels passionnés engagés pour votre santé et votre proximité quotidienne.',
  },
])


const currentImageId = ref(parseInt(props.id, 10))
const currentImage = computed(
  () => allImages.value.find((img) => img.id === currentImageId.value) || allImages.value[0],
)
const thumbnails = computed(() => allImages.value.filter((img) => img.id !== currentImageId.value))

const thumbnailsContainer = ref<HTMLElement | null>(null)

function scrollThumbnails(direction: 'left' | 'right') {
  if (!thumbnailsContainer.value) return
  const scrollAmount = 136
  if (direction === 'left') {
    thumbnailsContainer.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  } else {
    thumbnailsContainer.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
}

function updateUrl() {
  router.replace({ name: 'ImageView_MEDIANO', params: { id: currentImageId.value.toString() } })
}

function selectImage(id: number) {
  currentImageId.value = id
  updateUrl()
  scrollToActiveThumbnail()
}

function goBack() {
  router.push({ name: 'ChessboardGallery' })
}

function scrollToActiveThumbnail() {
  nextTick(() => {
    if (!thumbnailsContainer.value) return
    const activeThumb = thumbnailsContainer.value.querySelector('.thumbnail.active') as HTMLElement
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  })
}
</script>

<template>
  <div>
    <!-- NAVBAR visible -->
    <header class="w-screen text-white fixed mb-44 z-10">
      <NavBar_Component class="bg-transparent" />
    </header>
    <!-- IMAGE VIEWER -->
    <div class="image-viewer w-full flex h-screen text-white pt-32 relative overflow-hidden">
      <!-- Fond en <img> flou -->
      <picture>
        <source type="image/webp" srcset="@/assets/images/BackgroundImgViews.jpg" sizes="100vw" />
        <img
          src="@/assets/images/BackgroundImgViews.jpg"
          srcset="@/assets/images/BackgroundImgViews.jpg"
          alt="GN Loader"
          class="w-full h-full bg-img-blur absolute top-0 left-0 object-center object-cover"
          loading="lazy"
        />
      </picture>
      <img
        src="@/assets/images/BackgroundImgViews.jpg"
        alt="Background"
        class="w-full bg-img-blur h-full bg-contain"
        aria-hidden="true"
      />
      <div class="main-conten flex justify-between w-full gap-8 mt-9 relative z-10">
        <!-- Colonne gauche -->
        <div class="left-side flex flex-col ml-40 justify-evenly w-1/2">
          <button class="back-button mt-6 hover:cursor-pointer w-fit group" @click="goBack">
            <span class="cursor-pointer gap-4 text-xl font-Opensans flex items-center mb-14">
              <svg
                width="11"
                height="11"
                class="scale-150 group-hover:-rotate-180 duration-300"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.7737 0L0 0.7737L4.7263 5.5L0 10.2263L0.7737 11L5.5 6.2737L10.2263 11L11 10.2263L6.2737 5.5L11 0.7737L10.2263 0L5.5 4.7263L0.7737 0Z"
                  fill="white"
                />
              </svg>
              Fermer
            </span>
          </button>
          <div>
            <img
              :src="currentImage.url"
              :alt="currentImage.title"
              class="main-image 2xl:w-[752px] 2xl:h-[752px] h-[599px] w-[572px] object-contain"
            />
          </div>

          <img
            class="current-titl w-[182px] h-[82px]"
            :src="currentImage.Logo"
            :alt="currentImage.description"
          />
        </div>

        <!-- Colonne droite -->
        <div class="right-side mr-40 gap-28 flex flex-col items-end space-y-4 justify-end w-1/2">
          <div class="flex flex-col items-end mr-14 gap-20">
            <h2 class="text-4xl text-start m-44 font-bold w-[220px]">{{ currentImage.title }}</h2>
            <p class="font-poppins text-start w-[400px] m" v-html="currentImage.description"></p>
          </div>

          <div class="navigation-section fix">
            <div class="thumbnails-carousel w-[556px] " ref="thumbnailsContainer">
              <div
                class="thumbnail no-scrollbar mr-3"
                :class="{ active: image.id === currentImageId }"
                v-for="(image, index) in thumbnails"
                :key="image.id"
                @click="selectImage(image.id)"
              >
                <div class="mb-2">[{{ String(index+1).padStart(2, '0') }}]</div>

                <img
                  :src="image.url"
                  :alt="image.description"
                  class="w-[130px] h-[130px] hover:scale-105 duration-200"
                />
              </div>
            </div>
            <div class="flex gap-2 justify-end mt-4">
              <ChevronLeft @click="scrollThumbnails('left')" class="cursor-pointer" />
              <ChevronRight @click="scrollThumbnails('right')" class="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE et Edge */
}

.no-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.image-viewer {
  position: relative;
  overflow: hidden;
  z-index: 0;
  padding: 2rem;
}
.bg-img-blur {
  position: absolute;
  inset: 0;

  object-fit: cover;
  filter: blur(10px);
  z-index: 0;
}
.main-content {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 10;
}

.current-title {
  font-size: 1.5rem;
  color: var(--accent-gold);
  margin-top: auto;
}
.right-side h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--accent-gold);
}
.thumbnails-carousel {
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE et Edge */
}
.thumbnail {
  cursor: pointer;
  flex-shrink: 0;
}
.thumbnail.active {
  outline: 2px solid var(--accent-gold);
}
</style>
