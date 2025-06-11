<template>
  <div class="flex items-center justify-center w-full h-screen p-6">
    <div class="grid w-full h-full grid-cols-10 grid-rows-4 gap-4">
      
      <!-- Imagen 1 -->
      <div class="relative group flex items-center justify-center col-span-4 row-span-3 overflow-hidden bg-indigo-200 rounded-3xl opacity-0 animate-fadeInUp delay-[0ms]">
        <img class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" src="../../public/img/1.jpg" alt="futuros trabajos" />
        <div class="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100">
          <p class="text-xl font-semibold">Futuros Trabajos</p>
        </div>
      </div>

      <!-- Imagen 2 -->
      <div class="relative group flex items-center justify-center col-span-3 row-span-1 overflow-hidden bg-indigo-200 xl:col-span-4 rounded-3xl opacity-0 animate-fadeInUp delay-[150ms]">
        <img class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" src="../../public/img/3.jpg" alt="" />
        <div class="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
          <p class="text-lg font-medium">Equipo de trabajo</p>
        </div>
      </div>

      <!-- Imagen 3 -->
      <div class="relative group flex items-center justify-center col-span-3 row-span-1 overflow-hidden bg-indigo-200 xl:col-span-2 rounded-3xl opacity-0 animate-fadeInUp delay-[300ms]">
        <img class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" src="../../public/img/6.jpg" alt="" />
        <div class="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
          <p class="text-lg font-medium">Diseño Creativo</p>
        </div>
      </div>

      <!-- Imagen 4 -->
      <div class="relative group flex items-center justify-center col-span-3 row-span-2 overflow-hidden bg-indigo-200 rounded-3xl opacity-0 animate-fadeInUp delay-[450ms]">
        <img class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" src="../../public/img/4.png" alt="" />
        <div class="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100">
          <p class="text-lg font-medium">Proyectos UX/UI</p>
        </div>
      </div>

      <!-- Imagen 5 -->
      <div class="relative group flex items-center justify-center col-span-3 row-span-2 overflow-hidden bg-indigo-200 rounded-3xl opacity-0 animate-fadeInUp delay-[600ms]">
        <img class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" src="../../public/img/2.jpg" alt="" />
        <div class="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
          <p class="text-lg font-medium">Tecnología y desarrollo</p>
        </div>
      </div>

      <!-- Imagen 6 -->
      <div class="relative group flex items-center justify-center col-span-4 row-span-1 overflow-hidden bg-indigo-200 rounded-3xl opacity-0 animate-fadeInUp delay-[750ms]">
        <img class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" src="../../public/img/5.jpg" alt="" />
        <div class="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
          <p class="text-lg font-medium">Innovación continua</p>
        </div>
      </div>

      <!-- Imagen 7 -->
      <div class="relative group flex items-center justify-center col-span-6 row-span-1 overflow-hidden bg-indigo-200 rounded-3xl opacity-0 animate-fadeInUp delay-[900ms]">
        <img class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" src="../../public/img/logotipo.jpg" alt="" />
        <div class="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100">
          <p class="text-xl font-bold">❤️</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleriaCard'
}
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>
