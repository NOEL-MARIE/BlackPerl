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
    url: new URL('@/assets/Archive (1)/Dossier Celeste/LogoCeleste.png', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Celeste/LogoCeleste.png', import.meta.url).href,
    title: 'L’Essence Céleste',
    description:
      'Découvrez la pureté et l’innovation au cœur de Céleste, marque d’excellence reconnue pour sa qualité et son engagement envers le bien-être.',
  },
  {
    id: 2,
    url: new URL('@/assets/Archive (1)/Dossier Celeste/32426351.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Celeste/LogoCeleste.png', import.meta.url).href,
    title: 'L’Énergie Naturelle',
    description:
      'Céleste puise dans l’esprit de la nature pour offrir des produits qui revitalisent et inspirent, alliant performance et respect de l’environnement.',
  },
  {
    id: 3,
    url: new URL('@/assets/Archive (1)/Dossier Celeste/33180.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Celeste/LogoCeleste.png', import.meta.url).href,
    title: 'Design et Sophistication',
    description:
      'Une architecture visuelle moderne et raffinée : Céleste conjugue créativité et élégance pour proposer une image forte et mémorable.',
  },
  {
    id: 4,
    url: new URL('@/assets/Archive (1)/Dossier Celeste/4294993.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Celeste/LogoCeleste.png', import.meta.url).href,
    title: 'Sobriété Élégante',
    description:
      'La beauté simple et authentique caractérise Céleste, avec un design minimaliste qui met en valeur ce qui compte vraiment.',
  },
  {
    id: 5,
    url: new URL('@/assets/Archive (1)/Dossier Celeste/5165353.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Celeste/LogoCeleste.png', import.meta.url).href,
    title: 'Expression Artistique',
    description:
      'Céleste ose l’originalité avec des visuels abstraits qui capturent l’essence de la marque et stimulent l’imagination.',
  },
  {
    id: 6,
    url: new URL('@/assets/Archive (1)/Dossier Celeste/70550.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier Celeste/LogoCeleste.png', import.meta.url).href,
    title: 'Fraîcheur et Authenticité',
    description:
      'Un moment de pureté à chaque utilisation : Céleste incarne la confiance et la qualité pour ses consommateurs exigeants.',
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
  router.replace({ name: 'ImageView_CELESTE', params: { id: currentImageId.value.toString() } })
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
  <div class="h-screen">
    <!-- NAVBAR visible -->
    <header class="xl:w-screen  text-white fixed mb-44 z-10">
      <NavBar_Component class="" />
    </header>

    <!-- IMAGE VIEWER -->
    <main
      class="image-viewer w-full flex xl:h-full md:justify-center xl:gap-[400px] 2xl:gap-[900px] text-white pt-32 relative overflow-hidden"
    >
      <!-- Background flou -->
      <picture class="pointer-events-none absolute inset-0 -z-10">
        <source type="image/webp" srcset="@/assets/images/BackgroundImgViews.jpg" sizes="100vw" />
        <img
          src="@/assets/images/BackgroundImgViews.jpg"
          alt="Background flou"
          class="w-full h-full bg-img-blur absolute top-0 left-0 object-center object-cover"
          loading="lazy"
        />
      </picture>

      <!-- Colonne gauche -->
      <section
        class="left-sid flex  flex-col justify-between w-full  md:w-1/2 max-w-[752px] px-4 md:px-0 mb-8 md:mb-0"
      >
        <div class="flex justify-between">
          <button
            class="back-button mt-6 hover:cursor-pointer w-fit group inline-flex items-center gap-2 text-xl font-Opensans mb-14"
            @click="goBack"
            aria-label="Fermer la vue"
            type="button"
          >
            <svg
              class="scale-150 group-hover:-rotate-180 w-2 md:w-2.5 transition-transform duration-300"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M0.7737 0L0 0.7737L4.7263 5.5L0 10.2263L0.7737 11L5.5 6.2737L10.2263 11L11 10.2263L6.2737 5.5L11 0.7737L10.2263 0L5.5 4.7263L0.7737 0Z"
                fill="white"
              />
            </svg>
            Fermer
          </button>
          <div class="lg:hidden">
            <img
              v-if="currentImage.Logo"
              :src="currentImage.Logo"
              :alt="currentImage.title + ' logo'"
              class="current-logo w-[82px] h-[82px] mt-6 object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <img
            :src="currentImage.url"
            :alt="currentImage.title"
            class="main-image w-[572px] md:w-[550px] max-w-full 2xl:w-[752px] h-auto 2xl:max-h-[752px] object-cover"
            loading="lazy"
          />
        </div>

        <img
          v-if="currentImage.Logo"
          :src="currentImage.Logo"
          :alt="currentImage.title + ' logo'"
          class="md:w-44 xl:h-[100px] 2xl:w-[232px] hidden lg:flex 2xl:h-[282px] mt-6 object-contain"
          loading="lazy"
        />
      </section>

      <!-- Colonne droite -->
      <aside
        class="right-sid flex text-center  lg:gap-80 flex-col 2xl:gap-48 2xl:mt-[400px] mt-28 items-end w-full md:w-1/2 max-w-[600px] pr-4 md:pr-0 space-y-10"
      >
        <div class="text-right xl:mb-48">
          <h2
            class="text-4xl font-bold mb-6 leading-tight text-center md:text-normal"
            aria-live="polite"
          >
            {{ currentImage.title }}
          </h2>
          <p
            class="font-poppins text-xl leading-relaxed text-center md:text-normal"
            v-html="currentImage.description"
          ></p>
        </div>

        <!-- Navigation miniature -->
        <div class="navigation-section fix">
          <div class="thumbnails-carousel w-[556px] 2xl:w-[956px]" ref="thumbnailsContainer">
            <div
              class="thumbnail no-scrollbar mr-3"
              :class="{ active: image.id === currentImageId }"
              v-for="(image, index) in thumbnails"
              :key="image.id"
              @click="selectImage(image.id)"
            >
              <div class="mb-2">[{{ String(index + 1).padStart(2, '0') }}]</div>

              <img
                :src="image.url"
                :alt="image.description"
                class="w-[130px] h-[130px] 2xl:w-[230px] 2xl:h-[230px] hover:scale-105 duration-200"
              />
            </div>
          </div>
          <div class="gap-2 justify-end mt-4n hidden md:flex">
            <ChevronLeft @click="scrollThumbnails('left')" class="cursor-pointer" />
            <ChevronRight @click="scrollThumbnails('right')" class="cursor-pointer" />
          </div>
        </div>
      </aside>
    </main>
  </div>
</template>

<style scoped>
/* === Scrollbar custom & hide === */
.no-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}
.no-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

/* Image viewer container */
.image-viewer {
  position: relative;
  overflow: hidden;
  z-index: 0;
  padding-bottom: 1rem;
}

/* Background flou */
.bg-img-blur {
  object-fit: cover;
  filter: blur(10px);
}

/* Left side (image + logo + back button) */
.left-side {
  padding-right: 1rem;
}

/* Logo */

/* Right side (title + description + carousel) */
.right-side h2 {
  font-size: 2.5rem;
  color: var(--accent-gold);
  margin-bottom: 1rem;
}

.right-side p {
  font-family: 'Poppins', sans-serif;
  font-size: 1.125rem;
  color: white;
  margin-top: 0.5rem;
}

/* Thumbnails carousel */
.thumbnails-carousel {
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
}

.thumbnail {
  cursor: pointer;
  flex-shrink: 0;
}
.thumbnail img {
  object-fit: cover;
}

/* Scroll buttons */

/* Accessibility focus outline */
.thumbnail:focus-visible {
  outline: 2px solid var(--accent-gold);
  outline-offset: 2px;
}

/* Responsive */
@media (max-width: 1280px) {
  .image-viewer {
    flex-direction: column;
    padding-top: 4rem;
  }

  .left-side,
  .right-side {
    width: 100% !important;
    max-width: none !important;
    padding: 0 1rem;
  }

  .right-side h2 {
    font-size: 2rem;
  }

  .thumbnails-carousel {
    width: 100% !important;
  }
}

@media (max-width: 768px) {
  .back-button {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .thumbnail img {
    width: 80px !important;
    height: 80px !important;
  }

  .thumbnail .text-center1 {
    font-size: 0.75rem !important;
  }

  .right-side h2 {
    font-size: 1.6rem;
  }

  .right-side p {
    font-size: 1rem;
  }
}
</style>
