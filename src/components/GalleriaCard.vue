<template>
  <div class="grid grid-cols-2 gap-2 mt-5 md:grid-cols-3">
    <div class="grid">
      <div class="animate__animated animate__fadeIn">
        <img class="w-full rounded-lg h-26" src="../../public/img/1.jpg" alt="">
      </div>
      <div class="animate__animated animate__fadeIn">
        <img class="w-full mb-2 rounded-lg h-44" src="../../public/img/2.jpg" alt="">
      </div>
    </div>
    <div class="grid gap-3">
      <div class="animate__animated animate__fadeIn">
        <img class="rounded-lg h-70" src="../../public/img/3.jpg" alt="">
      </div>
      <div class="animate__animated animate__fadeIn">
        <img class="w-full mb-4 rounded-lg h-62" src="../../public/img/4.png" alt="">
      </div>
    </div>
    <div class="grid hidden md:block"> <!-- Ocultar en pantallas móviles -->
      <div class="animate__animated animate__fadeIn">
        <img class="w-full h-56 rounded-lg" src="../../public/img/5.jpg" alt="">
      </div>
      <div class="animate__animated animate__fadeIn">
        <img class="w-full mb-3 rounded-lg h-60" src="../../public/img/6.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleriaCard'
}
</script>

<style  scoped>

</style>
