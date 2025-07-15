<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'



const hover = ref(false)


// import des images d'arrière plan
import imageOne from '@/assets/images/image 10first.jpg'
import imageTwo from '@/assets/images/image 11seconde.png'
import imageThree from '@/assets/images/image 9three.png'
// import NavBar_Component from '@/components/NavBar/NavBar_Component.vue'

// ----------------------------------------------------------------------------------------
const totalPages = 4
const currentPage = ref(1)

function setPage(page: number) {
  if (page !== currentPage.value && page >= 1 && page <= totalPages) {
    currentPage.value = page
    // ... charger le contenu de la page ici si besoin
  }
}
// ----------------------------------------------------------------------------------------

// Router
const router = useRouter()

const links = [
  { path: '/celeste', name: 'ImageView_CELESTE' },
  { path: '/sourire', name: 'ImageView_SOURIRE' },
  { path: '/laity', name: 'ImageView_LAITY' },
  { path: '/mediano', name: 'ImageView_MEDIANO' },
  { path: '/ajrental', name: 'ImageView_AJRENTAL' },
  { path: '/alyssa', name: 'ImageView_ALYSSA' },
  { path: '/laity', name: 'ImageView_LAITY' },
  { path: '/maman', name: 'ImageView_MAMAN' },
  { path: '/image', name: 'ImageViewer' },
  { path: '/laity', name: 'ImageView_LAITY' },
  { path: '/cleo', name: 'ImageView_CLEO' },
  { path: '/darci', name: 'ImageView_DARCI' },
  { path: '/celeste', name: 'ImageView_CELESTE' },
  { path: '/ajrental', name: 'ImageView_AJRENTAL' },
]

const openImage = (id: number | null) => {
  if (id !== null) {
    // Trouver l'index de l'image dans le tableau images
    const imageIndex = images.value.findIndex((img) => img.id === id)
    if (imageIndex !== -1 && links[imageIndex]) {
      // Naviguer vers la route correspondante dans links
      router.push({ name: links[imageIndex].name })
    }
  }
}

// Interfaces
interface GalleryImage {
  id: number
  url: string
  title: string
  description: string
}

// Data
const images = ref<GalleryImage[]>([
  {
    id: 1,
    url: new URL('@/assets/images/Vectorimg1.png', import.meta.url).href,
    title: 'Laity',
    description: 'Modern architecture with clean geometric lines',
    // ImageView_AJRENTAL
  },
  {
    id: 2,
    url: new URL('@/assets/images/Vectorimg2.png', import.meta.url).href,
    title: "SOURIRE D'ENFANT",
    description: 'Contemporary building design with unique structural elements',
    // ImageView_CELESTE
  },
  {
    id: 3,
    url: new URL('@/assets/images/Vectorimg3.png', import.meta.url).href,
    title: 'AJ RENTAL CAR',
    description: 'Simple yet powerful design emphasizing negative space',
    // ImageView_CLEO
  },
  {
    id: 4,
    url: new URL('@/assets/images/Vectorimg4.png', import.meta.url).href,
    title: 'ALYSSA',
    description: 'Conceptual artwork exploring form and color',
    // ImageView_MAMAN
  },
  {
    id: 5,
    url: new URL('@/assets/images/Vectorimg5.png', import.meta.url).href,
    title: 'CELESTE',
    description: 'Complex patterns formed by intersecting geometric shapes',
    // ImageView_MEDIANO
  },
  {
    id: 6,
    url: new URL('@/assets/images/Vectorimg6.png', import.meta.url).href,
    title: 'CLEO',
    description: 'Natural textures and organic forms found in stone arrangements',
    // ImageView_SOURIRE
  },
  {
    id: 7,
    url: new URL('@/assets/images/Vectorimg7.png', import.meta.url).href,
    title: 'MAMAN',
    description: 'Light reflections and transparency in glass architecture',
    // ImageView_LAITY
  },
  {
    id: 8,
    url: new URL('@/assets/images/Vectorimg8.png', import.meta.url).href,
    title: 'MEDIANO',
    description: 'Innovative product design with attention to detail',
    // ImageView_ALYSSA
  },
  {
    id: 9,
    url: new URL('@/assets/images/Vectorimg9.png', import.meta.url).href,
    title: 'Urban',
    description: 'Contemporary urban architecture and cityscapes',
    // ImageView_URBAN
  },
  {
    id: 10,
    url: new URL('@/assets/images/Vectorimg10.png', import.meta.url).href,
    title: 'Reflection',
    description: 'Mirror-like surfaces creating stunning reflections',
    // ImageView_REFLECTION
  },
  {
    id: 11,
    url: new URL('@/assets/images/Vectorimg11.png', import.meta.url).href,
    title: 'Structure',
    description: 'Bold architectural structures against the sky',
    // ImageView_STRUCTURE
  },
  {
    id: 12,
    url: new URL('@/assets/images/Vectorimg12.png', import.meta.url).href,
    title: 'Pattern',
    description: 'Repeating patterns in modern architecture',
    // ImageView_PATTERN
  },
  {
    id: 13,
    url: new URL('@/assets/images/Vectorimg13.png', import.meta.url).href,
    title: 'Modern',
    description: 'Clean lines of modern architectural design',
    // ImageView_MODERN
  },
  {
    id: 14,
    url: new URL('@/assets/images/Vectorimg14.png', import.meta.url).href,
    title: 'Perspective',
    description: 'Unique architectural perspectives and angles',
    // ImageView_PERSPECTIVE
  },
])

// Data pour la pagination2
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const images2 = ref<GalleryImage[]>([
  {
    id: 1,
    url: new URL('@/assets/images/Vectorimg1.png', import.meta.url).href,
    title: 'Laity',
    description: 'Modern architecture with clean geometric lines',
    // ImageView_AJRENTAL
  },
  {
    id: 2,
    url: new URL('@/assets/images/Vectorimg2.png', import.meta.url).href,
    title: "SOURIRE D'ENFANT",
    description: 'Contemporary building design with unique structural elements',
    // ImageView_CELESTE
  },
  {
    id: 3,
    url: new URL('@/assets/images/Vectorimg3.png', import.meta.url).href,
    title: 'AJ RENTAL CAR',
    description: 'Simple yet powerful design emphasizing negative space',
    // ImageView_CLEO
  },
  {
    id: 4,
    url: new URL('@/assets/images/Vectorimg4.png', import.meta.url).href,
    title: 'ALYSSA',
    description: 'Conceptual artwork exploring form and color',
    // ImageView_MAMAN
  },
  {
    id: 5,
    url: new URL('@/assets/images/Vectorimg5.png', import.meta.url).href,
    title: 'CELESTE',
    description: 'Complex patterns formed by intersecting geometric shapes',
    // ImageView_MEDIANO
  },
  {
    id: 6,
    url: new URL('@/assets/images/Vectorimg6.png', import.meta.url).href,
    title: 'CLEO',
    description: 'Natural textures and organic forms found in stone arrangements',
    // ImageView_SOURIRE
  },
  {
    id: 7,
    url: new URL('@/assets/images/Vectorimg7.png', import.meta.url).href,
    title: 'MAMAN',
    description: 'Light reflections and transparency in glass architecture',
    // ImageView_LAITY
  },
  {
    id: 8,
    url: new URL('@/assets/images/Vectorimg8.png', import.meta.url).href,
    title: 'MEDIANO',
    description: 'Innovative product design with attention to detail',
    // ImageView_ALYSSA
  },
  {
    id: 9,
    url: new URL('@/assets/images/Vectorimg9.png', import.meta.url).href,
    title: 'Urban',
    description: 'Contemporary urban architecture and cityscapes',
    // ImageView_URBAN
  },
  {
    id: 10,
    url: new URL('@/assets/images/Vectorimg10.png', import.meta.url).href,
    title: 'Reflection',
    description: 'Mirror-like surfaces creating stunning reflections',
    // ImageView_REFLECTION
  },
  {
    id: 11,
    url: new URL('@/assets/images/Vectorimg11.png', import.meta.url).href,
    title: 'Structure',
    description: 'Bold architectural structures against the sky',
    // ImageView_STRUCTURE
  },
  {
    id: 12,
    url: new URL('@/assets/images/Vectorimg12.png', import.meta.url).href,
    title: 'Pattern',
    description: 'Repeating patterns in modern architecture',
    // ImageView_PATTERN
  },
  {
    id: 13,
    url: new URL('@/assets/images/Vectorimg13.png', import.meta.url).href,
    title: 'Modern',
    description: 'Clean lines of modern architectural design',
    // ImageView_MODERN
  },
  {
    id: 14,
    url: new URL('@/assets/images/Vectorimg14.png', import.meta.url).href,
    title: 'Perspective',
    description: 'Unique architectural perspectives and angles',
    // ImageView_PERSPECTIVE
  },
])
// Data pour la pagination3
const images3 = ref<GalleryImage[]>([
  {
    id: 1,
    url: new URL('@/assets/images/Vectorimg1.png', import.meta.url).href,
    title: 'Laity',
    description: 'Modern architecture with clean geometric lines',
    // ImageView_AJRENTAL
  },
  {
    id: 2,
    url: new URL('@/assets/images/Vectorimg2.png', import.meta.url).href,
    title: "SOURIRE D'ENFANT",
    description: 'Contemporary building design with unique structural elements',
    // ImageView_CELESTE
  },
  {
    id: 3,
    url: new URL('@/assets/images/Vectorimg3.png', import.meta.url).href,
    title: 'AJ RENTAL CAR',
    description: 'Simple yet powerful design emphasizing negative space',
    // ImageView_CLEO
  },
  {
    id: 4,
    url: new URL('@/assets/images/Vectorimg4.png', import.meta.url).href,
    title: 'ALYSSA',
    description: 'Conceptual artwork exploring form and color',
    // ImageView_MAMAN
  },
  {
    id: 5,
    url: new URL('@/assets/images/Vectorimg5.png', import.meta.url).href,
    title: 'CELESTE',
    description: 'Complex patterns formed by intersecting geometric shapes',
    // ImageView_MEDIANO
  },
  {
    id: 6,
    url: new URL('@/assets/images/Vectorimg6.png', import.meta.url).href,
    title: 'CLEO',
    description: 'Natural textures and organic forms found in stone arrangements',
    // ImageView_SOURIRE
  },
  {
    id: 7,
    url: new URL('@/assets/images/Vectorimg7.png', import.meta.url).href,
    title: 'MAMAN',
    description: 'Light reflections and transparency in glass architecture',
    // ImageView_LAITY
  },
  {
    id: 8,
    url: new URL('@/assets/images/Vectorimg8.png', import.meta.url).href,
    title: 'MEDIANO',
    description: 'Innovative product design with attention to detail',
    // ImageView_ALYSSA
  },
  {
    id: 9,
    url: new URL('@/assets/images/Vectorimg9.png', import.meta.url).href,
    title: 'Urban',
    description: 'Contemporary urban architecture and cityscapes',
    // ImageView_URBAN
  },
  {
    id: 10,
    url: new URL('@/assets/images/Vectorimg10.png', import.meta.url).href,
    title: 'Reflection',
    description: 'Mirror-like surfaces creating stunning reflections',
    // ImageView_REFLECTION
  },
  {
    id: 11,
    url: new URL('@/assets/images/Vectorimg11.png', import.meta.url).href,
    title: 'Structure',
    description: 'Bold architectural structures against the sky',
    // ImageView_STRUCTURE
  },
  {
    id: 12,
    url: new URL('@/assets/images/Vectorimg12.png', import.meta.url).href,
    title: 'Pattern',
    description: 'Repeating patterns in modern architecture',
    // ImageView_PATTERN
  },
  {
    id: 13,
    url: new URL('@/assets/images/Vectorimg13.png', import.meta.url).href,
    title: 'Modern',
    description: 'Clean lines of modern architectural design',
    // ImageView_MODERN
  },
  {
    id: 14,
    url: new URL('@/assets/images/Vectorimg14.png', import.meta.url).href,
    title: 'Perspective',
    description: 'Unique architectural perspectives and angles',
    // ImageView_PERSPECTIVE
  },
])
// Data pour la pagination4
const images4 = ref<GalleryImage[]>([
  {
    id: 1,
    url: new URL('@/assets/images/Vectorimg1.png', import.meta.url).href,
    title: 'Laity',
    description: 'Modern architecture with clean geometric lines',
    // ImageView_AJRENTAL
  },
  {
    id: 2,
    url: new URL('@/assets/images/Vectorimg2.png', import.meta.url).href,
    title: "SOURIRE D'ENFANT",
    description: 'Contemporary building design with unique structural elements',
    // ImageView_CELESTE
  },
  {
    id: 3,
    url: new URL('@/assets/images/Vectorimg3.png', import.meta.url).href,
    title: 'AJ RENTAL CAR',
    description: 'Simple yet powerful design emphasizing negative space',
    // ImageView_CLEO
  },
  {
    id: 4,
    url: new URL('@/assets/images/Vectorimg4.png', import.meta.url).href,
    title: 'ALYSSA',
    description: 'Conceptual artwork exploring form and color',
    // ImageView_MAMAN
  },
  {
    id: 5,
    url: new URL('@/assets/images/Vectorimg5.png', import.meta.url).href,
    title: 'CELESTE',
    description: 'Complex patterns formed by intersecting geometric shapes',
    // ImageView_MEDIANO
  },
  {
    id: 6,
    url: new URL('@/assets/images/Vectorimg6.png', import.meta.url).href,
    title: 'CLEO',
    description: 'Natural textures and organic forms found in stone arrangements',
    // ImageView_SOURIRE
  },
  {
    id: 7,
    url: new URL('@/assets/images/Vectorimg7.png', import.meta.url).href,
    title: 'MAMAN',
    description: 'Light reflections and transparency in glass architecture',
    // ImageView_LAITY
  },
  {
    id: 8,
    url: new URL('@/assets/images/Vectorimg8.png', import.meta.url).href,
    title: 'MEDIANO',
    description: 'Innovative product design with attention to detail',
    // ImageView_ALYSSA
  },
  {
    id: 9,
    url: new URL('@/assets/images/Vectorimg9.png', import.meta.url).href,
    title: 'Urban',
    description: 'Contemporary urban architecture and cityscapes',
    // ImageView_URBAN
  },
  {
    id: 10,
    url: new URL('@/assets/images/Vectorimg10.png', import.meta.url).href,
    title: 'Reflection',
    description: 'Mirror-like surfaces creating stunning reflections',
    // ImageView_REFLECTION
  },
  {
    id: 11,
    url: new URL('@/assets/images/Vectorimg11.png', import.meta.url).href,
    title: 'Structure',
    description: 'Bold architectural structures against the sky',
    // ImageView_STRUCTURE
  },
  {
    id: 12,
    url: new URL('@/assets/images/Vectorimg12.png', import.meta.url).href,
    title: 'Pattern',
    description: 'Repeating patterns in modern architecture',
    // ImageView_PATTERN
  },
  {
    id: 13,
    url: new URL('@/assets/images/Vectorimg13.png', import.meta.url).href,
    title: 'Modern',
    description: 'Clean lines of modern architectural design',
    // ImageView_MODERN
  },
  {
    id: 14,
    url: new URL('@/assets/images/Vectorimg14.png', import.meta.url).href,
    title: 'Perspective',
    description: 'Unique architectural perspectives and angles',
    // ImageView_PERSPECTIVE
  },
])
// Data pour la pagination5
const images5 = ref<GalleryImage[]>([
  {
    id: 1,
    url: new URL('@/assets/images/Vectorimg1.png', import.meta.url).href,
    title: 'Laity',
    description: 'Modern architecture with clean geometric lines',
    // ImageView_AJRENTAL
  },
  {
    id: 2,
    url: new URL('@/assets/images/Vectorimg2.png', import.meta.url).href,
    title: "SOURIRE D'ENFANT",
    description: 'Contemporary building design with unique structural elements',
    // ImageView_CELESTE
  },
  {
    id: 3,
    url: new URL('@/assets/images/Vectorimg3.png', import.meta.url).href,
    title: 'AJ RENTAL CAR',
    description: 'Simple yet powerful design emphasizing negative space',
    // ImageView_CLEO
  },
  {
    id: 4,
    url: new URL('@/assets/images/Vectorimg4.png', import.meta.url).href,
    title: 'ALYSSA',
    description: 'Conceptual artwork exploring form and color',
    // ImageView_MAMAN
  },
  {
    id: 5,
    url: new URL('@/assets/images/Vectorimg5.png', import.meta.url).href,
    title: 'CELESTE',
    description: 'Complex patterns formed by intersecting geometric shapes',
    // ImageView_MEDIANO
  },
  {
    id: 6,
    url: new URL('@/assets/images/Vectorimg6.png', import.meta.url).href,
    title: 'CLEO',
    description: 'Natural textures and organic forms found in stone arrangements',
    // ImageView_SOURIRE
  },
  {
    id: 7,
    url: new URL('@/assets/images/Vectorimg7.png', import.meta.url).href,
    title: 'MAMAN',
    description: 'Light reflections and transparency in glass architecture',
    // ImageView_LAITY
  },
  {
    id: 8,
    url: new URL('@/assets/images/Vectorimg8.png', import.meta.url).href,
    title: 'MEDIANO',
    description: 'Innovative product design with attention to detail',
    // ImageView_ALYSSA
  },
  {
    id: 9,
    url: new URL('@/assets/images/Vectorimg9.png', import.meta.url).href,
    title: 'Urban',
    description: 'Contemporary urban architecture and cityscapes',
    // ImageView_URBAN
  },
  {
    id: 10,
    url: new URL('@/assets/images/Vectorimg10.png', import.meta.url).href,
    title: 'Reflection',
    description: 'Mirror-like surfaces creating stunning reflections',
    // ImageView_REFLECTION
  },
  {
    id: 11,
    url: new URL('@/assets/images/Vectorimg11.png', import.meta.url).href,
    title: 'Structure',
    description: 'Bold architectural structures against the sky',
    // ImageView_STRUCTURE
  },
  {
    id: 12,
    url: new URL('@/assets/images/Vectorimg12.png', import.meta.url).href,
    title: 'Pattern',
    description: 'Repeating patterns in modern architecture',
    // ImageView_PATTERN
  },
  {
    id: 13,
    url: new URL('@/assets/images/Vectorimg13.png', import.meta.url).href,
    title: 'Modern',
    description: 'Clean lines of modern architectural design',
    // ImageView_MODERN
  },
  {
    id: 14,
    url: new URL('@/assets/images/Vectorimg14.png', import.meta.url).href,
    title: 'Perspective',
    description: 'Unique architectural perspectives and angles',
    // ImageView_PERSPECTIVE
  },
])
// Les positions où placer les images (cases 1, 3, 5, ..., 27)
const imagePositions = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]

const isVisible = ref(false)

// const openImage = (id: number | null) => {
//   if (id) {
//     router.push({ name: 'ImageViewer', params: { id: id.toString() } })
//   }
// }

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.2 },
  )

  const element = document.querySelector('.chessboard-gallery')
  if (element) {
    observer.observe(element)
  }
})
</script>

<template>
  <section class="flex flex-col items-center justify-center overflow-hidden  mt-14 2xl:m-32">
    <section class="h-scree w-screen flex justify-center items-center relative">
      <!-- Arrière-plan -->
      <div class="absolute z-10 flex justify-between items-center">
        <div class="ml-6">
          <img :src="imageOne" alt="BG Left" class="w-1/2" />
          <img :src="imageTwo" alt="BG Middle" class="w-1/2 mb-6" />
        </div>
        <div class="flex-1 flex justify-end items-center">
          <img :src="imageThree" alt="BG Right" class="" />
        </div>
      </div>

      <!-- Échiquier -->
      <div class="chessboard-container z-10">
        <div class="chessboard-gallery" :class="{ visible: isVisible }">
          <template v-for="index in 28" :key="index">
            <div
              class="gallery-item"
              :class="{
                black: (Math.floor((index - 1) / 7) + ((index - 1) % 7)) % 2 === 0,
                white: (Math.floor((index - 1) / 7) + ((index - 1) % 7)) % 2 === 1,
              }"
              @click="
                imagePositions.includes(index)
                  ? openImage(images[imagePositions.indexOf(index)].id)
                  : null
              "
            >
              <div class="image-container" v-if="imagePositions.includes(index)">
                <img
                  :src="images[imagePositions.indexOf(index)].url"
                  :alt="images[imagePositions.indexOf(index)].title"
                />
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- ------------------------------------------------------------------------------------ -->
    <nav class="flex items-center cursor-pointer justify-center space-x-8 mt-9">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="setPage(page)"
        type="button"
        :class="['view-number', page === currentPage ? 'active' : 'inactive']"
      >
        <span class="view-text">{{ page }}</span>
      </button>
      <button
        @click="setPage(currentPage < totalPages ? currentPage + 1 : currentPage)"
        :disabled="currentPage === totalPages"
        class="text-3xl font-normal text-gray-700 enabled:hover:text-black transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-black pl-2"
        aria-label="Page suivante"
      >
        <span class="inline-block align-middle"
          ><svg
            width="14"
            height="19"
            viewBox="0 0 14 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.25 0.734375C13.6297 0.734375 13.9435 1.01653 13.9932 1.38261L14 1.48438V17.9844C14 18.3986 13.6642 18.7344 13.25 18.7344C12.8703 18.7344 12.5565 18.4522 12.5068 18.0862L12.5 17.9844V1.48438C12.5 1.07017 12.8358 0.734375 13.25 0.734375ZM0.21967 0.954045C0.48594 0.687775 0.9026 0.663575 1.19621 0.881425L1.28033 0.954045L9.5303 9.20407C9.7966 9.47027 9.8208 9.88698 9.6029 10.1806L9.5303 10.2647L1.28033 18.5147C0.987441 18.8076 0.51256 18.8076 0.21967 18.5147C-0.0465998 18.2485 -0.0707997 17.8318 0.14705 17.5382L0.21967 17.4541L7.9393 9.73438L0.21967 2.01471C-0.0732198 1.72182 -0.0732198 1.24694 0.21967 0.954045Z"
              fill="#212121"
            />
          </svg>
        </span>
        <!-- chevron simple comme sur ton image -->
      </button>
    </nav>
    <!-- ------------------------------------------------------------------------------------ -->

  </section>
</template>

<style scoped>
.view-number {
  position: relative;
  width: 40px; /* ajusté pour un chiffre */
  height: 50px;
  background: #1b1b1b;
  cursor: pointer;
  user-select: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  text-align: center;
  padding-top: 14px;
  overflow: hidden;
  transform: skewX(-6deg);
  transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  color: white;
  border: none;
  outline: none;
  box-sizing: border-box;
}

.view-number::before {
  content: '';
  position: absolute;
  top: 25px;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 0;
  background: white;
  z-index: -1;
  transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transform-origin: center;
}

.view-number:hover::before,
.view-number:focus-visible::before {
  top: 0;
  height: 50px;
  padding-top: 14px;
}

.view-text {
  position: relative;
  display: inline-block;
  mix-blend-mode: difference;
  z-index: 10;
  font-size: 1.5rem;
  user-select: none;
  pointer-events: none;
  font-weight: 400;
}

/* États actif et inactif */
.view-number.active {
  font-weight: 700;
  color: black;
  background: transparent;
  transform: none;
}

.view-number.active .view-text {
  mix-blend-mode: normal;
}

/* Pour que le bouton suive le même style que ta pagination */
.view-number.inactive {
  font-weight: 100;
  color: white;
  background: #1b1b1b;
  transform: skewX(-6deg);
}


.chessboard-gallery {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0;
  opacity: 1;
  transform: translateY(50px);
  transition:
    opacity 1s ease,
    transform 1s ease;
}

.chessboard-gallery.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Item */
.gallery-item {
  aspect-ratio: 1;
  position: relative;
  overflow: visible;
}

.gallery-item.white,
.gallery-item.black {
  background-color: black;
}

/* Image */
.image-container img {
  width: 150px;
  height: 150px;
  transition:
    transform 0.5s ease,
    filter 0.5s ease;
  filter: grayscale(100%);
}

.image-container:hover img {
  transform: scale(1.1);
  filter: grayscale(0%);
}

/* Overlay */
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 1rem;
  text-align: center;
  overflow: hidden;
}

.image-container:hover img {
  transform: scale(1.1);
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.image-overlay h3 {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.image-overlay p {
  color: white;
  font-size: 0.9rem;
  margin: 0;
}

/* Responsive */
@media (max-width: 1200px) {
  .chessboard-container {
    height: auto;
    aspect-ratio: 1;
  }
}

@media (max-width: 768px) {
  .chessboard-gallery {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
  }

  .image-overlay h3 {
    font-size: 1.2rem;
  }

  .image-overlay p {
    font-size: 0.8rem;
  }
}
</style>
