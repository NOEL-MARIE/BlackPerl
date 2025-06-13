      <div
        class="flex absolute h-full will-change-transform"
        :style="{ transform: `translateX(${scrollX}px)` }"
      >
        <div
          v-for="(image, index) in duplicatedImages"
          :key="index"
          class="group relative flex-shrink-0 w-[590px] h-full mr-8 flex items-center justify-center"
        >
          <img :src="image" alt="Carousel Image" class="w-full h-full object-cover" />
          <div
            class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          >
            <img
              :src="PlayIcons"
              alt="Play"
              class="w-14 h-14 cursor-pointer transition-transform duration-300 group-hover:scale-125"
            />
          </div>
        </div>
      </div>