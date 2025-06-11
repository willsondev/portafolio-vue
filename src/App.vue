<script setup>
import { RouterLink, RouterView } from 'vue-router'
import InicioViewVue from './views/InicioView.vue'
import InicioView from './views/InicioView.vue'

</script>

<template >
 
 <header class="px-4 mx-auto mt-20 ">
  <div class="flex justify-center">
    <nav class="flex space-x-2 font-bold text-white">
      <RouterLink to="/" class="relative flex px-2 py-1 align-middle transition-all hover:text-neutral-800 hover:bg-gray-600 hover:rounded-lg hover:px-5 dark:hover:text-neutral-200">Inicio</RouterLink>
      <RouterLink to="/proyectos" class="relative flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-gray-600 hover:rounded-lg hover:px-5">Proyectos</RouterLink>
      <RouterLink to="/experiencia" class="relative flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-gray-600 hover:rounded-lg hover:px-5">Experiencia</RouterLink>
    </nav>
  </div>
</header>


  <RouterView class="mt-10" />
 
 
</template>

<style>

</style>



