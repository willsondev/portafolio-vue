<template>
  <div class="text-center">
    <!-- Botón LinkedIn -->
    <button
      type="button"
      class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-12 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      @click="openLinkedIn"
    >
      <i class="fab fa-linkedin me-2"></i> LinkedIn
    </button>
    
    <!-- Botón GitHub -->
    <button
      type="button"
      class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-12 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      @click="openGitHub"
    >
      <i class="fab fa-github me-2"></i> GitHub
    </button>
    
    <!-- Botón Descargar CV -->
    <button
      type="button"
      class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-12 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      @click="downloadCV"
    >
      <i class="fas fa-download me-2"></i> Descargar CV
    </button>
  </div>
</template>

<script>
export default {
  name: 'RedesSociales',
  methods: {
    openLinkedIn() {
      window.open('https://www.linkedin.com/in/willson-huenchulao/', '_blank');
    },
    openGitHub() {
      window.open('https://github.com/willsondev', '_blank');
    },
    downloadCV() {
      window.open('../../public/Willson-Efrain-Huenchulao-Valdes-cv.pdf', '_blank'); 
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
