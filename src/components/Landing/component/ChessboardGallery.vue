<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Router
const router = useRouter();

// Interfaces
interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
}

// Data
const images = ref<GalleryImage[]>([
  { id: 1, url: new URL('@/assets/images/Vectorimg1.png', import.meta.url).href, title: 'Monument', description: 'Modern architecture with clean geometric lines' },
  { id: 2, url: new URL('@/assets/images/Vectorimg2.png', import.meta.url).href, title: 'Architecture', description: 'Contemporary building design with unique structural elements' },
  { id: 3, url: new URL('@/assets/images/Vectorimg3.png', import.meta.url).href, title: 'Minimalism', description: 'Simple yet powerful design emphasizing negative space' },
  { id: 4, url: new URL('@/assets/images/Vectorimg4.png', import.meta.url).href, title: 'Abstract', description: 'Conceptual artwork exploring form and color' },
  { id: 5, url: new URL('@/assets/images/Vectorimg5.png', import.meta.url).href, title: 'Geometry', description: 'Complex patterns formed by intersecting geometric shapes' },
  { id: 6, url: new URL('@/assets/images/Vectorimg6.png', import.meta.url).href, title: 'Stones', description: 'Natural textures and organic forms found in stone arrangements' },
  { id: 7, url: new URL('@/assets/images/Vectorimg7.png', import.meta.url).href, title: 'Glass', description: 'Light reflections and transparency in glass architecture' },
  { id: 8, url: new URL('@/assets/images/Vectorimg8.png', import.meta.url).href, title: 'Design', description: 'Innovative product design with attention to detail' },
  { id: 9, url: new URL('@/assets/images/Vectorimg9.png', import.meta.url).href, title: 'Urban', description: 'Contemporary urban architecture and cityscapes' },
  { id: 10, url: new URL('@/assets/images/Vectorimg10.png', import.meta.url).href, title: 'Reflection', description: 'Mirror-like surfaces creating stunning reflections' },
  { id: 11, url: new URL('@/assets/images/Vectorimg11.png', import.meta.url).href, title: 'Structure', description: 'Bold architectural structures against the sky' },
  { id: 12, url: new URL('@/assets/images/Vectorimg12.png', import.meta.url).href, title: 'Pattern', description: 'Repeating patterns in modern architecture' },
  { id: 13, url: new URL('@/assets/images/Vectorimg13.png', import.meta.url).href, title: 'Modern', description: 'Clean lines of modern architectural design' },
  { id: 14, url: new URL('@/assets/images/Vectorimg14.png', import.meta.url).href, title: 'Perspective', description: 'Unique architectural perspectives and angles' },
]);


const isVisible = ref(false);

// Methods
const openImage = (id: number) => {
  router.push({ name: 'ImageViewer', params: { id: id.toString() } });
};

// Lifecycle
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    });
  }, { threshold: 0.2 });

  const element = document.querySelector('.chessboard-gallery');
  if (element) {
    observer.observe(element);
  }
});
</script>

<template>
  <section class=" h-screen w-screen flex justify-center items-center overflow-hidden">
    <div class="chessboard-container">
      <div class="chessboard-gallery" :class="{ 'visible': isVisible }">
        <template v-for="index in 28" :key="index">
          <div 
            class="gallery-item"
            :class="{ 
              'black': (Math.floor((index-1) / 7) + ((index-1) % 7)) % 2 === 0,
              'white': (Math.floor((index-1) / 7) + ((index-1) % 7)) % 2 === 1
            }"
            @click="openImage(index <= images.length ? index : 1)"
          >
            <div class="image-container" v-if="(Math.floor((index-1) / 7) + ((index-1) % 7)) % 2 === 0">
              <img 
                :src="images[(index-1) % images.length].url" 
                :alt="images[(index-1) % images.length].title" 
                width="100px"
              />
              <div class="image-overlay">
                <h3>{{ images[(index-1) % images.length].title }}</h3>
                <p>{{ images[(index-1) % images.length].description }}</p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section */
/* .gallery-section {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
} */

/* Container */
/* .chessboard-container { */
  /* width: 1200px;
  height: 1200px; */
  /* padding: 20px; */
/* } */

/* Gallery */
.chessboard-gallery {
  /* width: 100%;
  height: 100%; */
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0;
  opacity: 1;
  transform: translateY(50px);
  transition: opacity 1s ease, transform 1s ease;
}

.chessboard-gallery.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Item */
.gallery-item {
  aspect-ratio: 1;
  position: relative;
  overflow: hidden;
}

.gallery-item.white {
  background-color: black;
}

.gallery-item.black {
  background-color: black;
}

/* Image */
.image-container {
  /* width: 100%;
  height: 100%; */
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.image-container img {
  /* width: 100%;
  height: 100%; */
  object-fit: cover;
  transition: transform 0.5s ease;
}

/* Overlay */
.image-overlay {
  position: absolute;
  top: 0;
  /* left: 0;
  width: 100%;
  height: 100%; */
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 1rem;
  text-align: center;
}

.image-container:hover img {
  transform: scale(1.1);
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.image-overlay h3 {
  color: var(--primary-white);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.image-overlay p {
  color: var(--primary-white);
  font-size: 0.9rem;
  margin: 0;
}

/* Responsive */
@media (max-width: 1200px) {
  .chessboard-container {
    /* width: 100%; */
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
