<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-black w-screen h-screen mt-14 flex flex-col items-center justify-center">
    <div>
      <img src="@/assets/images/Logo Black Pearlwhite.png" width="444px" height="264px" alt="">
    </div>
    <div>
      <!-- Section ON JOUE POUR GAGNER -->
      <div class="slogan-section">
        <div class="slogan-line">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Clavier" class="slogan-image" />
          <span class="slogan-text">ON JOUE</span>
        </div>

        <div class="slogan-line">
          <span class="slogan-text">POUR</span>
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Camera" class="slogan-image" />
          <div class="slogan-quote mt-11 ml-16">
            <span class="quote-star">*</span>
            <div class="quote-text">
              "L'AFRIQUE EST NOTRE<br>
              INSPIRATION.<br>
              LE MONDE, NOTRE TERRAIN."
            </div>
          </div>
        </div>

        <div class="slogan-line">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Coca" class="slogan-image" />
          <span class="slogan-text">GAGNER</span>
          <img src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=400&q=80" alt="Pizza" class="slogan-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.slogan-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px 0;
  width: 100%;
  max-width: 1200px;
}

.slogan-line {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  gap: 20px;
}

.slogan-text {
  font-size: 8rem;
  font-weight: 300;
  color: white;
  font-style: italic;
  white-space: nowrap;
}

.slogan-image {
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 0;
}

.slogan-quote {
  position: absolute;
  right: 0;
  top: 20px;
  display: flex;
  align-items: flex-start;
  gap: 4px;
}

.quote-star {
  font-size: 1.5rem;
  color: white;
}

.quote-text {
  font-size: 0.9rem;
  line-height: 1.4;
  color: white;
  text-align: left;
  font-weight: 400;
}

@media (max-width: 768px) {
  .slogan-text {
    font-size: 4rem;
  }

  .slogan-image {
    width: 80px;
    height: 60px;
  }

  .slogan-quote {
    position: relative;
    margin-top: 20px;
    right: auto;
    top: auto;
    justify-content: center;
  }
}
</style>
