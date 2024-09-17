<template>
  <div class="container mx-auto my-8">
    <!-- Título -->
    <h1 class="mb-6 text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Mis Proyectos Personales
    </h1>

    <!-- Mis proyectos -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ">
      <ProjectCard
  imageSrc="../../public/img/img-proyectos/arqueria.png"
  title="Clases de Arquería"
  description="Aplicación web para reservar clases de arquería con autenticación de usuarios y administración de contenido. Desarrollada con Vue.js."
/>

      
      
      <!--  más ProjectCard según sea necesario -->
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';

export default {
  components: {
    ProjectCard
  }
};
</script>

<style scoped>
/* No es necesario agregar estilos adicionales ya que estamos utilizando Tailwind CSS */
</style>
