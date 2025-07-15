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
    url: new URL('@/assets/Archive (1)/Dossier  Sourire denfance/481974650_619283470849136_8501808114785496369_n.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier  Sourire denfance/Logo sourire denfance@2x.png', import.meta.url).href,
    title: 'Le Sourire de l’Espoir',
    description:
      'Chaque sourire d’enfant est une victoire sur la maladie. Sourire d’Enfance agit avec cœur pour offrir soin et réconfort aux tout-petits et leurs familles.',
  },
  {
    id: 2,
    url: new URL('@/assets/Archive (1)/Dossier  Sourire denfance/0085.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier  Sourire denfance/Logo sourire denfance@2x.png', import.meta.url).href,
    title: 'La Force de la Bienveillance',
    description:
      'Par des actions concrètes, Sourire d’Enfance soutient les enfants hospitalisés et accompagne les familles vers un avenir plus serein.',
  },
  {
    id: 3,
    url: new URL('@/assets/Archive (1)/Dossier  Sourire denfance/481666660_620101870767296_1453329409464028497_n.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier  Sourire denfance/Logo sourire denfance@2x.png', import.meta.url).href,
    title: 'Un Havre de Douceur',
    description: 'Dans chaque structure hospitalière soutenue, Sourire d’Enfance insuffle un environnement chaleureux et apaisant pour les tout-petits.',
  },
  {
    id: 4,
    url: new URL('@/assets/Archive (1)/Dossier  Sourire denfance/482071123_620089877435162_5397914594273603709_n.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier  Sourire denfance/Logo sourire denfance@2x.png', import.meta.url).href,
    title: 'Une Attention Particulière',
    description: 'Parce que chaque enfant mérite le meilleur, Sourire d’Enfance met l’accent sur des soins adaptés et une écoute attentive.',
  },
  {
    id: 5,
    url: new URL('@/assets/Archive (1)/Dossier  Sourire denfance/579439_n.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier  Sourire denfance/Logo sourire denfance@2x.png', import.meta.url).href,
    title: 'L’Espoir en Couleurs',
    description: 'Sourire d’Enfance apporte légèreté et joie dans les moments difficiles grâce à des initiatives artistiques et ludiques.',
  },
  {
    id: 6,
    url: new URL('@/assets/Archive (1)/Dossier  Sourire denfance/88764k.jpg', import.meta.url).href,
    Logo: new URL('@/assets/Archive (1)/Dossier  Sourire denfance/Logo sourire denfance@2x.png', import.meta.url).href,
    title: 'Ensemble pour les Enfants',
    description:
      'Chaque geste compte : grâce au soutien de ses donateurs et partenaires, Sourire d’Enfance construit un meilleur avenir pour les tout-petits malades.',
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
  router.replace({ name: 'ImageView_SOURIRE', params: { id: currentImageId.value.toString() } })
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
