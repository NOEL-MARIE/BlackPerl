<template>
  <!-- Bouton rond avec + centré -->

  <section class="flex items-center flex-col h-screen justify-center w-screen text-white">
    <div class="h-[550px] ml-44 items-center justify-center w-screen flex flex-row">
      <!-- LE BLOC DE GAUCHE  -->
      <div class="w-[530px] h-[550px]">
        <div class="flex flex-col gap-2 h-[512px]">
          <!-- PREMIER BLOC AVEC router-link to="/Strategie_360"  -->
          <button class="hover:cursor-pointer">
            <router-link to="/Strategie_360" class="block hover:cursor-pointer">
              <div class="relative w-[512px] h-[188px] bg-black rounded-xl pl-8 pt-2 pr-8">
                <!-- Bouton rond jaune positionné en haut à droite -->
                <div
                  class="absolute top-4 right-4 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#F8D065] shadow"
                >
                  <span class="text-xl text-black font-bold">+</span>
                </div>

                <div class="flex justify-around mt-5 text-white">
                  <div class="uppercase font-HouseOfCardsW03Bold text-[29px] flex">
                    Stratégie <br />
                    marketing <br />
                    360°
                  </div>
                  <div class="text-sm text-start font-Opensans font-light">
                    Nous concevons des campagnes <br />
                    intégrées alliant branding, digital,<br />
                    média et terrain, en parfaite <br />
                    cohérence avec vos objectifs de <br />
                    croissance.
                  </div>
                </div>
              </div>
            </router-link>
          </button>
          <!-- DEUXIEME BLOC DES DEUX DU BAS  -->
          <div class="flex flex-row mt-2 gap-5">
            <!-- DEUX SECTION DU BAS  -->
            <div class="w-[246px] h-[274px] bg-black rounded-xl pl-8  pr-8 flex">
              <!-- PREMIER BLOC AVEC router-link to="/Strategie_360" -->
              <button>
                <router-link to="/ActivationsView" >
                <div class="flex group flex-col">
                  <div>
                    <div
                      class="ml-[180px] top4 right-4 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#F8D065]"
                    >
                      <span
                        class="text-xl group-hover:rotate-90 group-hover:duration-700 text-black font-bold"
                        >+</span
                      >
                    </div>
                  </div>
                  <div class="gap-7 flex flex-col">
                    <div
                      class="font-HouseOfCardsW03Bold uppercase text-start text-3xl text-cente flex flex-col"
                    >
                      Activations
                      <span class="font-HouseOfCardsW03Bold uppercase text-[24px]"
                        >événementielles</span
                      >
                    </div>
                    <div class="flex flex-col text-sm text-start font-Opensans font-light">
                      Du concept au terrain, nous <br />
                      imaginons et réalisons des <br />
                      événements impactants,<br />
                      expérientiels et alignés avec <br />
                      votre ADN de marque.
                    </div>
                  </div>
                </div>
              </router-link>
              </button>
            </div>
            <div class="w-[246px] h-[274px] bg-black rounded-xl flex items-center justify-center">
              <img
                src="@/assets/images/Bateau Pirate Noir 1.png"
                class="overflow-hidden object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <!-- LE BLOC DE DROITE  -->
      <div class="w-[890px] h-[555px] flex flex-col">
        <div class="h-[330px] gap-3 flex">
          <!-- deuxieme partie section du haut -->
          <div class="w-[240px] h-[320px] group gap-2 bg-black rounded-xl p-3">
            <div class="flex flex-col">
              <div
                class="ml-[199px] top-4 right-4 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#F8D065] shadow"
              >
                <span
                  class="text-xl group-hover:rotate-90 group-hover:duration-700 text-black font-bold"
                  >+</span
                >
              </div>
              <div class="flex justify-between flex-col gap-9">
                <div class="font-HouseOfCardsW03Bold text-4xl">
                  Médias <br />
                  immersifs
                </div>
                <div class="text-xs font-light font-Opensans">
                  Nous créons des formats <br />
                  innovants (vidéos <br />
                  interactives, contenus 3D, <br />
                  mini-sites, motion design…) <br />
                  pour capter l’attention et <br />
                  immerger vos audiences <br />
                  dans votre univers.
                </div>
              </div>
            </div>
          </div>
          <div class="w-[476px] h-[300px] flex gap-2 flex-col">
            <div class="flex gap-3 justify-between">
              <!-- LES DEUX BLOCS DU HAUT -->
              <div
                class="w-[215px] h-[169px] bg-black rounded-xl overflow-hidden flex items-center justify-center"
              >
                <img
                  src="@/assets/images/bt Pirate Noir.png"
                  alt=""
                  class="object-cover"
                  width="160px"
                />
              </div>
              <div class="w-[350px] h-[169px] group bg-black text-white rounded-xl">
                <div class="flex flex-col p-4">
                  <div class="flex justify-between">
                    <div class="font-HouseOfCardsW03Bold uppercase text-3xl">
                      Branding & <br />
                      contenus
                    </div>
                    <div
                      class="top-4 right-4 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#F8D065]"
                    >
                      <span
                        class="text-xl group-hover:rotate-90 group-hover:duration-700 text-black font-bold"
                        >+</span
                      >
                    </div>
                  </div>
                  <div class="font-light text-xs font-Opensans">
                    Nous bâtissons des identités fortes, <br />
                    cohérentes et mémorables, à travers <br />
                    des contenus visuels et narratifs de <br />
                    haute qualité.
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[476px] h-[635px] rounded-xl group bg-black">
              <div class="flex-col flex p-4">
                <div class="flex">
                  <div class="font-HouseOfCardsW03Bold text-2xl uppercase">
                    Studio de <br />Création
                  </div>
                  <div
                    class="top-4 ml-auto right-4 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#F8D065]"
                  >
                    <span
                      class="text-xl group-hover:rotate-90 group-hover:duration-700 text-black font-bold"
                      >+</span
                    >
                  </div>
                </div>
                <div class="text-xs font-Opensans font-light">
                  Notre studio interne conçoit et produit vos visuels, vidéos, <br />
                  capsules motion, jingles, spots et supports multi-formats <br />
                  avec exigence et créativité.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[729px] h-[210px] gap-2 flex group">
          <div class="w-[405px] h-[150px] bg-black rounded-xl">
            <div class="flex-col flex p-4">
              <div class="flex">
                <div class="font-HouseOfCardsW03Bold text-2xl uppercase">
                  Analyse de <br />
                  performance IA
                </div>
                <div
                  class="top-4 ml-auto right-4 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#F8D065]"
                >
                  <span
                    class="text-xl group-hover:rotate-90 group-hover:duration-700 text-black font-bold"
                    >+</span
                  >
                </div>
              </div>
              <div class="text-xs font-light font-Opensans">
                Grâce à nos outils intelligents, nous mesurons l’efficacité <br />
                de chaque action en temps réel et optimisons vos <br />
                campagnes en continu.
              </div>
            </div>
          </div>
          <div class="w-[390px] h-[150px] group bg-black rounded-xl">
            <div class="flex-col flex p-4">
              <div class="flex">
                <div class="font-HouseOfCardsW03Bold text-2xl uppercase leading-6">
                  Activation <br />
                  d’influence
                </div>
                <div
                  class="top-4 ml-auto right-4 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#F8D065]"
                >
                  <span
                    class="text-xl group-hover:rotate-90 group-hover:duration-700 text-black font-bold"
                    >+</span
                  >
                </div>
              </div>
              <div class="text-xs font-Opensans text-justify font-light">
                Notre studio interne conçoit et produit vos visuels, vidéos, capsules motion,
                jingles, spots et supports multi-formats avec exigence et créativité.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center pb-12 flex-col">
      <span class="font-Opensans texb">Scrollez</span>
      <img :src="boatGif" alt="" width="84px" height="84px" />
    </div>
  </section>

  <!-- Bloc à placer juste en dessous -->
</template>

<script lang="ts">
import boatGif from '@/assets/images/boat.gif'
export default {
  name: 'ExpertiseSection',
  components: {},
  data() {
    return {
      boatGif,
    }
  },
}
</script>

<style scoped></style>
