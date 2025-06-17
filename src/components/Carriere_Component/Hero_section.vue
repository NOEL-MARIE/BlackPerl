<template>
  <section class="w-screen h-screen overflow-hidden">

    <!-- Header -->
    <div class="carriere-heade  z-0 flex items-center max-w-9xl h-[36%] gap-60 justify-center">
      <div class="carriere-titles">
        <span class="carriere-label mb-6 font-HouseOfCardsW03Bold uppercase text-[#808080] text-[225%] ">CARRIÈRE</span>
        <h1 class="font-cinzel leading-none pt-3  text-[290%] ">
          EMBARQUEZ SUR LE<br />
          BATEAU PIRATE
        </h1>
        <p class="font-Opensans pt-4 w-fit">
          Chez Black Pearl, chaque talent a un rôle stratégique. Rejoignez une équipe <br> passionnée où
          l’on joue pour gagner.
        </p>
      </div>
      <img
        class="pirate-ship mt-20 w-[250px]"
        src="@/assets/images/BateauPirate_Carriere.jpg"
        alt="Bateau pirate"
        width="300px"
        height="300px"
      />
    </div>

    <!-- Carrousel des profils -->
    <div class=" mb-11 overflow-hidden">
      <Profile_Squad_2 />
    </div>
  </section>
</template>

<script setup lang="ts">
import Profile_Squad_2 from '@/components/Profile_Squad.vue'
</script>

<style scoped>







.carriere-titles p {
  /* max-width: 420px; */
}

.pirate-ship {

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

  }
}
</style>
