<template>
  <nav
    :class="[
      '  w-screen  font-sans z-50 transition-all duration-300 flex items-center justify-center top-0 left-0',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4',
    ]"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="px-4 max-w-7xl w-full">
      <div class="flex justify-between items-center h-12 w-full">
        <!-- Logo -->

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center gap-2 mx-auto">
          <router-link
            v-for="item in links"
            :key="item.name"
            :to="item.to"
            class="relative span flex px-3 py-2 font-medium transition-colors duration-300 text-xl"
            :class="[
              isImageRoute && !isScrolled ? 'text-white' : 'text-gray-900',
              route.path === item.to ? 'font-bold router-link-active' : '',
            ]"
          >
            {{ item.name }}
            <span></span>
          </router-link>
          <!-- CTA Button -->
        </div>

        <!-- Mobile Burger Button -->
        <div class="flex items-center md:hidden">
          <button
            @click="toggleMenu"
            aria-label="Ouvrir le menu"
            class="relative z-60 focus:outline-none"
          >
            <!-- Animated Hamburger -->
            <span
              :class="['block w-7 h-1 bg-current rounded transition-all duration-300', burgerTop]"
            ></span>
            <span
              :class="[
                'block w-7 h-1 bg-current rounded mt-1.5 transition-all duration-300',
                burgerMid,
              ]"
            ></span>
            <span
              :class="[
                'block w-7 h-1 bg-current rounded mt-1.5 transition-all duration-300',
                burgerBot,
              ]"
            ></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div
        v-if="isOpen"
        ref="menuRef"
        class="fixed inset-0 z-50 bg-black bg-opacity-40 flex flex-col items-end md:hidden"
        @keydown.esc="closeMenu"
        tabindex="-1"
      >
        <div
          class="w-4/5 sm:w-2/3 max-w-xs bg-white shadow-md px-6 py-8 h-full flex flex-col gap-6"
          @click.stop
        >
          <button
            class="self-end mb-4 text-2xl animate-spin   mr-16 text-gray-500 hover:text-gray-900 focus:outline-none"
            style="animation-duration: 15s;"
            @click="closeMenu"
            aria-label="Fermer le menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="19.000000pt"
              height="19.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M2481 5109 c-101 -31 -184 -128 -197 -232 -3 -23 6 -150 19 -282 14 -132 22 -243 18 -246 -3 -3 -40 -12 -81 -19 -239 -41 -495 -147 -708 -293 -40 -27 -74 -48 -76 -46 -111 144 -329 397 -355 414 -55 35 -107 48 -175 43 -72 -6 -116 -26 -169 -77 -63 -59 -81 -104 -82 -196 0 -133 9 -146 289 -377 131 -108 247 -199 258 -202 34 -8 61 9 120 77 164 186 447 370 693 450 602 197 1241 47 1684 -393 248 -246 402 -541 468 -893 23 -128 23 -426 0 -554 -65 -349 -223 -651 -467 -893 -241 -239 -537 -392 -883 -457 -128 -23 -426 -23 -554 0 -351 66 -654 225 -898 473 -495 501 -615 1263 -299 1891 29 60 54 118 54 131 0 13 -12 34 -26 49 -20 20 -31 24 -57 19 -42 -8 -48 -16 -100 -121 -85 -171 -153 -377 -173 -524 -4 -28 -9 -53 -13 -55 -3 -2 -114 7 -246 21 -132 13 -259 22 -282 19 -53 -7 -130 -45 -165 -83 -52 -55 -73 -111 -73 -193 0 -82 22 -138 74 -193 31 -34 103 -73 152 -82 19 -4 136 3 260 15 123 12 237 22 253 23 l28 2 23 -113 c48 -233 143 -463 272 -655 l65 -97 -23 -19 c-13 -11 -105 -86 -204 -168 -214 -177 -230 -200 -230 -328 1 -92 19 -137 82 -196 53 -51 97 -71 169 -77 67 -5 117 8 175 44 26 16 250 276 355 413 2 2 47 -26 101 -62 192 -129 422 -224 655 -272 l113 -23 -2 -33 c-1 -19 -12 -132 -24 -253 -11 -120 -18 -235 -14 -254 16 -86 70 -158 150 -200 41 -22 63 -26 125 -26 62 0 84 4 125 26 80 42 134 114 150 200 4 19 -3 134 -14 254 -12 121 -23 234 -24 253 l-2 33 116 24 c261 53 499 160 735 329 7 5 15 7 17 5 321 -396 346 -422 431 -450 49 -16 150 -8 196 15 153 77 205 262 114 406 -17 27 -236 216 -414 356 -2 2 0 10 5 17 171 239 276 472 330 738 l23 113 33 -2 c19 -1 132 -12 253 -24 233 -22 264 -21 335 16 55 28 91 64 122 125 35 66 33 176 -3 245 -42 80 -114 134 -200 150 -19 4 -134 -3 -254 -14 -121 -12 -234 -23 -253 -24 l-33 -2 -23 113 c-54 266 -159 499 -330 738 -5 7 -7 15 -5 17 178 140 397 329 414 356 36 58 49 108 44 175 -6 73 -32 128 -85 177 -53 51 -97 71 -169 77 -130 10 -174 -21 -370 -262 -87 -107 -162 -195 -166 -195 -4 -1 -42 24 -85 55 -100 72 -323 182 -451 224 -56 17 -152 42 -214 55 l-113 23 2 33 c1 19 12 132 24 253 11 120 18 235 14 254 -9 50 -48 122 -82 153 -67 63 -189 93 -272 68z m153 -162 c13 -9 31 -32 40 -52 17 -35 17 -47 -4 -263 -12 -125 -23 -237 -26 -249 -4 -22 -9 -23 -84 -23 -75 0 -80 1 -84 23 -3 12 -14 124 -26 249 -22 225 -22 228 -3 265 35 68 123 91 187 50z m-1622 -665 c26 -16 328 -377 328 -391 0 -4 -24 -31 -54 -60 -39 -38 -58 -51 -68 -45 -8 5 -96 76 -196 158 -111 92 -185 160 -193 177 -25 61 8 146 66 169 34 14 89 11 117 -8z m3250 -19 c35 -35 47 -97 28 -142 -7 -19 -78 -84 -193 -178 -99 -81 -187 -152 -195 -157 -10 -6 -29 7 -68 45 -30 29 -54 56 -54 60 0 14 302 375 328 392 42 28 115 18 154 -20z m-3767 -1593 c121 -12 230 -23 243 -26 21 -4 22 -9 22 -84 0 -75 -1 -80 -22 -84 -13 -3 -125 -14 -250 -26 -216 -21 -228 -21 -263 -4 -44 21 -65 51 -71 101 -6 50 21 101 66 125 42 22 13 22 275 -2z m4405 2 c45 -24 72 -75 66 -125 -6 -50 -27 -80 -71 -101 -35 -17 -47 -17 -263 4 -125 12 -237 23 -249 26 -22 4 -23 9 -23 84 0 44 1 80 3 81 7 3 438 47 467 48 19 0 51 -7 70 -17z m-3611 -1386 c38 -39 51 -58 45 -68 -5 -8 -76 -96 -158 -196 -92 -111 -160 -185 -177 -193 -45 -18 -107 -5 -142 29 -38 39 -48 112 -20 154 17 26 378 328 392 328 4 0 31 -24 60 -54z m2804 -106 c117 -96 190 -162 197 -181 19 -45 7 -107 -28 -141 -34 -34 -96 -47 -141 -29 -17 8 -85 82 -177 193 -82 100 -153 188 -158 196 -6 10 7 29 45 68 30 30 59 52 65 50 7 -3 95 -73 197 -156z m-1449 -442 c3 -13 14 -125 26 -250 22 -225 22 -228 3 -265 -49 -95 -182 -94 -227 2 -17 35 -17 47 4 263 12 125 23 237 26 250 4 21 9 22 84 22 75 0 80 -1 84 -22z"
                />
                <path
                  d="M2420 3904 c-322 -40 -591 -171 -815 -398 -199 -201 -313 -415 -372 -696 -24 -118 -24 -382 0 -500 59 -281 174 -496 372 -696 201 -203 421 -322 705 -381 117 -24 380 -24 502 0 270 54 494 174 694 372 202 199 322 421 381 705 24 118 24 382 0 500 -39 185 -110 356 -212 510 -63 95 -258 291 -351 352 -161 107 -335 180 -506 213 -81 16 -328 28 -398 19z m210 -366 c0 -123 5 -239 10 -259 11 -40 27 -50 115 -74 33 -9 92 -34 132 -56 40 -21 82 -39 94 -39 16 0 76 53 199 175 l175 175 53 -52 52 -53 -175 -175 c-122 -123 -175 -183 -175 -199 0 -12 18 -54 39 -94 22 -40 47 -99 56 -132 23 -84 34 -103 68 -115 17 -6 125 -10 259 -10 l229 0 -3 -72 -3 -73 -252 -5 c-288 -6 -271 0 -293 -99 -7 -30 -32 -93 -56 -139 -24 -46 -44 -93 -44 -105 0 -14 59 -80 175 -197 l175 -175 -52 -53 -53 -52 -175 175 c-123 122 -183 175 -199 175 -12 0 -54 -18 -94 -39 -40 -22 -99 -47 -132 -56 -88 -24 -104 -34 -115 -74 -5 -20 -10 -136 -10 -258 l0 -223 -70 0 -70 0 0 223 c0 122 -5 238 -10 258 -11 40 -27 50 -115 74 -33 9 -92 34 -132 56 -40 21 -82 39 -94 39 -16 0 -76 -53 -199 -175 l-175 -175 -53 52 -52 53 175 175 c116 117 175 183 175 197 0 12 -20 59 -44 105 -24 46 -49 109 -56 139 -22 99 -5 93 -293 99 l-252 5 -3 73 -3 72 229 0 c134 0 242 4 259 10 34 12 45 31 68 115 9 33 34 92 56 132 21 40 39 82 39 94 0 16 -53 76 -175 199 l-175 175 52 53 53 52 175 -175 c123 -122 183 -175 199 -175 12 0 54 18 94 39 40 22 99 47 132 56 88 24 104 34 115 74 5 20 10 136 10 259 l0 222 70 0 70 0 0 -222z m-300 8 l0 -194 -37 -13 c-21 -6 -60 -23 -87 -36 l-49 -25 -136 136 c-155 155 -153 135 -21 205 107 56 193 88 328 120 1 1 2 -86 2 -193z m620 148 c72 -25 225 -99 265 -129 19 -15 14 -21 -116 -151 l-135 -135 -76 36 c-42 19 -81 35 -87 35 -8 0 -11 63 -11 194 l0 194 43 -10 c23 -5 76 -20 117 -34z m-1242 -597 l133 -133 -29 -65 c-16 -35 -34 -76 -40 -92 l-12 -27 -187 2 -188 3 3 25 c6 49 45 166 78 240 37 80 95 180 104 180 3 0 65 -60 138 -133z m1879 81 c65 -108 134 -283 145 -368 l3 -25 -188 -3 -187 -2 -12 27 c-6 16 -24 57 -40 92 l-29 65 133 133 c73 73 135 133 138 133 3 0 20 -24 37 -52z m-1806 -885 c6 -21 23 -60 36 -87 l25 -49 -136 -136 c-156 -156 -135 -155 -210 -11 -44 85 -86 196 -104 278 l-10 42 193 0 193 0 13 -37z m1947 -5 c-18 -82 -60 -193 -104 -278 -75 -144 -54 -145 -210 11 l-136 136 25 49 c13 27 30 66 36 87 l13 37 193 0 193 0 -10 -42z m-1520 -472 c26 -13 64 -29 85 -35 l37 -13 0 -193 0 -193 -42 10 c-82 18 -193 60 -278 104 -144 75 -145 54 10 209 74 74 136 135 138 135 1 0 24 -11 50 -24z m892 -111 c155 -155 154 -134 10 -209 -85 -44 -196 -86 -277 -104 l-43 -10 0 193 0 193 48 17 c26 9 63 24 82 35 19 11 37 19 40 20 3 0 66 -61 140 -135z"
                />
                <path
                  d="M2400 3057 c-89 -30 -152 -69 -214 -132 -97 -98 -146 -222 -146 -365 0 -146 50 -269 151 -369 100 -101 223 -151 369 -151 146 0 272 52 370 151 100 101 150 224 150 369 0 50 -7 109 -16 141 -52 176 -187 311 -363 363 -82 24 -220 21 -301 -7z m322 -160 c66 -32 151 -118 181 -184 32 -69 32 -237 0 -306 -31 -66 -115 -152 -182 -184 -50 -25 -67 -28 -161 -28 -94 0 -111 3 -161 28 -67 32 -151 118 -182 184 -18 40 -22 66 -22 153 0 125 17 171 91 250 88 94 155 121 290 117 74 -2 100 -8 146 -30z"
                />
                <path
                  d="M2465 2763 c-82 -43 -125 -113 -125 -203 0 -130 90 -220 220 -220 130 0 220 90 220 220 0 90 -42 160 -122 201 -47 24 -150 25 -193 2z m147 -150 c23 -20 24 -80 1 -105 -20 -23 -80 -24 -105 -1 -23 20 -24 80 -1 105 20 23 80 24 105 1z"
                />
              </g>
            </svg>
          </button>

          <div class="flex flex-col gap-4">
            <router-link
              v-for="item in links"
              :key="item.name"
              :to="item.to"
              @click="closeMenu"
              class="block text-lg font-medium transition-colors duration-200"
              :class="{
                'text-[#F8D065] font-bold': route.path === item.to,
                'text-gray-900': route.path !== item.to,
              }"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick, computed } from 'vue'
import gsap from 'gsap'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const isScrolled = ref(false)
const menuRef = ref<HTMLElement | null>(null)
const route = useRoute()

const links = [
  { name: 'Accueil', to: '/' },
  { name: 'À propos', to: '/about' },
  { name: 'Expertise', to: '/expertise' },
  { name: 'Réalisations', to: '/realisations' },
  { name: 'Carrière', to: '/carriere' },
]

const isImageRoute = computed(() => route.path.startsWith('/image/'))

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
  if (isOpen.value) closeMenu()
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  if (menuRef.value) {
    gsap.to(menuRef.value, {
      opacity: 0,
      y: -20,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        isOpen.value = false
      },
    })
  } else {
    isOpen.value = false
  }
}

watch(isOpen, async (val) => {
  if (val) {
    await nextTick()
    if (menuRef.value) {
      gsap.fromTo(
        menuRef.value,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
      )
      menuRef.value.focus()
    }
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// Burger animation classes
const burgerTop = computed(() =>
  isOpen.value
    ? 'rotate-45 translate-y-2 bg-[#F8D065]'
    : isImageRoute.value && !isScrolled.value
      ? 'bg-white'
      : 'bg-gray-900',
)
const burgerMid = computed(() =>
  isOpen.value ? 'opacity-0' : isImageRoute.value && !isScrolled.value ? 'bg-white' : 'bg-gray-900',
)
const burgerBot = computed(() =>
  isOpen.value
    ? '-rotate-45 -translate-y-2 bg-[#F8D065]'
    : isImageRoute.value && !isScrolled.value
      ? 'bg-white'
      : 'bg-gray-900',
)

// Click outside to close
const handleClickOutside = (event: MouseEvent) => {
  const isClickInsideMenu = menuRef.value && menuRef.value.contains(event.target as Node)
  const isClickOnToggleButton = (event.target as HTMLElement).closest(
    'button[aria-label="Ouvrir le menu"]',
  )
  if (isOpen.value && !isClickInsideMenu && !isClickOnToggleButton) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Animation soulignement */
a > span {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: #f8d065;
  transform-origin: right center;
  transform: scaleX(0);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  z-index: -1;
}
a:hover > span,
.router-link-active > span {
  transform-origin: left center;
  transform: scaleX(1);
}

.router-link-active {
  font-weight: bold;
}

/* Slide-fade transition for mobile menu */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
