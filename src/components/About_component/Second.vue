<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Carrousel_Left from '@/components/About_component/Carrousel_Left.vue'
import Carrousel_Right from '@/components/About_component/Carrousel_Right.vue'
</script>

<template>
  <div class="w-screen flex items-center mt-24 justify-center relative">
    <!-- Images en arrière-plan gauche et droite -->
    <img
      src="@/assets/images/BOAT_DRAW.png"
      width="751"
      alt=""
      class="absolute left-0 mb-16 -translate-x-1/2 mr-72 opacity-30 z-10"
    />
    <img
      src="@/assets/images/BOAT_DRAW.png"
      width="751"
      alt=""
      class="absolute right-0 mb-16 translate-x-1/2 opacity-30 z-10"
    />

    <!-- Contenu principal -->
    <div class="folder relative z-20">
      <div class="tab"></div>
      <div class="body">
        <div class="text-white h-ful flex flex-col">
          <div class="flex-1">
            <div class="flex flex-col justify-center items-center gap-16">
              <div class="flex justify-between mt-11 gap-9">
                <div class="flex-col flex gap-6 text-[20px] font-Opensans font-bold">
                  <p>
                    L’équipage créatif d’un navire enraciné dans <br />
                    l’Afrique moderne
                  </p>
                  <p>
                    Black Pearl Entertainment est bien plus <br />
                    qu’une agence de communication 360°.
                  </p>
                </div>
                <div class="flex-col flex gap-6 text-[15px] font-Opensans">
                  <p>
                    C’est un bateau pirate créatif, où stratégie, storytelling et technologie
                    s’unissent <br />
                    pour conquérir les marchés avec audace. Nés d’une légende ivoirienne, nous
                    <br />
                    transformons chaque campagne en jeu de pouvoir.
                  </p>
                  <p>
                    un terrain d’expérimentation où les marques deviennent des héros <br />
                    culturels. Nous croyons au pouvoir de la culture, à la magie de l’expérience et
                    à
                    <br />
                    l’art de surprendre.
                  </p>
                </div>
              </div>
              <div>
                <p class="text-6xl uppercase text-center font-HouseOfCardsW03Bold">
                  Ce n’est pas une campagne. C’est une <br />
                  <span class="text-[rgba(251,221,120,1)]">conquête</span>.
                </p>
              </div>
            </div>
          </div>

          <div class="flex-1">
            <Carrousel_Left />
            <Carrousel_Right />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.folder {
  position: relative;
  width: 90vw;        /* Largeur relative à la fenêtre */
  max-width: 1434px;  /* Largeur max desktop */
  height: 90vh;       /* Hauteur relative à la fenêtre */
  max-height: 960px;  /* Hauteur max desktop */
  margin: 0 auto;
}

/* Tablettes (largeur entre 600px et 900px) */
@media screen and (max-width: 900px) and (min-width: 600px) {
  .folder {
    width: 80vw;
    max-width: 768px;
    height: auto;    /* Hauteur automatique pour s’adapter au contenu */
    max-height: none;
  }
}

/* Mobiles (largeur inférieure à 600px) */
@media screen and (max-width: 599px) {
  .folder {
    width: 95vw;
    max-width: none;
    height: auto;
    max-height: none;
    padding: 10px;   /* Pour éviter que le contenu touche les bords */
  }
}


.tab {
  position: absolute;
  top: 0;
  right: 0;
  width: 1100px;
  height: 40px;
  background: #000000;
  border-top-right-radius: 15px;
  border-top-left-radius: 8px;
  z-index: 2;
}

.body {
  position: absolute;
  top: 30px;
  width: 1434px;
  height: 730px;
  background: #000000;
  border-radius: 15px;
  z-index: 1;
}
</style>
