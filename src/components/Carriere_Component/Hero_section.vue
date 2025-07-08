<template>
  <section
    class="w-screen flex flex-col justify-evenly 2xl:justify-normal h-screen overflow-hidden bg-white"
  >
    <!-- Header -->
    <div class="flex flex-col md:flex-row items-center justify-center 2xl:justify-evenly md:gap-20">
      <!-- Texte -->
      <div class="text-center md:text-left">
        <span
          class="block mb-4 font-HouseOfCardsW03Bold text-[#808080] uppercase text-xl md:text-2xl 2xl:text-6xl"
        >
          CARRIÈRE
        </span>
        <h1 class="font-cinzel leading-tight text-3xl md:text-4xl 2xl:text-8xl">
          EMBARQUEZ SUR LE<br />
          BATEAU PIRATE
        </h1>
        <p class="font-Opensans mt-4 text-base md:text-lg 2xl:text-2xl">
          Chez Black Pearl, chaque talent a un rôle stratégique.<br
            class="hidden md:inline 2xl:hidden"
          />
          Rejoignez une équipe <br class="hidden 2xl:flex" />
          passionnée où l’on joue pour gagner.
        </p>
      </div>

      <!-- Image du bateau -->
        <img
          class="w-40 md:w-60 2xl:w-[500px] mb-8 md:mb-0"
          src="@/assets/images/BateauPirate_Carriere.jpg"
          alt="Bateau pirate"
        />
    </div>
    <!-- Carrousel des profils -->
    <div class="">
      <Profile_Squad_2 />
    </div>
  </section>
</template>

<script setup lang="ts">

import Profile_Squad_2 from '@/components/Profile_Squad.vue'
</script>
