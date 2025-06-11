<template>
  <div class="container w-full px-4 mx-auto py-30 "> 
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
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
// Importamos todos los íconos de nuestro archivo centralizado
import { 
  vuerouterIcon, 
  vueIcon, 
  firebaseIcon, 
  tailwindIcon, 
  nodeIcon, 
  expressIcon, 
  mongoIcon,
  reactIcon
} from '@/utils/icons.js'; 

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          imageSrc: "/img/arqueria.png",
          videoSrc: "./img/pc.mp4",
          title: "Clases de Arquería",
          description: "Aplicación web para reservar clases de arquería con autenticación de usuarios y administración de contenido. Desarrollada con Vue.js, Node.js, Express y MongoDB.",
          technologies: [vuerouterIcon, nodeIcon, expressIcon, mongoIcon],
          githubUrl: "https://github.com/willsondev/frontend-arqueria-vue",
          demoUrl: "https://frontend-arqueria.vercel.app"
        },
        {
          imageSrc: "/img/iniciobarber.png",
          videoSrc: "/img/iphone2.mp4",
          title: "BARBERSHOP",
          description: "Aplicación web con Vue.js y Firebase para gestión de barbería. Incluye reservas en línea, autenticación de usuarios y panel de administración para gestionar servicios, todo con un diseño moderno y rutas protegidas.",
          technologies: [vueIcon, firebaseIcon, tailwindIcon],
          githubUrl: "https://github.com/willsondev/barberia-app",
          demoUrl: "https://barberia-app-sepia.vercel.app"
        },
        {
          imageSrc: "/img/elecciones.png",
          videoSrc: "", 
          title: "Aplicación Web de Votaciones",
          description: "Este proyecto es una aplicación web de votaciones enfocada en elecciones regionales y municipales, desarrollada con Vue.js y Firebase. Permite a los usuarios registrarse, consultar candidatos, votar y dejar comentarios. Se utilizan servicios de autenticación de Firebase, Firestore para la base de datos y Vercel para el despliegue.",
          technologies: [vueIcon, firebaseIcon, tailwindIcon],
          githubUrl: "https://github.com/willsondev/votaciones_Linares_2024",
          demoUrl: "https://votaciones-linares-2024.vercel.app/"
        },
        {
            imageSrc: "/img/video-editor-colaborativo.gif", // Reemplaza con una imagen real
             // Reemplaza con un video real o deja vacío
            title: "📝 Editor de Código Colaborativo en Tiempo Real",
            description: "¡Bienvenido al Editor de Código Colaborativo! Una aplicación web full-stack que permite a múltiples usuarios unirse a salas privadas para escribir y editar código de forma sincronizada y en tiempo real.",
            technologies: [nodeIcon, tailwindIcon, expressIcon, reactIcon], // Ejemplo
          githubUrl: "https://github.com/willsondev/realtime-editor-client",
            
            demoUrl: "https://realtime-editor-client.vercel.app/"
        },
       
       
      ]
    }
  }
};
</script>

<style scoped>

</style>