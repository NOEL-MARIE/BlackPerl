<template>
  <section class="w-screen min-h-screen overflow-hidden bg-white">
    <!-- Header -->
    <div class="flex flex-col-reverse md:flex-row items-center justify-center md:gap-20 px-6 md:px-16  ">
      <!-- Texte -->
      <div class="text-center md:text-left max-w-2xl">
        <span class="block mb-4 font-HouseOfCardsW03Bold text-[#808080] uppercase text-xl md:text-2xl lg:text-3xl">
          CARRIÈRE
        </span>
        <h1 class="font-cinzel leading-tight text-3xl md:text-4xl lg:text-5xl">
          EMBARQUEZ SUR LE<br />
          BATEAU PIRATE
        </h1>
        <p class="font-Opensans mt-4 text-base md:text-lg">
          Chez Black Pearl, chaque talent a un rôle stratégique.<br class="hidden md:inline" />
          Rejoignez une équipe passionnée où l’on joue pour gagner.
        </p>
      </div>

      <!-- Image du bateau -->
      <img
        class="w-40 md:w-60 lg:w-72 mb-8 md:mb-0"
        src="@/assets/images/BateauPirate_Carriere.jpg"
        alt="Bateau pirate"
      />
    </div>

    <!-- Carrousel des profils -->
    <div class="mt-12 px-4">
      <Profile_Squad_2 />
    </div>
  </section>
</template>

<script setup lang="ts">
import Profile_Squad_2 from '@/components/Profile_Squad.vue'
</script>
