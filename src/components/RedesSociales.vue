<template>
  <div class="flex flex-wrap justify-center gap-4 mt-4">
    <button
      type="button"
      class="button-base group" 
      @click="openLinkedIn"
      aria-label="Visitar mi perfil de LinkedIn"
    >
      <i class="text-lg fab fa-linkedin me-2 "></i> LinkedIn
    </button>
    
    <button
      type="button"
      class="button-base group"
      @click="openGitHub"
      aria-label="Visitar mi perfil de GitHub"
    >
      <i class="text-lg fab fa-github me-2 "></i> GitHub
    </button>
    
    <button
      type="button"
      class="button-base group" 
      @click="downloadCV"
      aria-label="Descargar mi Currículum Vitae (CV)"
      :disabled="downloading"
    >
      <i v-if="!downloading" class="text-lg fas fa-download me-2 group-hover:scale-110"></i>
      <i v-else class="text-lg fas fa-spinner fa-spin me-2"></i>
      {{ downloading ? 'Descargando...' : 'Conectemos' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'RedesSociales',
  data() {
    return {
      downloading: false,
    };
  },
  methods: {
    openLinkedIn() {
      window.open('https://www.linkedin.com/in/willson-huenchulao/', '_blank', 'noopener noreferrer');
    },
    openGitHub() {
      window.open('https://github.com/willsondev', '_blank', 'noopener noreferrer');
    },
    downloadCV() {
      this.downloading = true;
      // Pequeña simulación de delay para que se vea el "Descargando..."
      setTimeout(() => {
        window.open('/Willson-Efrain-Huenchulao-Valdes-CV-FRONTEND.pdf', '_blank', 'noopener noreferrer'); 
        this.downloading = false;
      }, 800); // 0.8 segundos de simulación de descarga
    }
  }
}
</script>

<style scoped>
/* Estilos base para los botones, movidos a una clase compartida */
.button-base {
  @apply flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-lg 
         transition-all duration-300 ease-in-out /* Transiciones para suavizar los efectos */
         bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 
         dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 
         sm:w-48;
}

/* Efectos al pasar el ratón */
.button-base:hover {
  @apply shadow-lg transform translate-y-[-2px]; /* Ligera elevación y movimiento hacia arriba */
}

/* Animaciones de iconos (ejemplo con Tailwind JIT o @keyframes si es necesario) */
/* Para las animaciones de group-hover:animate-bounce/spin necesitas tener configurado TailwindCSS con su JIT mode
   o añadir estas animaciones personalizadas en tu tailwind.config.js o CSS normal.
   Si no usas JIT, puedes definir keyframes así: */
@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.group-hover\:animate-bounce {
  animation: bounce 1s infinite;
}

.group-hover\:animate-spin {
  animation: spin 1s linear infinite;
}

.group-hover\:scale-110 {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}
</style>