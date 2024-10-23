<template>
  <div class="container mx-auto">
    <h1 class="text-xl font-bold text-center text-white">Experiencias</h1>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1">
      <ExperienceCard
        title="DESARROLLO FRONT-END TRAINEE - VUE.JS"
        company="TALENTO DIGITAL (SENCE)"
        period="03/2024 – 08/2024 | Linares, Chile"
        description="Participé en el programa Desarrollo Front-end Trainee,
donde adquirí habilidades en:
•Desarrollé componentes reutilizables y dinámicos en
Vue.js, mejorando la eficiencia en un 25%.
•Integré APIs RESTful, reduciendo el tiempo de carga en
un 20%.
•Optimicé el rendimiento de aplicaciones web, mejorando
la velocidad en un 30%.
•Colaboré en equipos ágiles, mejorando la usabilidad y
retención de usuarios en un 15%."
        :caseStudy="{
          problem: 'El tiempo de carga era elevado debido a múltiples llamadas innecesarias a la API.',
          solution: 'Implementé técnicas de optimización como la reutilización de componentes y cache de datos API.',
          result: 'Reducción del tiempo de carga en un 25%, mejorando la experiencia de usuario.'
        }"
      />
      <ExperienceCard
        title="PRÁCTICA PROFESIONAL"
        company="MOBIQUOS SPA"
        period="01/2023 – 03/2023 | Linares, Chile"
        description="Analicé, diseñé y desarrollé artefactos de ingeniería
frontend para un piloto utilizando:
•HTML, CSS, JavaScript y Vue.js, logrando una reducción
del tiempo de desarrollo en un 20%.
•Maquetas y prototipos interactivos con HTML5 y CSS3,
mejorando la aceptación del cliente en la fase de diseño en
un 30%.
•Gestión de versiones con Git, implementando un flujo de
trabajo ágil con Gitflow, lo que permitió un lanzamiento
anticipado del proyecto en un 10%."
        :caseStudy="{
          problem: 'El cliente tenía dificultad en visualizar las interacciones del prototipo.',
          solution: 'Desarrollé maquetas interactivas y un sistema de versiones ágil.',
          result: 'Mejora en la aceptación del diseño en un 30% y una entrega más rápida del proyecto.'
        }"
      />
      <ExperienceCard
        title="PROGRAMADOR TRAINEE"
        company="FIRMAABOGADOS SPA"
        period="10/2022 – 12/2022 | Linares, Chile"
        description="•Desarrollé plataformas web en Angular y Vue.js,
incrementando la eficiencia operativa en un 25%.
•Mejoré la tasa de conversión en un 15% mediante
interfaces optimizadas y escalables."
        :caseStudy="{
          problem: 'La plataforma tenía una baja tasa de conversión debido a una interfaz compleja.',
          solution: 'Rediseñé la interfaz haciéndola más intuitiva y accesible.',
          result: 'Aumento en la tasa de conversión en un 15% y una mayor retención de usuarios.'
        }"
      />
    </div>
  </div>
</template>

<script>
import ExperienceCard from '@/components/ExperienceCard.vue';

export default {
  components: {
    ExperienceCard
  }
};
</script>

<style scoped>
/* Aquí puedes mantener tus estilos previos o personalizar más si lo deseas */
</style>
