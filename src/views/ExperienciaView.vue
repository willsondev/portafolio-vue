<template>
  <div class="container px-4 py-10 mx-auto">
    <h1 class="mb-10 text-3xl font-extrabold text-center text-white sm:text-xl animate-fade-in">
      Mi Trayectoria Profesional
    </h1>

    <div class="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12">
      <ExperienceCard
        title="ESPECIALISTA FRONT-END (VUE.JS) - TALENTO DIGITAL (SENCE)"
        company="TALENTO DIGITAL (SENCE)"
        period="Marzo 2024 – Agosto 2024 | Linares, Chile"
        description="Como parte del exigente programa de Talento Digital, transformé diseños en experiencias web dinámicas con Vue.js, impulsando mejoras tangibles y colaborando en entornos ágiles.
        • Optimización de Componentes: Diseñé y desarrollé componentes Vue.js altamente reutilizables y dinámicos, lo que resultó en un incremento del 25% en la eficiencia del desarrollo y mantenimiento del código base.
        • Integración Eficaz de APIs: Consumí e integré APIs RESTful de forma asíncrona, logrando una reducción del 20% en los tiempos de carga de la aplicación, clave para una mejor UX.
        • Rendimiento Web Superior: Implementé estrategias de optimización de rendimiento que mejoraron la velocidad y fluidez de las aplicaciones web en un notable 30%.
        • Colaboración Ágil e Impacto UX: Participé activamente en equipos ágiles, contribuyendo a la creación de interfaces intuitivas que aumentaron la usabilidad y la retención de usuarios en un 15%."
        :caseStudy="{
          problem: 'La plataforma presentaba tiempos de carga significativos debido a una gestión ineficiente de las llamadas a la API y la renderización de componentes.',
          solution: 'Lideré la implementación de una arquitectura de componentes reutilizables en Vue.js y optimicé el consumo de APIs mediante técnicas de caching y carga diferida (lazy loading).',
          result: 'Esta iniciativa clave se tradujo en una **reducción del 25% en el tiempo de carga total** y una perceptible mejora en la fluidez de la interfaz, elevando la satisfacción del usuario.'
        }"
      />

      <ExperienceCard
        title="DESARROLLADOR FRONT-END - PRÁCTICA PROFESIONAL - MOBIQUOS SPA"
        company="MOBIQUOS SPA"
        period="Enero 2023 – Marzo 2023 | Linares, Chile"
        description="Durante mi práctica, fui clave en la ingeniería front-end para un piloto innovador, aplicando metodologías ágiles y tecnologías modernas para acelerar el desarrollo y mejorar la satisfacción del cliente.
        • Eficiencia en Desarrollo: Utilicé HTML, CSS, JavaScript y Vue.js para construir interfaces robustas, logrando una reducción del 20% en el tiempo de desarrollo de funcionalidades clave.
        • Validación de Diseño Acelerada: Creé maquetas y prototipos interactivos de alta fidelidad con HTML5 y CSS3, lo que incrementó la aceptación del cliente en la fase de diseño en un 30%, minimizando revisiones.
        • Gestión de Versiones Estratégica: Implementé un flujo de trabajo ágil con Git y Gitflow para el control de versiones, optimizando la colaboración y facilitando un lanzamiento anticipado del proyecto en un 10%."
        :caseStudy="{
          problem: 'Existía un cuello de botella en la fase de diseño, donde la falta de prototipos interactivos dificultaba la validación por parte del cliente y generaba retrasos.',
          solution: 'Propuse y desarrollé maquetas y prototipos interactivos en HTML5/CSS3, permitiendo al cliente visualizar y experimentar el producto antes de la codificación completa. Paralelamente, establecí un flujo de trabajo Gitflow para gestionar versiones eficientemente.',
          result: 'Estas acciones resultaron en un **aumento del 30% en la aceptación del diseño** por parte del cliente y permitieron una **entrega del proyecto un 10% antes** de lo previsto, demostrando la eficacia de la prototipación y el control de versiones.'
        }"
      />

      <ExperienceCard
        title="PROGRAMADOR TRAINEE - FIRMAABOGADOS SPA"
        company="FIRMAABOGADOS SPA"
        period="Octubre 2022 – Diciembre 2022 | Linares, Chile"
        description="En este rol, fui responsable de revitalizar la presencia digital de la firma, aplicando mis conocimientos en Angular y Vue.js para construir plataformas web que no solo lucían bien, sino que impulsaban resultados concretos.
        • Eficiencia Operativa: Desarrollé y optimicé plataformas web modulares en Angular y Vue.js, resultando en un incremento del 25% en la eficiencia operativa gracias a interfaces de usuario mejoradas.
        • Aumento de Conversión: Rediseñé interfaces para mejorar la experiencia del usuario, lo que llevó a un aumento del 15% en la tasa de conversión de la plataforma, traduciéndose en más leads/clientes."
        :caseStudy="{
          problem: 'La plataforma existente sufría de una interfaz de usuario compleja y poco intuitiva, lo que impactaba negativamente la tasa de conversión de visitantes a clientes.',
          solution: 'Asumí el desafío de rediseñar y reconstruir secciones clave de la interfaz utilizando Angular y Vue.js, enfocándome en la usabilidad y la simplicidad. Implementé patrones de diseño que guiaran al usuario de forma más efectiva.',
          result: 'El resultado fue un **aumento del 15% en la tasa de conversión** de la plataforma y una percepción general de mayor facilidad de uso, lo que directamente contribuyó al éxito de la firma.'
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

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}



.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}


@media (min-width: 640px) { 
  .sm:grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr)); 
  }
}


@media (min-width: 768px) { 
  .md:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr)); 
  }
}


</style>