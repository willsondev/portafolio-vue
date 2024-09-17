<template>
  <div class=" text-white  rounded-lg shadow-lg hover:shadow-xl transition duration-300">
    <div class="p-6">
      <h2 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {{ title }}
      </h2>
      <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        {{ company }}
      </p>
      <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        {{ period }}
      </p>
      <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    period: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>

</style>
