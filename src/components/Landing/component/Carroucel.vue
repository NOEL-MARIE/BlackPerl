<template>
    <div class="relative">
      <!-- Section haute -->
      <div class="w-screen pt-40 flex justify-around">
        <div><img :src="Echec" alt="Illustration d'échec"></div>
        <div><img :src="Logo_BlackPurl" alt="Logo Black Pearl"></div>
        <div><img :src="Echec" alt="Illustration d'échec"></div>
      </div>
  
      <!-- Carrousel -->
      <div class="w-screen mt-10 h-96 overflow-hidden">
        <div class="carousel-container">
          <div class="carousel-track" :style="trackStyle">
            <div 
              v-for="(img, index) in extendedImages" 
              :key="index"
              class="carousel-item"
            >
              <img
                :src="img"
                :alt="'Image ' + (index % images.length + 1)"
                class="w-full h-64 object-cover rounded-lg mx-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Echec from '@/assets/images/Home_fou.svg'
  import Logo_BlackPurl from '@/assets/images/Logo_Black_Pearl.svg'
  import Img1 from '@/assets/images/CARR_IMG1.png'
  import Img2 from '@/assets/images/CARR_IMG2.png'
  import Img3 from '@/assets/images/CARR_IMG3.png'
  
  export default {
    data() {
      return {
        Echec,
        Logo_BlackPurl,
        images: [Img1, Img2, Img3],
        scrollPosition: 0,
        scrollSpeed: 50
      }
    },
    computed: {
      extendedImages() {
        return [...this.images, ...this.images, ...this.images]
      },
      trackStyle() {
        return {
          transform: `translateX(-${this.scrollPosition}px)`,
          animation: `scroll ${this.scrollSpeed}s linear infinite`
        }
      }
    },
    mounted() {
      this.startAutoScroll()
    },
    methods: {
      startAutoScroll() {
        setInterval(() => {
          this.scrollPosition += 0.5
          if (this.scrollPosition > this.images.length * 300) {
            this.scrollPosition = 0
          }
        }, 50)
      }
    }
  }
  </script>
  
  <style>
  .carousel-container {
    width: 100%;
    overflow: hidden;
  }
  
  .carousel-track {
    display: flex;
    width: max-content;
    will-change: transform;
  }
  
  .carousel-item {
    flex: 0 0 auto;
    width: 300px;
  }
  
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-300px * 3)); }
  }
  </style>
  