<template>
  <div class="text-white transition duration-300 rounded-lg shadow-lg hover:shadow-xl">
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

      <!-- Sección de Estudio de Caso -->
      <div v-if="caseStudy" class="block mt-4 font-sans text-base antialiased font-light leading-relaxed text-inherit">
        <h4 class="text-lg font-semibold">Estudio de Caso</h4>
        <div class="mt-2">
          <strong>Problema:</strong>
          <p>{{ caseStudy.problem }}</p>
        </div>
        <div class="mt-2">
          <strong>Solución:</strong>
          <p>{{ caseStudy.solution }}</p>
        </div>
        <div class="mt-2">
          <strong>Resultado:</strong>
          <p>{{ caseStudy.result }}</p>
        </div>
      </div>
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
    },
    caseStudy: {
      type: Object,
      default: null // Si no se pasa un caso de estudio, esta sección no se mostrará
    }
  }
};
</script>

<style scoped>
/* Puedes agregar tus estilos personalizados aquí */
</style>
