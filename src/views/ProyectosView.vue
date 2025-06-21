<template>
  <div class="w-full px-4 py-30"> 
    <h1 class="mb-12 text-xl font-bold tracking-tight text-center text-white md:text-xl">
      Mis Proyectos Personales
    </h1>

    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :imageSrc="project.imageSrc"
        :videoSrc="project.videoSrc"
        :title="project.title"
        :description="project.description"
        :technologies="project.technologies"
        :githubUrl="project.githubUrl"
        :demoUrl="project.demoUrl"
        :challenges="project.challenges"
        @show-challenges="handleShowChallenges"
      />
    </div>

    <!-- MODAL -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div class="w-11/12 max-w-md p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-semibold text-black dark:text-white">
          Desafíos del proyecto: {{ selectedProject.title }}
        </h3>

        <ul v-if="selectedProject.challenges?.length" class="pl-5 mt-4 text-gray-800 list-disc dark:text-gray-200">
          <li v-for="(challenge, index) in selectedProject.challenges" :key="index">
            {{ challenge }}
          </li>
        </ul>
        <p v-else class="text-sm text-gray-400">No hay desafíos definidos para este proyecto.</p>

        <div class="mt-6 text-right">
          <button @click="closeModal" class="px-4 py-2 text-white bg-gray-900 rounded hover:bg-gray-700">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
import {
  vuerouterIcon,
  vueIcon,
  firebaseIcon,
  tailwindIcon,
  nodeIcon,
  expressIcon,
  mongoIcon,
  reactIcon,
  awsIcon,
  chartIcon,
  pythonIcon,
  amazonDbIcon,
  awsLotIcon,
  awsGatewayIcon,
  awsEcsIcon,
  vitestIcon
} from '@/utils/icons.js';

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      showModal: false,
      selectedProject: {
        title: '',
        description: '',
        challenges: []
      },
      projects: [
        {
          imageSrc: "/img/panel.png",
          title: "🪐 Plataforma de Monitoreo de Sensores IoT con AWS",
          description: "Este es un proyecto completo (end-to-end) que demuestra el diseño y la implementación de una arquitectura de Internet de las Cosas (IoT)      escalable y basada en la nube. El sistema ingiere, procesa, almacena y visualiza datos de sensores (temperatura y humedad) en tiempo real a través de un panel de control interactivo, El proyecto fue concebido para aplicar y consolidar habilidades en arquitectura de software, servicios en la nube de AWS, desarrollo backend y frontend, y prácticas de DevOps.",
          technologies: [ vueIcon, pythonIcon, chartIcon, amazonDbIcon, awsIcon, awsLotIcon, awsGatewayIcon,  awsEcsIcon ],
          githubUrl: "http://mi-panel-iot-willson-12345.s3-website.us-east-2.amazonaws.com/",
          demoUrl: "http://mi-panel-iot-willson-12345.s3-website.us-east-2.amazonaws.com/",
          challenges: [
  "✅ Optimización de Consultas en DynamoDB: Inicialmente, se utilizaba la operación `Scan`, lo que era ineficiente y no devolvía los datos más recientes. Refactoricé la lógica para usar `Query` con clave de partición (`id_sensor`) y orden por `timestamp`, logrando lecturas más rápidas, económicas y precisas (últimos 50 registros).",

  "⚠️ Manejo de Caché en API Gateway: El dashboard mostraba datos antiguos debido al caché agresivo. Implementé cache-busting en el frontend agregando un parámetro único (`?t=${Date.now()}`) en cada `fetch`, forzando a la API a entregar datos actualizados.",

  "🔒 Configuración de CORS: Las peticiones del frontend eran bloqueadas por políticas CORS. Se resolvió configurando correctamente las cabeceras `Access-Control-Allow-Origin: '*'` tanto en la función Lambda como en la configuración de CORS de API Gateway."
]

        },
        {
          imageSrc: "/img/video-editor-colaborativo.gif",
          title: "📝 Editor de Código Colaborativo en Tiempo Real",
          description: "Una aplicación web full-stack que permite a múltiples usuarios unirse a salas privadas para escribir y editar código de forma sincronizada.",
          technologies: [nodeIcon, tailwindIcon, expressIcon, reactIcon],
          githubUrl: "https://github.com/willsondev/realtime-editor-client",
          demoUrl: "https://realtime-editor-client.vercel.app/",
          challenges: [
            "Sincronización de código con WebSockets",
            "Diseño en tiempo real tipo Google Docs",
            "Compartición de enlaces únicos para salas"
          ]
        },
        {
          imageSrc: "/img/dashboard.png",
          videoSrc: "",
          title: " 📋 Dashboard de Visualización de Instrumentos Financieros",
          description: "Este proyecto es una aplicación web responsiva construida desde cero con Vue 3 (Composition API) y Vite. El objetivo era crear un dashboard interactivo que permitiera a los usuarios explorar una lista de acciones, ver sus datos clave y analizar su rendimiento histórico a través de un gráfico dinámico.",
          technologies: [vueIcon, vitestIcon, chartIcon],
          githubUrl: "https://github.com/willsondev/dashbord-financiero?tab=readme-ov-file",
          demoUrl: "https://dashboard-financiero.netlify.app/",
          challenges: [
  "⚙️ Carga dinámica de módulos: Vite no permitía importar JSON con rutas variables (`import()`), lo que causaba errores. Solucionado con `import.meta.glob`, que permite pre-registrar los archivos.",
  
  "📱 Diseño responsivo de tablas: En móviles, la tabla se desbordaba. Se implementó un diseño adaptativo que convierte las filas en tarjetas apiladas para mejorar la lectura.",

  "📊 Gráfico responsivo: Las fechas del eje X eran ilegibles en móviles. Se ocultó el eje X en pantallas pequeñas para priorizar la línea de tendencia.",

  "🧩 Datos inconsistentes: Faltaban archivos de resumen o historial. Se adaptó el store de Pinia para mostrar siempre los datos básicos y evitar errores, mostrando mensajes como 'No hay datos disponibles'."
]

        },
        {
          imageSrc: "/img/arqueria.png",
          videoSrc: "./img/pc.mp4",
          title: "Clases de Arquería",
          description: "Aplicación web para reservar clases de arquería con autenticación de usuarios y administración de contenido. Desarrollada con Vue.js, Node.js, Express y MongoDB.",
          technologies: [vuerouterIcon, nodeIcon, expressIcon, mongoIcon],
          githubUrl: "https://github.com/willsondev/frontend-arqueria-vue",
          demoUrl: "https://frontend-arqueria.vercel.app",
          challenges: [
            "Autenticación con JWT",
            "Manejo de reservas por día",
            "Rol de administrador"
          ]
        },
        {
          imageSrc: "/img/iniciobarber.png",
          videoSrc: "/img/iphone2.mp4",
          title: "BARBERSHOP",
          description: "Aplicación web con Vue.js y Firebase para gestión de barbería. Incluye reservas en línea, autenticación de usuarios y panel de administración para gestionar servicios, todo con un diseño moderno y rutas protegidas.",
          technologies: [vueIcon, firebaseIcon, tailwindIcon],
          githubUrl: "https://github.com/willsondev/barberia-app",
          demoUrl: "https://barberia-app-sepia.vercel.app",
          challenges: [
            "Autenticación Firebase",
            "Gestión de turnos",
            "Diseño responsivo con Tailwind"
          ]
        },
        {
          imageSrc: "/img/elecciones.png",
          videoSrc: "",
          title: "Aplicación Web de Votaciones",
          description: "Este proyecto es una aplicación web de votaciones enfocada en elecciones regionales y municipales, desarrollada con Vue.js y Firebase. Permite a los usuarios registrarse, consultar candidatos, votar y dejar comentarios.",
          technologies: [vueIcon, firebaseIcon, tailwindIcon],
          githubUrl: "https://github.com/willsondev/votaciones_Linares_2024",
          demoUrl: "https://votaciones-linares-2024.vercel.app/",
          challenges: [
            "Voto único por usuario",
            "Consulta en tiempo real con Firestore",
            "Autenticación por correo"
          ]
        },
        
        
      ]
    };
  },
  methods: {
    handleShowChallenges(project) {
      this.selectedProject = project;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedProject = { title: '', description: '', challenges: [] };
    }
  }
};
</script>

<style scoped>
/* Puedes agregar animaciones o estilos para el modal si lo deseas */
</style>
