<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Image_Forme />

  <section class="team-section">
    <h2 class="section-title">Notre équipe</h2>

    <div class="team-carousel">
      <div class="carousel-container" ref="carouselContainer">
        <div
          v-for="(member, index) in team"
          :key="index"
          class="team-member"
          :class="{ 'mt-3': index % 2 === 1 }"
        >
          <img :src="member.photo" :alt="member.name" class="member-photo" />
          <div class="member-info">
            <p class="member-name">{{ member.name }}</p>
            <p class="member-role">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="stats">
      <div>
        <p class="stat-title">Clients</p>
        <div class="stat-item">
          <p class="stat-number">250+</p>
          <p class="stat-desc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
          </p>
        </div>
      </div>
      <div>
        <p class="stat-title text-[#F8D065]">Références</p>
        <div class="stat-item highlight">
          <p class="stat-number">55%</p>
          <p class="stat-desc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
          </p>
        </div>
      </div>
      <div>
        <p class="stat-title">Ration / Homme:Femme</p>
        <div class="stat-item">
          <p class="stat-number">56:44</p>
          <p class="stat-desc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
          </p>
        </div>
      </div>
      <div>
        <p class="stat-title">Projets réalisés</p>
        <div class="stat-item">
          <p class="stat-number">380</p>
          <p class="stat-desc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
 import Image_Forme from '@/components/Image_Forme.vue'

import { ref, onMounted } from 'vue'
import gsap from 'gsap'

interface TeamMember {
  name: string
  role: string
  photo: string
}

const team = ref<TeamMember[]>([
  {
    name: 'Mike',
    role: 'Directeur Artistique',
    photo:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Mike',
    role: 'Directeur Artistique',
    photo:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Mike',
    role: 'Directeur Artistique',
    photo:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Mike',
    role: 'Directeur Artistique',
    photo:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Mike',
    role: 'Directeur Artistique',
    photo:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Mike',
    role: 'Directeur Artistique',
    photo:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936e79?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Mike',
    role: 'Directeur Artistique',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b2933e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Mike',
    role: 'Directeur Artistique',
    photo:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
  },
])

const carouselContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  if (carouselContainer.value) {
    gsap.to(carouselContainer.value, {
      xPercent: -50, // Déplace le carrousel de 50% de sa largeur (pour centrer)
      duration: 20,
      repeat: -1,
      ease: 'none',
    })
  }
})
</script>

<style scoped>
.team-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 80px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #111;
}

.section-title {
  text-align: center;
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 40px;
}

.team-carousel {
  overflow: hidden;
  position: relative;
}

.carousel-container {
  display: flex;
  width: max-content; /* Important: le conteneur prend la largeur de son contenu */
  animation: scroll 20s linear infinite;
}

.team-member {
  flex: 0 0 180px; /* Empêche les cartes de rétrécir */
  width: 180px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.1);
  background: #fff;
  margin: 0 12px; /* Ajoute un espacement entre les cartes */
  transition: all 0.3s ease;
}

/* Ajoute une marge en haut sur certaines images */
.team-member.mt-3 {
  margin-top: 24px;
}

.team-member:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.member-photo {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 16px;
  display: block;
}

.member-info {
  position: absolute;
  bottom: 8px;
  left: 12px;
  background: rgba(255, 255, 255, 0.85);
  padding: 6px 10px;
  border-radius: 8px;
  max-width: calc(100% - 24px);
  box-sizing: border-box;
}

.member-name {
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
  color: #222;
}

.member-role {
  font-weight: 400;
  font-size: 0.8rem;
  color: #666;
  margin: 0;
  margin-top: 2px;
  font-style: italic;
}

/* Statistiques */
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  margin-top: 48px;
  padding: 0 10px;
}

.stat-item {
  border-top: 1px solid #ddd;
  padding-bottom: 20px;
}

.stat-item.highlight {
  border-color: #f5c046;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  color: #111;
}

.stat-item.highlight .stat-number {
  color: #f5c046;
}

.stat-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0 0 12px 0;
  color: #222;
}

.stat-desc {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
  margin: 0;
}

/* Responsive */
@media (max-width: 900px) {
  .team-member {
    width: 140px;
  }

  .member-photo {
    height: 190px;
  }

  .stats {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .stats {
    grid-template-columns: 1fr;
  }
}
</style>
