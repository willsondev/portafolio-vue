<template>
  <div class="container mx-auto ">
    <h1 class="text-white text-xl font-bold  text-center">Experiencias</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
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
retención de usuarios en un 15%.
"
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
anticipado del proyecto en un 10%.
Además, me enfoqué en:
•Desarrollo de pruebas unitarias con Jest y Vue Test Utils,
reduciendo los errores en producción en un 40%.
•Configuración de pruebas de UI con Cypress para
automatización de pruebas funcionales y de rendimiento,
mejorando la eficiencia de las pruebas en un 35%.
"
      />
      <ExperienceCard
        title="PROGRAMADOR TRAINEE"
        company="FIRMAABOGADOS SPA"
        period="10/2022 – 12/2022 | Linares, Chile"
        description="•Desarrollé plataformas web en Angular y Vue.js,
incrementando la eficiencia operativa en un 25%.
•Mejoré la tasa de conversión en un 15% mediante
interfaces optimizadas y escalables.
•Implementé funcionalidades interactivas que aumentaron
la participación en un 18%.
•Elaboré documentación técnica, reduciendo errores en un
25% y acelerando la adopción de nuevas herramientas en
un 20%."
      />
      <!--  ExperienceCard según sea necesario -->
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

</style>
