<template>
  <div class=" text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
    <img :src="imageSrc" alt="project-image" />
    <div class="p-6">
      <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {{ title }}
      </h5>
      <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        {{ description }}
      </p>
    </div>
    <div class="p-4 space-x-2 pt-0">
      <button
        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
        @click="openGitHub"
      >
        <i class="fab fa-github me-2"></i> GitHub
      </button>

      <button
        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
        @click="openProyecto"
      >
        Proyecto <i class="fa-solid fa-arrow-right"></i>
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
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  methods: {
    openGitHub() {
      window.open('https://github.com/willsondev/frontend-arqueria-vue', '_blank');
    },
    openProyecto() {
      window.open('https://frontend-arqueria.vercel.app/', '_blank');
    }
  }
}
</script>
