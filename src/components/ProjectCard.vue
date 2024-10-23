<template>
  <div class="p-4 text-white transition duration-300 rounded-lg shadow-lg hover:shadow-xl">
    <div class="relative">
      <img
        v-if="!isHovered"
        :src="imageSrc"
        alt="project-image"
        class="w-full rounded-t-lg"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
      />
      
      <!-- Solo mostramos el video si existe `videoSrc` -->
      <video
        v-if="isHovered && videoSrc"
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
      <h5 class="mt-4 font-bold">Tecnologías:</h5>
      <div class="flex flex-row items-start mt-2 mr-32 space-x-2">
        <span v-html="icon1" class="w-10 h-10"></span>
        <span v-html="icon2" class="w-10 h-10" v-if="icon2"></span>
        <span v-html="icon3" class="w-10 h-10"></span>
        <span v-html="icon4" class="w-10 h-10"></span>
        <span v-html="icon5" class="w-10 h-10"></span>
        <span v-html="icon6" class="w-10 h-10"></span>
        <span v-html="icon7" class="w-10 h-10"></span>
      </div>
    </div>
    <div class="flex p-4 pt-0 space-x-2">
      <button
        class="px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all bg-gray-900 rounded-lg shadow-md select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:shadow-lg"
        type="button"
        @click="openGitHub"
      >
        <i class="fab fa-github me-2"></i> Código
      </button>

      <button
        class="px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all bg-gray-900 rounded-lg shadow-md select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:shadow-lg"
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
      required: false // Ahora `videoSrc` no es requerido
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
    },
    githubUrl: {
      type: String,
      required: true
    },
    demoUrl: {
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
      window.open(this.githubUrl, '_blank');
    },
    openProyecto() {
      window.open(this.demoUrl, '_blank');
    },
    playVideo() {
      const video = this.$refs.video;
      if (video) {
        video.play();
      }
    },
    pauseVideo() {
      const video = this.$refs.video;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      this.isHovered = false;
    }
  }
}
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si los necesitas */
</style>
