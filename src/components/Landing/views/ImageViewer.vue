<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{
  id: string;
}>();

const router = useRouter();

interface Image {
  id: number;
  url: string;
  title: string;
  description?: string;
}

const allImages = ref<Image[]>([
  { id: 1, url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg', title: 'Monument', description: 'Modern architecture with clean geometric lines' },
  { id: 2, url: 'https://images.pexels.com/photos/6577903/pexels-photo-6577903.jpeg', title: 'Architecture', description: 'Contemporary building design with unique structural elements' },
  { id: 3, url: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg', title: 'Minimalism', description: 'Simple yet powerful design emphasizing negative space' },
  { id: 4, url: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg', title: 'Abstract', description: 'Conceptual artwork exploring form and color' },
  { id: 5, url: 'https://images.pexels.com/photos/6577880/pexels-photo-6577880.jpeg', title: 'Geometry', description: 'Complex patterns formed by intersecting geometric shapes' },
  { id: 6, url: 'https://images.pexels.com/photos/5611544/pexels-photo-5611544.jpeg', title: 'Stones', description: 'Natural textures and organic forms found in stone arrangements' },
  { id: 7, url: 'https://images.pexels.com/photos/7577796/pexels-photo-7577796.jpeg', title: 'Glass', description: 'Light reflections and transparency in glass architecture' },
  { id: 8, url: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.png', title: 'Design', description: 'Innovative product design with attention to detail' }
]);

const currentImageId = ref(parseInt(props.id));

const currentImage = computed(() => {
  return allImages.value.find(img => img.id === currentImageId.value) || allImages.value[0];
});

const thumbnails = computed(() => {
  return allImages.value.filter(img => img.id !== currentImageId.value).slice(0, 4);
});

const goToNext = () => {
  const currentIndex = allImages.value.findIndex(img => img.id === currentImageId.value);
  const nextIndex = (currentIndex + 1) % allImages.value.length;
  currentImageId.value = allImages.value[nextIndex].id;
  updateUrl();
};

const goToPrev = () => {
  const currentIndex = allImages.value.findIndex(img => img.id === currentImageId.value);
  const prevIndex = (currentIndex - 1 + allImages.value.length) % allImages.value.length;
  currentImageId.value = allImages.value[prevIndex].id;
  updateUrl();
};

const selectImage = (id: number) => {
  currentImageId.value = id;
  updateUrl();
};

const updateUrl = () => {
  router.replace({ name: 'ImageViewer', params: { id: currentImageId.value.toString() } });
};

const goBack = () => {
  router.push({ name: 'Home' });
};

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') goToNext();
    else if (e.key === 'ArrowLeft') goToPrev();
    else if (e.key === 'Escape') goBack();
  });
});
</script>

<template>
  <div class="image-viewer">
    <div class="back-button" @click="goBack">
      <span>←</span> Back to Gallery
    </div>
    
    <div class="main-content">
      <div class="left-section">
        <img :src="currentImage.url" :alt="currentImage.title" class="main-image" />
      </div>
      
      <div class="right-section">
        <h2>{{ currentImage.title }}</h2>
        <p>{{ currentImage.description }}</p>
      </div>
    </div>
    
    <div class="bottom-section">
      <div class="current-title">
        {{ currentImage.title }}
      </div>
      
      <div class="navigation-section">
        <div class="thumbnails">
          <div 
            v-for="(image, index) in thumbnails" 
            :key="image.id"
            class="thumbnail"
            @click="selectImage(image.id)"
          >
            <img :src="image.url" :alt="image.title" />
            <div class="image-number">[{{ String(index).padStart(2, '0') }}]</div>
          </div>
        </div>
        
        <div class="navigation-arrows">
          <button class="nav-arrow" @click="goToPrev">←</button>
          <button class="nav-arrow" @click="goToNext">→</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-viewer {
  min-height: 100vh;
  background-color: var(--primary-black);
  color: var(--primary-white);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.back-button {
  color: var(--primary-white);
  display: inline-block;
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: 1.2rem;
}

.back-button:hover {
  color: var(--accent-gold);
}

.main-content {
  display: flex;
  gap: 4rem;
  height: 60vh;
}

.left-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.right-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}

.right-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--accent-gold);
}

.right-section p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--primary-white);
}

.bottom-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
  padding: 2rem 0;
}

.current-title {
  font-size: 1.5rem;
  color: var(--accent-gold);
}

.navigation-section {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
}

.thumbnails {
  display: flex;
  gap: 1rem;
}

.thumbnail {
  width: 120px;
  height: 80px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.thumbnail:hover {
  border-color: var(--accent-gold);
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-number {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: var(--primary-white);
  padding: 0.2rem;
  text-align: center;
  font-family: monospace;
  font-size: 0.9rem;
}

.navigation-arrows {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.nav-arrow {
  background: transparent;
  border: 2px solid var(--primary-white);
  color: var(--primary-white);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  padding: 0;
}

.nav-arrow:hover {
  border-color: var(--accent-gold);
  color: var(--accent-gold);
}

@media (max-width: 1024px) {
  .main-content {
    flex-direction: column;
    height: auto;
    gap: 2rem;
  }

  .right-section {
    padding: 0;
  }

  .bottom-section {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .navigation-section {
    align-items: center;
  }
}

@media (max-width: 768px) {
  .thumbnails {
    flex-wrap: wrap;
    justify-content: center;
  }

  .thumbnail {
    width: 100px;
    height: 70px;
  }

  .right-section h2 {
    font-size: 2rem;
  }

  .right-section p {
    font-size: 1rem;
  }

  .current-title {
    font-size: 1.2rem;
    text-align: center;
  }
}
</style>