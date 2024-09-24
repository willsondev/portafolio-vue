<template>
  <div class="text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
    <div class="relative">
      <!-- Imagen que se mostrará por defecto -->
      <img
        v-if="!isHovered"
        :src="imageSrc"
        alt="project-image"
        class="w-full rounded-t-lg"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
      />
      <!-- Video que se mostrará al pasar el cursor -->
      <video
        v-if="isHovered"
        :src="videoSrc"
        class="w-full rounded-t-lg"
        muted
        preload="auto"
        playsinline
        @mouseenter="playVideo"
        @mouseleave="pauseVideo"
        ref="video" 
      ></video>
    </div>
    <div class="p-6">
      <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 dark:text-white">
        {{ title }}
      </h5>
      <p class="block font-sans text-base antialiased font-light leading-relaxed text-gray-300">
        {{ description }}
      </p>
      <h5 class="font-bold mt-4">Tecnologías:</h5>
      <div class="flex flex-row space-x-2 items-start mt-2 mr-32">
        <span v-html="icon1" class="h-10 w-10"></span>
        <span v-html="icon2" class="h-10 w-10" v-if="icon2"></span>
        <span v-html="icon3" class="h-10 w-10"></span>
        <span v-html="icon4" class="h-10 w-10"></span>
        <span v-html="icon5" class="h-10 w-10"></span>
        <span v-html="icon6" class="h-10 w-10"></span>
        <span v-html="icon7" class="h-10 w-10"></span>
      </div>
    </div>
    <div class="p-4 space-x-2 pt-0 flex justify-center">
      <button
        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg"
        type="button"
        @click="openGitHub"
      >
        <i class="fab fa-github me-2"></i> Codigo
      </button>

      <button
        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg"
        type="button"
        @click="openProyecto"
      >
        DEMO <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    videoSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon1: {
      type: String,
      required: true
    },
    icon2: {
      type: String,
      required: false
    },
    icon3: {
      type: String,
      required: true
    },
    icon4: {
      type: String,
      required: true
    },
    icon5: {
      type: String,
      required: true
    },
    icon6: {
      type: String,
      required: true
    },
    icon7: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isHovered: false
    };
  },
  methods: {
    openGitHub() {
      window.open('https://github.com/willsondev/frontend-arqueria-vue', '_blank');
    },
    openProyecto() {
      window.open('https://frontend-arqueria.vercel.app/', '_blank');
    },
    playVideo() {
      const video = this.$refs.video; // Accedemos al video usando ref
      if (video) {
        video.play(); // Reproduce el video
      }
    },
    pauseVideo() {
      const video = this.$refs.video; // Accedemos al video usando ref
      if (video) {
        video.pause(); // Pausa el video
        video.currentTime = 0; // Reinicia el video
      }
      this.isHovered = false; // Cambia el estado de hovered
    }
  }
}
</script>

<style scoped>
.relative {
  position: relative;
}
</style>
