<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-black relative w-screen h-screen pt-52 mt-14 pb-52 mb-14 z-50  flex  flex-col items-center justify-center">
    <div>
      <img src="@/assets/images/Logo Black Pearlwhite.png" width="444px" height="264px" alt="" class="">
    </div>
    <div>
      <!-- Section ON JOUE POUR GAGNER -->
      <div class="slogan-section">
        <div class="slogan-line">
          <img src="@/assets/images/Rectangle 155typing.png" alt="Clavier" class="slogan-image" />
          <span class="slogan-text">ON JOUE</span>
        </div>

        <div class="slogan-line ">
          <span class="slogan-text ">POUR</span>
          <img src="@/assets/images/Rectangle 156camera.png" alt="Camera" class="slogan-image mr-60" />
          <div class="slogan-quote mt-11 flex-row">
            <span class="quote-star text-xl  ">*</span>
            <div class="quote-text ml-2  ">
              "L'AFRIQUE EST NOTRE<br>
              INSPIRATION.<br>
              LE MONDE, NOTRE TERRAIN."
            </div>
          </div>
        </div>

        <div class="slogan-line">
          <img src="@/assets/images/Rectangle 157coca.png" alt="Coca" class="slogan-image" />
          <span class="slogan-text">GAGNER</span>
          <img src="@/assets/images/Rectangle 158pizza.png" alt="Pizza" class="slogan-image" />
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
  gap: 1px;
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
  font-weight: 300px;
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


}

.quote-star {
  color: white;
}

.quote-text {
  font-size: 0.9rem;
  line-height: 1.4;
  color: white;
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
