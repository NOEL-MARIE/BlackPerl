<script setup lang="ts">
import { ref, computed, nextTick, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import NavBar_Component from '@/components/NavBar/NavBar_Component.vue'

interface Image {
  id: number
  url: string
  title: string
  description?: string
  Logo?: string
}

const router = useRouter()
const route = useRoute()

const allImages = ref<Image[]>([
  {
    id: 1,
    url: new URL('@/assets/Archive (1)/Dossier AJ Rental Car/Logo.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,
    title: 'Allô Coca !',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud <br>  exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea ',
  },
  {
    id: 2,
    url: new URL('@/assets/Archive (1)/Dossier AJ Rental Car/481313827_639636472149617_9061124142066252892_n.jpg', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,
    title: 'Allô Coca !',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud <br>  exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea ',
  },
  {
    id: 3,
    url: new URL('@/assets/Archive (1)/Dossier AJ Rental Car/481478124_644339968345934_8573990924828231275_n.jpg', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,
    title: 'Architecture',
    description: 'Contemporary building design with unique structural elements',
  },
  {
    id: 4,
    url: new URL('@/assets/Archive (1)/Dossier AJ Rental Car/482826549_648213684625229_7673528266563523243_n.jpg', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,
    title: 'Minimalism',
    description: 'Simple yet powerful design emphasizing negative space',
  },
  {
    id: 5,
    url: new URL('@/assets/Archive (1)/Dossier AJ Rental Car/484204025_649876124458985_1212462734216018_n.jpg', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,
    title: 'Abstract',
    description: 'Conceptual artwork exploring form and color',
  },
  {
    id: 6,
    url: new URL('@/assets/Archive (1)/Dossier AJ Rental Car/498924794_727962969983633_2232564533664147717_n.jpg', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,
    title: 'Allô Coca !',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud <br>  exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea ',
  },
  {
    id: 7,
    url: new URL('@/assets/Archive (1)/Dossier AJ Rental Car/Ramadan.jpg', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,
    title: 'Architecture',
    description: 'Contemporary building design with unique structural elements',
  },
])

// Initialiser currentImageId depuis le paramètre de route
const currentImageId = ref<number>(Number(route.params.id) || allImages.value[0].id)

// Image courante calculée
const currentImage = computed(() =>
  allImages.value.find(img => img.id === currentImageId.value) || allImages.value[0]
)

// Miniatures (exclure image courante)
const thumbnails = computed(() =>
  allImages.value.filter(img => img.id !== currentImageId.value)
)

const thumbnailsContainer = ref<HTMLElement | null>(null)

// Scroll des miniatures
function scrollThumbnails(direction: 'left' | 'right') {
  if (!thumbnailsContainer.value) return
  const scrollAmount = 136
  thumbnailsContainer.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth',
  })
}

// Met à jour l'URL sans recharger la page
function updateUrl() {
  router.replace({ name: 'ImageViewer', params: { id: currentImageId.value.toString() } })
}

// Sélectionne une image (clic miniature)
function selectImage(id: number) {
  if (id === currentImageId.value) return
  currentImageId.value = id
  updateUrl()
  scrollToActiveThumbnail()
}

// Retour à la page galerie
function goBack() {
  router.push('/ches')
}

// Scroll vers la miniature active
function scrollToActiveThumbnail() {
  nextTick(() => {
    if (!thumbnailsContainer.value) return
    const activeThumb = thumbnailsContainer.value.querySelector('.thumbnail.active') as HTMLElement
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  })
}

// Synchroniser currentImageId si l'URL change (navigation manuelle)
watch(
  () => route.params.id,
  (newId) => {
    const idNum = Number(newId)
    if (!isNaN(idNum) && idNum !== currentImageId.value) {
      currentImageId.value = idNum
      scrollToActiveThumbnail()
    }
  }
)
</script>

<template>
  <div>
    <!-- NAVBAR visible -->
    <header class="w-screen text-white fixed mb-44 z-10">
      <NavBar_Component class="bg-transparent" />
    </header>

    <!-- IMAGE VIEWER -->
    <div class="image-viewer w-full flex h-screen text-white pt-32 relative overflow-hidden">
      <!-- Fond flou -->
      <picture>
        <source type="image/webp" srcset="@/assets/images/BackgroundImgViews.jpg" sizes="100vw" />
        <img
          src="@/assets/images/BackgroundImgViews.jpg"
          alt="Background flou"
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

      <div class="main-conten flex justify-between w-full gap-80 mt-9 relative z-10">
        <!-- Colonne gauche -->
        <div class="left-side flex flex-col ml-40 justify-evenly w-1/2">
          <button class="back-button mt-6 hover:cursor-pointer" @click="goBack">
            <span class="cursor-pointer gap-4 text-xl font-Opensans flex items-center mb-14">
              <svg
                width="11"
                height="11"
                class="scale-150"
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

          <img :src="currentImage.url" :alt="currentImage.title" class="main-image w-[752px] h-[505px]" />
          <img
            class="current-titl w-[182px] h-[82px]"
            :src="currentImage.Logo"
            :alt="currentImage.description"
          />
        </div>

        <!-- Colonne droite -->
        <div class="right-side mr-40 flex flex-col items-end space-y-48 justify-end w-1/2">
          <div class="flex flex-col items-end mr-14 gap-20">
            <h2 class="text-4xl text-start m-44 font-bold w-[220px]">{{ currentImage.title }}</h2>
            <p class="font-poppins text-start w-[400px]" v-html="currentImage.description"></p>
          </div>

          <div class="navigation-section fix">
            <div class="thumbnails-carousel w-[544px]" ref="thumbnailsContainer">
              <div
                class="thumbnail no-scrollbar mr-3"
                :class="{ active: image.id === currentImageId }"
                v-for="(image, index) in thumbnails"
                :key="image.id"
                @click="selectImage(image.id)"
              >
                <div class="mb-2">[{{ String(index).padStart(2, '0') }}]</div>
                <img :src="image.url" :alt="image.description" class="w-[130px] h-[130px]" />
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
.main-image {
  object-fit: contain;
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
}
.thumbnail {
  cursor: pointer;
  flex-shrink: 0;
}
.thumbnail.active {
  outline: 2px solid var(--accent-gold);
}
</style>
