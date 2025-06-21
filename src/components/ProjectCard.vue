<template>
  <div class="w-full p-4 text-white transition duration-300 border rounded-lg shadow-lg hover:shadow-xl ">
    <div class="relative">
      <img
        v-if="!isHovered || !videoSrc" :src="imageSrc"
        alt="project-image"
        class="w-full h-64 rounded-t-lg"
        @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave"
      />
      
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
    <div class="p-2 mt-5">
      <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 dark:text-white">
        {{ title }}
      </h5>
      <p class="block font-sans text-base antialiased font-light leading-relaxed text-gray-300">
        {{ description }}
      </p>
      <h5 
        @click="emitShowChallenges" 
        class="mt-4 font-bold cursor-pointer hover:underline"
      >
        Desafíos
      </h5>
      
      <h5 class="mt-4 font-bold">Tecnologías:</h5>
      <div class="flex flex-row flex-wrap items-start mt-2 space-x-2">
        <span v-for="(icon, index) in technologies" :key="index" v-html="icon" class="flex-shrink-0 w-10 h-10"></span>
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
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    technologies: {
      type: Array,
      default: () => []
    },
    githubUrl: {
      type: String,
      required: true
    },
    demoUrl: {
      type: String,
      required: true
    },
    challenges: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isHovered: false,
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
    },
    handleMouseOver() {
      if (this.videoSrc) {
        this.isHovered = true;
      }
    },
    handleMouseLeave() {
      if (this.videoSrc) {
        this.isHovered = false;
        this.pauseVideo();
      }
    },
    emitShowChallenges() {
      this.$emit('show-challenges', {
        title: this.title,
        description: this.description,
        challenges: this.challenges
      });
    }
  }
};
</script>

<style scoped>
.project-card {
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.icon-container {
  display: flex;
  justify-content: flex-start;
}
</style>
