<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// Images de fond
import imageOne from '@/assets/images/image 10first.jpg'
import imageTwo from '@/assets/images/image 11seconde.png'
import imageThree from '@/assets/images/image 9three.png'

const totalPages = 5
const currentPage = ref(1)

// Position : cases de l'échiquier où placer les images (toujours pareil)
const imagePositions = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]

// ==== IMAGES PAR PAGE ====
const imagesPerPage = [
  // PAGE 1
  [
    {
      id: 1,
      url: new URL('@/assets/images/Vectorimg1.png', import.meta.url).href,
      title: 'Laity',
      description: 'Modern architecture with clean geometric lines',
    },
    {
      id: 2,
      url: new URL('@/assets/images/Vectorimg2.png', import.meta.url).href,
      title: "SOURIRE D'ENFANT",
      description: 'Contemporary building design with unique structural elements',
    },
    {
      id: 3,
      url: new URL('@/assets/images/Vectorimg3.png', import.meta.url).href,
      title: 'AJ RENTAL CAR',
      description: 'Simple yet powerful design emphasizing negative space',
    },
    {
      id: 4,
      url: new URL('@/assets/images/Vectorimg4.png', import.meta.url).href,
      title: 'ALYSSA',
      description: 'Conceptual artwork exploring form and color',
    },
    {
      id: 5,
      url: new URL('@/assets/images/Vectorimg5.png', import.meta.url).href,
      title: 'CELESTE',
      description: 'Complex patterns formed by intersecting geometric shapes',
    },
    {
      id: 6,
      url: new URL('@/assets/images/Vectorimg6.png', import.meta.url).href,
      title: 'CLEO',
      description: 'Natural textures and organic forms found in stone arrangements',
    },
    {
      id: 7,
      url: new URL('@/assets/images/Vectorimg7.png', import.meta.url).href,
      title: 'MAMAN',
      description: 'Light reflections and transparency in glass architecture',
    },
    {
      id: 8,
      url: new URL('@/assets/images/Vectorimg8.png', import.meta.url).href,
      title: 'MEDIANO',
      description: 'Innovative product design with attention to detail',
    },
    {
      id: 9,
      url: new URL('@/assets/images/Vectorimg9.png', import.meta.url).href,
      title: 'Urban',
      description: 'Contemporary urban architecture and cityscapes',
    },
    {
      id: 10,
      url: new URL('@/assets/images/Vectorimg10.png', import.meta.url).href,
      title: 'Reflection',
      description: 'Mirror-like surfaces creating stunning reflections',
    },
    {
      id: 11,
      url: new URL('@/assets/images/Vectorimg11.png', import.meta.url).href,
      title: 'Structure',
      description: 'Bold architectural structures against the sky',
    },
    {
      id: 12,
      url: new URL('@/assets/images/Vectorimg12.png', import.meta.url).href,
      title: 'Pattern',
      description: 'Repeating patterns in modern architecture',
    },
    {
      id: 13,
      url: new URL('@/assets/images/Vectorimg13.png', import.meta.url).href,
      title: 'Modern',
      description: 'Clean lines of modern architectural design',
    },
    {
      id: 14,
      url: new URL('@/assets/images/Vectorimg14.png', import.meta.url).href,
      title: 'Perspective',
      description: 'Unique architectural perspectives and angles',
    },
  ],
  // PAGE 2
  [
    {
      id: 1,
      url: new URL('@/assets/images/Vectorimg14.png', import.meta.url).href,
      title: 'Laity',
      description: 'Modern architecture with clean geometric lines',
    },
    {
      id: 2,
      url: new URL('@/assets/images/Vectorimg13.png', import.meta.url).href,
      title: "SOURIRE D'ENFANT",
      description: 'Contemporary building design with unique structural elements',
    },
    {
      id: 3,
      url: new URL('@/assets/images/Vectorimg12.png', import.meta.url).href,
      title: 'AJ RENTAL CAR',
      description: 'Simple yet powerful design emphasizing negative space',
    },
    {
      id: 4,
      url: new URL('@/assets/images/Vectorimg11.png', import.meta.url).href,
      title: 'ALYSSA',
      description: 'Conceptual artwork exploring form and color',
    },
    {
      id: 5,
      url: new URL('@/assets/images/Vectorimg10.png', import.meta.url).href,
      title: 'CELESTE',
      description: 'Complex patterns formed by intersecting geometric shapes',
    },
    {
      id: 6,
      url: new URL('@/assets/images/Vectorimg9.png', import.meta.url).href,
      title: 'CLEO',
      description: 'Natural textures and organic forms found in stone arrangements',
    },
    {
      id: 7,
      url: new URL('@/assets/images/Vectorimg8.png', import.meta.url).href,
      title: 'MAMAN',
      description: 'Light reflections and transparency in glass architecture',
    },
    {
      id: 8,
      url: new URL('@/assets/images/Vectorimg7.png', import.meta.url).href,
      title: 'MEDIANO',
      description: 'Innovative product design with attention to detail',
    },
    {
      id: 9,
      url: new URL('@/assets/images/Vectorimg6.png', import.meta.url).href,
      title: 'Urban',
      description: 'Contemporary urban architecture and cityscapes',
    },
    {
      id: 10,
      url: new URL('@/assets/images/Vectorimg5.png', import.meta.url).href,
      title: 'Reflection',
      description: 'Mirror-like surfaces creating stunning reflections',
    },
    {
      id: 11,
      url: new URL('@/assets/images/Vectorimg4.png', import.meta.url).href,
      title: 'Structure',
      description: 'Bold architectural structures against the sky',
    },
    {
      id: 12,
      url: new URL('@/assets/images/Vectorimg3.png', import.meta.url).href,
      title: 'Pattern',
      description: 'Repeating patterns in modern architecture',
    },
    {
      id: 13,
      url: new URL('@/assets/images/Vectorimg2.png', import.meta.url).href,
      title: 'Modern',
      description: 'Clean lines of modern architectural design',
    },
    {
      id: 14,
      url: new URL('@/assets/images/Vectorimg1.png', import.meta.url).href,
      title: 'Perspective',
      description: 'Unique architectural perspectives and angles',
    },
  ],
  // PAGE 3 (= copie du 1 pour l'exemple, tu mets ce que tu veux)
  [
    {
      id: 1,
      url: new URL('@/assets/images/Vectorimg1.png', import.meta.url).href,
      title: 'Laity',
      description: 'Modern architecture with clean geometric lines',
    },
    {
      id: 2,
      url: new URL('@/assets/images/Vectorimg2.png', import.meta.url).href,
      title: "SOURIRE D'ENFANT",
      description: 'Contemporary building design with unique structural elements',
    },
    {
      id: 3,
      url: new URL('@/assets/images/Vectorimg3.png', import.meta.url).href,
      title: 'AJ RENTAL CAR',
      description: 'Simple yet powerful design emphasizing negative space',
    },
    {
      id: 4,
      url: new URL('@/assets/images/Vectorimg4.png', import.meta.url).href,
      title: 'ALYSSA',
      description: 'Conceptual artwork exploring form and color',
    },
    {
      id: 5,
      url: new URL('@/assets/images/Vectorimg5.png', import.meta.url).href,
      title: 'CELESTE',
      description: 'Complex patterns formed by intersecting geometric shapes',
    },
    {
      id: 6,
      url: new URL('@/assets/images/Vectorimg6.png', import.meta.url).href,
      title: 'CLEO',
      description: 'Natural textures and organic forms found in stone arrangements',
    },
    {
      id: 7,
      url: new URL('@/assets/images/Vectorimg7.png', import.meta.url).href,
      title: 'MAMAN',
      description: 'Light reflections and transparency in glass architecture',
    },
    {
      id: 8,
      url: new URL('@/assets/images/Vectorimg8.png', import.meta.url).href,
      title: 'MEDIANO',
      description: 'Innovative product design with attention to detail',
    },
    {
      id: 9,
      url: new URL('@/assets/images/Vectorimg9.png', import.meta.url).href,
      title: 'Urban',
      description: 'Contemporary urban architecture and cityscapes',
    },
    {
      id: 10,
      url: new URL('@/assets/images/Vectorimg10.png', import.meta.url).href,
      title: 'Reflection',
      description: 'Mirror-like surfaces creating stunning reflections',
    },
    {
      id: 11,
      url: new URL('@/assets/images/Vectorimg11.png', import.meta.url).href,
      title: 'Structure',
      description: 'Bold architectural structures against the sky',
    },
    {
      id: 12,
      url: new URL('@/assets/images/Vectorimg12.png', import.meta.url).href,
      title: 'Pattern',
      description: 'Repeating patterns in modern architecture',
    },
    {
      id: 13,
      url: new URL('@/assets/images/Vectorimg13.png', import.meta.url).href,
      title: 'Modern',
      description: 'Clean lines of modern architectural design',
    },
    {
      id: 14,
      url: new URL('@/assets/images/Vectorimg14.png', import.meta.url).href,
      title: 'Perspective',
      description: 'Unique architectural perspectives and angles',
    },
  ],
  // PAGE 4 (exemple: tu dois mettre tes images spécifiques ici si besoin)
  [
    {
      id: 1,
      url: new URL('@/assets/images/Vectorimg14.png', import.meta.url).href,
      title: 'Laity',
      description: 'Modern architecture with clean geometric lines',
    },
    {
      id: 2,
      url: new URL('@/assets/images/Vectorimg13.png', import.meta.url).href,
      title: "SOURIRE D'ENFANT",
      description: 'Contemporary building design with unique structural elements',
    },
    {
      id: 3,
      url: new URL('@/assets/images/Vectorimg12.png', import.meta.url).href,
      title: 'AJ RENTAL CAR',
      description: 'Simple yet powerful design emphasizing negative space',
    },
    {
      id: 4,
      url: new URL('@/assets/images/Vectorimg11.png', import.meta.url).href,
      title: 'ALYSSA',
      description: 'Conceptual artwork exploring form and color',
    },
    {
      id: 5,
      url: new URL('@/assets/images/Vectorimg10.png', import.meta.url).href,
      title: 'CELESTE',
      description: 'Complex patterns formed by intersecting geometric shapes',
    },
    {
      id: 6,
      url: new URL('@/assets/images/Vectorimg9.png', import.meta.url).href,
      title: 'CLEO',
      description: 'Natural textures and organic forms found in stone arrangements',
    },
    {
      id: 7,
      url: new URL('@/assets/images/Vectorimg8.png', import.meta.url).href,
      title: 'MAMAN',
      description: 'Light reflections and transparency in glass architecture',
    },
    {
      id: 8,
      url: new URL('@/assets/images/Vectorimg7.png', import.meta.url).href,
      title: 'MEDIANO',
      description: 'Innovative product design with attention to detail',
    },
    {
      id: 9,
      url: new URL('@/assets/images/Vectorimg6.png', import.meta.url).href,
      title: 'Urban',
      description: 'Contemporary urban architecture and cityscapes',
    },
    {
      id: 10,
      url: new URL('@/assets/images/Vectorimg5.png', import.meta.url).href,
      title: 'Reflection',
      description: 'Mirror-like surfaces creating stunning reflections',
    },
    {
      id: 11,
      url: new URL('@/assets/images/Vectorimg4.png', import.meta.url).href,
      title: 'Structure',
      description: 'Bold architectural structures against the sky',
    },
    {
      id: 12,
      url: new URL('@/assets/images/Vectorimg3.png', import.meta.url).href,
      title: 'Pattern',
      description: 'Repeating patterns in modern architecture',
    },
    {
      id: 13,
      url: new URL('@/assets/images/Vectorimg2.png', import.meta.url).href,
      title: 'Modern',
      description: 'Clean lines of modern architectural design',
    },
    {
      id: 14,
      url: new URL('@/assets/images/Vectorimg1.png', import.meta.url).href,
      title: 'Perspective',
      description: 'Unique architectural perspectives and angles',
    },
  ],
  // PAGE 5 (pareil, à adapter)
  [
    {
      id: 1,
      url: new URL('@/assets/images/Vectorimg1.png', import.meta.url).href,
      title: 'Laity',
      description: 'Modern architecture with clean geometric lines',
    },
    {
      id: 2,
      url: new URL('@/assets/images/Vectorimg2.png', import.meta.url).href,
      title: "SOURIRE D'ENFANT",
      description: 'Contemporary building design with unique structural elements',
    },
    {
      id: 3,
      url: new URL('@/assets/images/Vectorimg3.png', import.meta.url).href,
      title: 'AJ RENTAL CAR',
      description: 'Simple yet powerful design emphasizing negative space',
    },
    {
      id: 4,
      url: new URL('@/assets/images/Vectorimg4.png', import.meta.url).href,
      title: 'ALYSSA',
      description: 'Conceptual artwork exploring form and color',
    },
    {
      id: 5,
      url: new URL('@/assets/images/Vectorimg5.png', import.meta.url).href,
      title: 'CELESTE',
      description: 'Complex patterns formed by intersecting geometric shapes',
    },
    {
      id: 6,
      url: new URL('@/assets/images/Vectorimg6.png', import.meta.url).href,
      title: 'CLEO',
      description: 'Natural textures and organic forms found in stone arrangements',
    },
    {
      id: 7,
      url: new URL('@/assets/images/Vectorimg7.png', import.meta.url).href,
      title: 'MAMAN',
      description: 'Light reflections and transparency in glass architecture',
    },
    {
      id: 8,
      url: new URL('@/assets/images/Vectorimg8.png', import.meta.url).href,
      title: 'MEDIANO',
      description: 'Innovative product design with attention to detail',
    },
    {
      id: 9,
      url: new URL('@/assets/images/Vectorimg9.png', import.meta.url).href,
      title: 'Urban',
      description: 'Contemporary urban architecture and cityscapes',
    },
    {
      id: 10,
      url: new URL('@/assets/images/Vectorimg10.png', import.meta.url).href,
      title: 'Reflection',
      description: 'Mirror-like surfaces creating stunning reflections',
    },
    {
      id: 11,
      url: new URL('@/assets/images/Vectorimg11.png', import.meta.url).href,
      title: 'Structure',
      description: 'Bold architectural structures against the sky',
    },
    {
      id: 12,
      url: new URL('@/assets/images/Vectorimg12.png', import.meta.url).href,
      title: 'Pattern',
      description: 'Repeating patterns in modern architecture',
    },
    {
      id: 13,
      url: new URL('@/assets/images/Vectorimg13.png', import.meta.url).href,
      title: 'Modern',
      description: 'Clean lines of modern architectural design',
    },
    {
      id: 14,
      url: new URL('@/assets/images/Vectorimg14.png', import.meta.url).href,
      title: 'Perspective',
      description: 'Unique architectural perspectives and angles',
    },
  ],
]

// ==== LIENS PAR PAGE & PAR IMAGE ====
// Adapte chaque sous-tableau (14 liens, l’ordre DOIT correspondre à l’ordre de imagesPerPage)
const linksPerPage = [
  // ------------ PAGE 1 ------------
  [
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
  ],
  // ------------ PAGE 2 ------------
  [
    { path: '/laity', name: 'ImageView_LAITY' },
    { path: '/celeste', name: 'ImageView_CELESTE' },
    { path: '/ajrental', name: 'ImageView_AJRENTAL' },
    { path: '/alyssa', name: 'ImageView_ALYSSA' },
    { path: '/celete', name: 'ImageView_CELESTE' },
    { path: '/cleo', name: 'ImageView_CLEO' },
    { path: '/maman', name: 'ImageView_MAMAN' },
    { path: '/mediano', name: 'ImageView_MEDIANO' },
    { path: '/urban', name: 'ImageView_URBAN' },
    { path: '/reflection', name: 'ImageView_REFLECTION' },
    { path: '/structure', name: 'ImageView_STRUCTURE' },
    { path: '/pattern', name: 'ImageView_PATTERN' },
    { path: '/modern', name: 'ImageView_MODERN' },
    { path: '/perspective', name: 'ImageView_PERSPECTIVE' },
  ],
  // ------------ PAGE 3 ------------
  [
    { path: '/laity', name: 'ImageView_LAITY' },
    { path: '/sourire', name: 'ImageView_SOURIRE' },
    { path: '/ajrental', name: 'ImageView_AJRENTAL' },
    { path: '/alyssa', name: 'ImageView_ALYSSA' },
    { path: '/celeste', name: 'ImageView_CELESTE' },
    { path: '/cleo', name: 'ImageView_CLEO' },
    { path: '/maman', name: 'ImageView_MAMAN' },
    { path: '/mediano', name: 'ImageView_MEDIANO' },
    { path: '/urban', name: 'ImageView_URBAN' },
    { path: '/reflection', name: 'ImageView_REFLECTION' },
    { path: '/structure', name: 'ImageView_STRUCTURE' },
    { path: '/pattern', name: 'ImageView_PATTERN' },
    { path: '/modern', name: 'ImageView_MODERN' },
    { path: '/perspective', name: 'ImageView_PERSPECTIVE' },
  ],
  // ------------ PAGE 4 ------------
  [
    { path: '/celeste', name: 'ImageView_CELESTE' },
    { path: '/sourire', name: 'ImageView_SOURIRE' },
    { path: '/laity', name: 'ImageView_LAITY' },
    { path: '/mediano', name: 'ImageView_MEDIANO' },
    { path: '/ajrental', name: 'ImageView_AJRENTAL' },
    { path: '/alyssa', name: 'ImageView_ALYSSA' },
    { path: '/cleo', name: 'ImageView_CLEO' },
    { path: '/maman', name: 'ImageView_MAMAN' },
    { path: '/urban', name: 'ImageView_URBAN' },
    { path: '/reflection', name: 'ImageView_REFLECTION' },
    { path: '/structure', name: 'ImageView_STRUCTURE' },
    { path: '/pattern', name: 'ImageView_PATTERN' },
    { path: '/modern', name: 'ImageView_MODERN' },
    { path: '/perspective', name: 'ImageView_PERSPECTIVE' },
  ],
  // ------------ PAGE 5 ------------
  [
    { path: '/celeste', name: 'ImageView_CELESTE' },
    { path: '/sourire', name: 'ImageView_SOURIRE' },
    { path: '/laity', name: 'ImageView_LAITY' },
    { path: '/mediano', name: 'ImageView_MEDIANO' },
    { path: '/ajrental', name: 'ImageView_AJRENTAL' },
    { path: '/alyssa', name: 'ImageView_ALYSSA' },
    { path: '/cleo', name: 'ImageView_CLEO' },
    { path: '/maman', name: 'ImageView_MAMAN' },
    { path: '/urban', name: 'ImageView_URBAN' },
    { path: '/reflection', name: 'ImageView_REFLECTION' },
    { path: '/structure', name: 'ImageView_STRUCTURE' },
    { path: '/pattern', name: 'ImageView_PATTERN' },
    { path: '/modern', name: 'ImageView_MODERN' },
    { path: '/perspective', name: 'ImageView_PERSPECTIVE' },
  ],
]

const images = computed(() => imagesPerPage[currentPage.value - 1])

const router = useRouter()

// La fonction de navigation (prise en compte du lien/page !)
const openImage = (imageIndex: number | null) => {
  if (imageIndex !== null && imageIndex >= 0 && imageIndex < imagePositions.length) {
    const pageLinks = linksPerPage[currentPage.value - 1]
    if (pageLinks[imageIndex]) {
      router.push({ name: pageLinks[imageIndex].name })
    }
  }
}

const setPage = (page: number) => {
  if (page !== currentPage.value && page >= 1 && page <= totalPages) {
    currentPage.value = page
  }
}

const isVisible = ref(false)
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
  if (element) observer.observe(element)
})
</script>

<template>
  <section class="flex flex-col items-center justify-center mt-14 2xl:m-32">
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

      <!-- ECHIQUIER 7x4 -->
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
                imagePositions.includes(index) ? openImage(imagePositions.indexOf(index)) : null
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
  </section>
  <nav class="flex items-center cursor-pointer justify-center space-x-8 mt-32">
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
      <span class="inline-block align-middle">
        <svg
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
    </button>
  </nav>
</template>

<style scoped>
/* ... TON CSS EXISTANT ... */
.view-number {
  position: relative;
  width: 40px;
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
.view-number.active {
  font-weight: 700;
  color: black;
  background: transparent;
  transform: none;
}
.view-number.active .view-text {
  mix-blend-mode: normal;
}
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
.gallery-item {
  aspect-ratio: 1;
  position: relative;
  overflow: visible;
}
.gallery-item.white,
.gallery-item.black {
  background-color: black;
}
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
}
</style>
