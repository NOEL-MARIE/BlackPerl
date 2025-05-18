<template>
  <section class=" h-screen w-screen">

    <!-- Header -->
    <NavBar_Component  class="z-40"/>
    <div class="carriere-heade  z-0 flex items-center max-w-9xl h-[250px] gap-60 justify-center">
      <div class="carriere-titles">
        <span class="carriere-label mb-6 font-HouseOfCardsW03Bold uppercase text-[#808080] text-[25px]">CARRIÈRE</span>
        <h1 class="font-cinzel  text-[40px]">
          EMBARQUEZ SUR LE<br />
          BATEAU PIRATE
        </h1>
        <p class="font-Opensans">
          Chez Black Pearl, chaque talent a un rôle stratégique. Rejoignez une équipe passionnée où
          l’on joue pour gagner.
        </p>
      </div>
      <img
        class="pirate-ship mt-20 "
        src="@/assets/images/BateauPirate_Carriere.jpg"
        alt="Bateau pirate"
        width="500px"
        height="500px"
      />
    </div>

    <!-- Carrousel des profils -->
    <div class=" mb-11">
      <Profile_Squad_2 />
    </div>
  </section>
</template>

<script setup lang="ts">
import NavBar_Component from '../NavBar/NavBar_Component.vue'
import Profile_Squad_2 from '@/components/Profile_Squad.vue'
</script>

<style scoped>







.carriere-titles p {
  max-width: 420px;
}

.pirate-ship {
  width: 340px;
  /* max-width: 40vw;
  margin-left: 40px;*/
  margin-top: -30px;
}






/* Responsive */
@media (max-width: 900px) {
  .carriere-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .pirate-ship {
    margin: 30px 0 0 0;
    width: 220px;
    max-width: 60vw;
  }
}
</style>
