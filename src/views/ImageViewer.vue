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
    url: new URL('@/assets/images/1.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,
    title: 'Allô Coca !',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud <br>  exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea ',
  },
  {
    id: 2,
    url: new URL('@/assets/images/2IMG.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,
    title: 'Architecture',
    description: 'Contemporary building design with unique structural elements',
  },
  {
    id: 3,
    url: new URL('@/assets/images/3.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,

    title: 'Minimalism',
    description: 'Simple yet powerful design emphasizing negative space',
  },
  {
    id: 4,
    url: new URL('@/assets/images/4.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,

    title: 'Abstract',
    description: 'Conceptual artwork exploring form and color',
  },
  {
    id: 5,
    url: new URL('@/assets/images/Vectorimg1.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,

    title: 'Allô Coca !',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud <br>  exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea ',
  },
  {
    id: 6,
    url: new URL('@/assets/images/Vectorimg2.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,

    title: 'Architecture',
    description: 'Contemporary building design with unique structural elements',
  },
  {
    id: 7,
    url: new URL('@/assets/images/Vectorimg3.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,

    title: 'Minimalism',
    description: 'Simple yet powerful design emphasizing negative space',
  },
  {
    id: 8,
    url: new URL('@/assets/images/Vectorimg4.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,

    title: 'Abstract',
    description: 'Conceptual artwork exploring form and color',
  },
  {
    id: 9,
    url: new URL('@/assets/images/Vectorimg5.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,

    title: 'Geometry',
    description: 'Complex patterns formed by intersecting geometric shapes',
  },
  {
    id: 10,
    url: new URL('@/assets/images/Vectorimg6.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,

    title: 'Stones',
    description: 'Natural textures and organic forms found in stone arrangements',
  },
  {
    id: 11,
    url: new URL('@/assets/images/Vectorimg7.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,

    title: 'Glass',
    description: 'Light reflections and transparency in glass architecture',
  },
  {
    id: 12,
    url: new URL('@/assets/images/Vectorimg8.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,

    title: 'Design',
    description: 'Innovative product design with attention to detail',
  },
  {
    id: 13,
    url: new URL('@/assets/images/Vectorimg9.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,

    title: 'Urban',
    description: 'Contemporary urban architecture and cityscapes',
  },
  {
    id: 14,
    url: new URL('@/assets/images/Vectorimg10.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,

    title: 'Reflection',
    description: 'Mirror-like surfaces creating stunning reflections',
  },
  {
    id: 15,
    url: new URL('@/assets/images/Vectorimg11.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,

    title: 'Structure',
    description: 'Bold architectural structures against the sky',
  },
  {
    id: 16,
    url: new URL('@/assets/images/Vectorimg12.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,

    title: 'Pattern',
    description: 'Repeating patterns in modern architecture',
  },
  {
    id: 17,
    url: new URL('@/assets/images/Vectorimg13.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,

    title: 'Modern',
    description: 'Clean lines of modern architectural design',
  },
  {
    id: 18,
    url: new URL('@/assets/images/Vectorimg14.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,

    title: 'Perspective',
    description: 'Unique architectural perspectives and angles',
  },
  {
    id: 19,
    url: new URL('@/assets/images/AFFICH.png', import.meta.url).href,
    Logo: new URL('@/assets/images/COCA.png', import.meta.url).href,

    title: 'Allô Coca !',
    description:
      'Lorem ipsum dolor sit amet, <br> consectetuer adipiscing elit, sed diam <br> nonummy nibh euismod tincidunt ut <br> laoreet dolore magna aliquam erat <br> volutpat. Ut wisi enim ad minim veniam, <br> quis nostrud <br><br> exerci tation ullamcorper suscipit<br> lobortis nisl ut aliquip ex ea',
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
  router.replace({ name: 'ImageViewer', params: { id: currentImageId.value.toString() } })
}

function selectImage(id: number) {
  currentImageId.value = id
  updateUrl()
  scrollToActiveThumbnail()
}

function goBack() {
  window.location.href = '/ches'
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
        class=" w-full bg-img-blur h-full bg-contain"
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
          <img
            :src="currentImage.url"
            :alt="currentImage.title"
            class="main-image w-[752px] h-[505px]"
          />
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
            <p class="font-poppins text-start w-[400px] m" v-html="currentImage.description"></p>
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
