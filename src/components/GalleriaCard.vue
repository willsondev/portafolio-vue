<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mt-5">
    <div class="grid">
      <div>
        <img class="h-26 w-full rounded-lg" src="../../public/img/1.jpg" alt="">
      </div>
      <div>
        <img class="h-44 mb-2 w-full rounded-lg" src="../../public/img/2.jpg" alt="">
      </div>
    </div>
    <div class="grid gap-3">
      <div>
        <img class="h-70 rounded-lg" src="../../public/img/3.jpg" alt="">
      </div>
      <div>
        <img class="mb-4 h-62 w-full rounded-lg" src="../../public/img/4.png" alt="">
      </div>
    </div>
    <div class="grid hidden md:block"> <!-- Ocultar en pantallas móviles -->
      <div>
        <img class="h-56 w-full rounded-lg" src="../../public/img/5.jpg" alt="">
      </div>
      <div>
        <img class="mb-3 h-60 w-full rounded-lg" src="../../public/img/6.jpg" alt="">
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
