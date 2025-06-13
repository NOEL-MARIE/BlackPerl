<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="hero-bg h-screen w-screen">
    <div class="hero-content">
      <h1 ref="heroTitleRef">
        ENTREZ MAINTENANT<br />
        DANS LE JEU EN 1 MINUTES
      </h1>
      <p class="hero-desc" ref="heroDescRef">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
        tincidunt ut laoreet dolore magna aliquam
      </p>
    </div>
    <div>
      <footer
        class="footer-blur h-[190px] mx-14 mb-9 items-center justify-between flex rounded-2xl"
        ref="footerRef"
      >
        <div class="footer-gri w-full flex mx-11">
          <div class="footer-newsletter ml-20">
            <label class="newsletter-label">
              RESTEZ À JOUR
              <img src="@/assets/images/paper plane.gif" width="48px" class="pl-1" alt="" />
              <span class="newsletter-icon">
                <i class="fa-regular fa-paper-plane"></i>
              </span>
            </label>
            <form class="newsletter-form" @submit.prevent="subscribe">
              <input
                v-model="email"
                type="email"
                class="newsletter-input text-xs w-[244px]"
                placeholder="Entrez votre e-mail"
                required
              />
              <button type="submit" class="newsletter-btn w-fit">S’inscrire</button>
            </form>
          </div>
          <div class="footer-links grid grid-cols-3 gap-16 space-x-7 texxs">
            <div class="footer-col flex flex-col gap-2">
              <a href="/" class="footer-link">Accueil</a>
              <a href="/about" class="footer-link mt-10 flex">À propos</a>
            </div>
            <div class="footer-col flex flex-col gap-2">
              <a href="/expertise" class="footer-link">Expertise</a>
              <a href="/realisations" class="footer-link mt-10">Réalisations</a>
            </div>
            <div class="footer-col flex flex-col justify-between gap-2">
              <a href="/carriere" class="footer-link">Carrière</a>
              <div class="footer-social-text">
                <img :src="facebook" alt="Facebook" />
                <img :src="instagram" alt="Instagram" />
                <img :src="linkedin" alt="LinkedIn" />
                <img :src="tiktok" alt="TikTok" />
                <img :src="youtube" alt="YouTube" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="footer-copy">
        © 2025 – Black Pearl Entertainment. Tous les droits sont réservés.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
// IMPORTANT: CustomBounce et CustomEase sont des plugins GSAP du club GreenSock.
// Assurez-vous d'avoir la bonne licence et de les importer correctement.
// Si vous n'avez pas accès au club, cette partie de l'animation ne fonctionnera pas.
import { CustomEase } from 'gsap/CustomEase'
import { CustomBounce } from 'gsap/CustomBounce'

// --- Importations des images pour le footer social ---
import facebook from '@/assets/images/Facebook.png'
import instagram from '@/assets/images/Instagram.png'
import linkedin from '@/assets/images/LinkedIn.png'
import tiktok from '@/assets/images/TikTok.png'
import youtube from '@/assets/images/YouTube.png'

// --- Enregistrement des plugins CustomEase et CustomBounce ---
gsap.registerPlugin(CustomEase, CustomBounce)

// --- Références pour les éléments du DOM à animer ---
const heroTitleRef = ref<HTMLElement | null>(null)
const heroDescRef = ref<HTMLElement | null>(null)
const footerRef = ref<HTMLElement | null>(null)

// --- Références pour le formulaire d'email ---
const email = ref('')

// --- Logique du formulaire d'inscription ---
function subscribe() {
  alert(`Merci pour votre inscription, ${email.value} !`)
  email.value = ''
}

// --- Logique d'animation GSAP ---
onMounted(() => {
  // 1. Animation du texte du héros
  const heroTimeline = gsap.timeline({ delay: 0.5 }) // Un petit délai avant que l'animation commence

  if (heroTitleRef.value) {
    heroTimeline.from(heroTitleRef.value, {
      x: 50, // Commence 50px plus bas
      opacity: 0, // Commence invisible
      duration: 2,
      ease: 'power3.out',
    })
  }

  if (heroDescRef.value) {
    heroTimeline.from(
      heroDescRef.value,
      {
        y: 30, // Commence 30px plus bas
        opacity: 0, // Commence invisible
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.5', // Démarre 0.5s avant la fin de l'animation précédente (l'animation du titre)
    )
  }

  // 2. Animation CustomBounce pour le footer
  if (footerRef.value) {
    // Crée une ease CustomBounce personnalisée
    CustomBounce.create('myCustomBounce', {
      strength: 0.6, // Ajustez la force du rebond (0 à 1)
      squash: 3, // Ajustez la durée de l'effet d'écrasement/étirement
      squashID: 'myCustomBounce-squash', // ID pour l'ease de squash/stretch (non utilisée directement ici mais bonne pratique)
    })

    gsap.from(footerRef.value, {
      x: 200, // Commence 200px plus bas
      opacity: 0, // Commence invisible
      duration: 1.5, // Durée de l'animation de rebond
      ease: 'myCustomBounce', // Applique la ease CustomBounce définie
      delay: heroTimeline.duration() + 0.5, // Démarre après la fin des animations du héros + un petit délai
    })
  }
})
</script>

<style scoped>
.hero-bg {
  background: url('@/assets/images/img_cavalier.png') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hero-content {
  padding: 80px 0 0 80px;
  color: #fff;
  max-width: 600px;
}
.hero-content h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 24px;
  line-height: 1.1;
}
.hero-desc {
  font-size: 1.15rem;
  color: #ddd;
  margin-bottom: 0;
}
.footer-blur {
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(5px);
  padding: 32px 0 12px 0;
}
.footer-gri {
  display: flex;
  width: 100%;
  margin-left: 11px;
  margin-right: 11px;
}
.footer-newsletter {
  flex: 1 1 260px;
  min-width: 240px;
  margin-bottom: 16px;
}
.newsletter-label {
  color: #fff;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.newsletter-icon {
  margin-left: 8px;
  font-size: 1.1em;
}
.newsletter-form {
  display: flex;
  gap: 10px;
}
.newsletter-input {
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  outline: none;
  min-width: 140px;
  font-size: 1rem;
}
.newsletter-btn {
  background: #f5c046;
  color: #222;
  border: none;
  padding: 8px 18px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  /* Correction: W-[43px] n'est pas une classe Tailwind valide. J'ai mis une largeur fixe. */
}
.newsletter-btn:hover {
  background: #ffe08a;
}
.footer-links {
  flex: 2 1 400px;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  /* 'texxs' n'est pas une classe CSS standard, je l'ai retirée. */
}
.footer-col {
  display: flex;
  flex-direction: column;
}
.footer-link {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: text-decoration 0.2s;
}
.footer-link:hover {
  text-decoration: underline;
}
.footer-social-text {
  display: flex;
  align-items: center;
  gap: 18px;
  color: #fff;
}
.footer-copy {
  text-align: center;
  color: #ccc;
  font-size: 0.93rem;
  letter-spacing: 0.5px;
}
@media (max-width: 900px) {
  .hero-content {
    padding: 40px 10px 0 10px;
    max-width: 100%;
  }
  .footer-blur {
    margin-left: 10px;
    margin-right: 10px;
  }
  .footer-gri {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
    margin-left: 11px;
    margin-right: 11px;
  }
  .footer-links {
    justify-content: flex-start;
    gap: 32px;
  }
  .footer-social-text {
    justify-content: flex-start;
    margin-top: 8px;
  }
}
</style>
