<template>
  <div class="flex flex-wrap justify-center gap-4 mt-4">
    <!-- Botón LinkedIn -->
    <button
      type="button"
      class="flex items-center justify-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full sm:w-48"
      @click="openLinkedIn"
    >
      <i class="fab fa-linkedin me-2 text-lg"></i> LinkedIn
    </button>
    
    <!-- Botón GitHub -->
    <button
      type="button"
      class="flex items-center justify-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full sm:w-48"
      @click="openGitHub"
    >
      <i class="fab fa-github me-2 text-lg"></i> GitHub
    </button>
    
    <!-- Botón Descargar CV -->
    <button
      type="button"
      class="flex items-center justify-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full sm:w-48"
      @click="downloadCV"
    >
      <i class="fas fa-download text-lg me-2"></i> Descargar CV
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
      window.open('/Willson-Efrain-Huenchulao-Valdes-CV-FRONTEND.pdf', '_blank'); 
    }
  }
}
</script>

<style scoped>
/* Puedes añadir estilos personalizados aquí si es necesario */
</style>
