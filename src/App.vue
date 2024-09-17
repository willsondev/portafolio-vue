<script setup>
import { RouterLink, RouterView } from 'vue-router'
import InicioViewVue from './views/InicioView.vue'
import InicioView from './views/InicioView.vue'

</script>

<template >
 
 <header class="max-w-4xl mx-auto px-4 mt-20">
  <div class="flex justify-center">
    <nav class="flex space-x-2 font-bold text-white">
      <RouterLink to="/" class="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2">Inicio</RouterLink>
      <RouterLink to="/proyectos" class="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2">Proyectos</RouterLink>
      <RouterLink to="/experiencia" class="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2">Experiencia</RouterLink>
    </nav>
  </div>
</header>


  <RouterView class="mt-10" />
 
</template>

