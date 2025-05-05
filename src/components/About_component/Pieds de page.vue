<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="hero-bg h-screen w-screen">
    <div class="hero-content">
      <h1>
        ENTREZ MAINTENANT<br />
        DANS LE JEU EN 1 MINUTES
      </h1>
      <p class="hero-desc">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
        tincidunt ut laoreet dolore magna aliquam
      </p>
    </div>
    <div>
      <footer
        class="footer-blur h-[250px] mx-14 mb-9 items-center justify-items-center flex rounded-2xl"
      >
        <div class="footer-grid">
          <!-- Bloc Inscription -->
          <div class="footer-newsletter">
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
                class="newsletter-input text-xs"
                placeholder="Entrez votre e-mail"
                required
              />
              <button type="submit" class="newsletter-btn">S’inscrire</button>
            </form>
          </div>
          <div class="footer-links grid grid-cols-3 gap-16 space-x-7 texxs">
            <div class="footer-col flex flex-col gap-2">
              <a href="/" class="footer-link">Accueil</a>
              <a href="/about" class="footer-link mt-10  flex">À propos</a>
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
import { ref } from 'vue'
import facebook from '@/assets/images/facebook.png'
import instagram from '@/assets/images/instagram.png'
import linkedin from '@/assets/images/linkedin.png'
import tiktok from '@/assets/images/TikTok.png'
import youtube from '@/assets/images/youtube.png'
const email = ref('')

function subscribe() {
  alert(`Merci pour votre inscription, ${email.value} !`)
  email.value = ''
}
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
.footer-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  gap: 24px;
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
}
.newsletter-btn:hover {
  background: #ffe08a;
}
.footer-links {
  flex: 2 1 400px;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
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
.footer-social-text span {
  margin-right: 10px;
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
  .footer-grid {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
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
