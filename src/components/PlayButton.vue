<template>
  <div class="container flex justify-center ">
    <a href="#" class="playBut">
      <!-- SVG Play Button -->
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="313.7px"
        height="513.7px"
        viewBox="0 0 213.7 213.7"
        xml:space="preserve"
      >
        <polygon
          class="triangle"
          fill="none"
          stroke-width="7"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          points="73.5,62.5 148.5,105.8 73.5,149.1"
        />
        <circle
          class="circle"
          fill="none"
          stroke-width="7"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          cx="106.8"
          cy="106.8"
          r="103.3"
        />
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
// Pas de logique JS nécessaire pour un simple effet hover/CSS
</script>

<style scoped>

:host, .playButton-center { /* :host pour compatibilité avec Vue SFC */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* Facultatif : assure que le SVG ne grossit pas au-delà de la taille voulue */
  width: 70px;
  height: 70px;
  z-index: 10;
  /* Désactive le survol si dans parent clicable, sinon laisse comme tu veux */
}

.container {
  width: 100%;
  text-align: center;
  margin-top: 25vh;
}

.circle {
  stroke: #f8aa28;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  display: inline-block;
  transition: all 0.5s ease;
}

.triangle {
  transition: all 0.7s ease-in-out;
  stroke-dasharray: 240;
  stroke-dashoffset: 480;
  stroke: #ffffff;
  transform: translateY(0);
}

/* Hover styles */
.playBut:hover .triangle {
  stroke-dashoffset: 0;
  opacity: 1;
  stroke: #f8aa28;
  animation: nudge 0.7s ease-in-out;
}

.playBut:hover .circle {
  stroke-dashoffset: 0;
  opacity: 1;
}

/* Keyframes pour le nudge de la flèche/play */
@keyframes nudge {
  0% { transform: translateX(0); }
  30% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  70% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
}
</style>
