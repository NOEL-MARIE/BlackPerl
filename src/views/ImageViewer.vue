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
}

const allImages = ref<Image[]>([
  {
    id: 1,
    url: new URL('@/assets/images/Vectorimg1.png', import.meta.url).href,
    title: 'Monument',
    description: 'Modern architecture with clean geometric lines',
  },
  {
    id: 2,
    url: new URL('@/assets/images/Vectorimg2.png', import.meta.url).href,
    title: 'Architecture',
    description: 'Contemporary building design with unique structural elements',
  },
  {
    id: 3,
    url: new URL('@/assets/images/Vectorimg3.png', import.meta.url).href,
    title: 'Minimalism',
    description: 'Simple yet powerful design emphasizing negative space',
  },
  {
    id: 4,
    url: new URL('@/assets/images/Vectorimg4.png', import.meta.url).href,
    title: 'Abstract',
    description: 'Conceptual artwork exploring form and color',
  },
  {
    id: 5,
    url: new URL('@/assets/images/Vectorimg5.png', import.meta.url).href,
    title: 'Geometry',
    description: 'Complex patterns formed by intersecting geometric shapes',
  },
  {
    id: 6,
    url: new URL('@/assets/images/Vectorimg6.png', import.meta.url).href,
    title: 'Stones',
    description: 'Natural textures and organic forms found in stone arrangements',
  },
  {
    id: 7,
    url: new URL('@/assets/images/Vectorimg7.png', import.meta.url).href,
    title: 'Glass',
    description: 'Light reflections and transparency in glass architecture',
  },
  {
    id: 8,
    url: new URL('@/assets/images/Vectorimg8.png', import.meta.url).href,
    title: 'Design',
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
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  direction === 'left'
    ? thumbnailsContainer.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    : thumbnailsContainer.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
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
  router.push({ name: 'Home' })
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
  <div class="">
    <!-- NAVBAR visible -->
    <header class="w-full  fixed mb-44  z-10">
      <NavBar_Component class="bg-transparent" />
    </header>

    <!-- IMAGE VIEWER -->
    <div class="image-viewer  flex h-screen text-white pt-32">
      <div class="main-content">
        <!-- Colonne gauche -->
        <div class="left-side flex flex-col ml-40 justify-around w-1/2">
          <div class="back-button" @click="goBack"><span>x</span> Fermer</div>
          <img
            :src="currentImage.url"
            :alt="currentImage.title"
            class="main-image w-[752px] h-[505px] "
          />
          <div class="current-title">{{ currentImage.title }}</div>
        </div>

        <!-- Colonne droite -->
        <div class="right-sid mr-40 flex flex-col items-center space-y-48 justify-end w-1/2">
          <div class="flex flex-col items-center justify-center text-center">
            <h2>{{ currentImage.title }}</h2>
            <p>{{ currentImage.description }}</p>
          </div>

          <div class="navigation-section">
            <div class="thumbnails-carousel" ref="thumbnailsContainer">
              <div
                class="thumbnail mr-3"
                :class="{ active: image.id === currentImageId }"
                v-for="(image, index) in thumbnails"
                :key="image.id"
                @click="selectImage(image.id)"
              >
                <div class="mb-2">[{{ String(index).padStart(2, '0') }}]</div>
                <img :src="image.url" :alt="image.title" class="w-[100px] h-[130px]" />
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
.image-viewer {
  position: relative;
  overflow: hidden;
  z-index: 0;
  padding: 2rem;
}

.image-viewer::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('@/assets/images/BackgroundImgViews.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(15px);
  z-index: -1;
}

.main-image {
  object-fit: contain;
  margin-bottom: 1rem;
}

.main-content {
  display: flex;
  justify-content: space-between;
  gap: 4rem;
}

.back-button {
  font-size: 1.2rem;
  cursor: pointer;
  margin-bottom: 1rem;
  color: var(--primary-white);
}

.back-button:hover {
  color: var(--accent-gold);
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

.right-side p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.navigation-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.thumbnails-carousel {
  display: flex;
  overflow-x: auto;
}

.thumbnail {
  cursor: pointer;
  flex-shrink: 0;
}

.thumbnail.active {
  outline: 2px solid var(--accent-gold);
}
</style>

