<template>
  <div class="experience-card group">
    <div class="mb-4">
      <h3 class="text-xl font-bold text-white transition-colors duration-300 sm:text-2xl group-hover:text-teal-400">{{ title }}</h3>
      <p class="text-gray-300 text-md">{{ company }} <span class="text-sm text-gray-400">| {{ period }}</span></p>
    </div>

    <div class="mb-6 text-base leading-relaxed text-gray-200 description-content" v-html="formattedDescription"></div>

    <div class="case-study-toggle">
      <button @click="toggleCaseStudy" class="flex items-center text-blue-300 transition-colors duration-200 hover:text-blue-200 focus:outline-none">
        <i :class="['fas', showCaseStudy ? 'fa-chevron-up' : 'fa-chevron-down', 'mr-2']"></i>
        <span class="font-semibold">Ver Caso de Estudio</span>
      </button>

      <div v-if="showCaseStudy" class="p-4 mt-4 border border-gray-600 rounded-lg case-study-details bg-gray-700/50 animate-fade-in">
        <p class="mb-2 text-gray-200"><strong class="text-blue-300">Problema:</strong> {{ caseStudy.problem }}</p>
        <p class="mb-2 text-gray-200"><strong class="text-blue-300">Solución:</strong> {{ caseStudy.solution }}</p>
        <p class="text-gray-200"><strong class="text-blue-300">Resultado:</strong> {{ caseStudy.result }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    company: String,
    period: String,
    description: String,
    caseStudy: Object
  },
  data() {
    return {
      showCaseStudy: false // State for toggling case study visibility
    };
  },
  computed: {
    // This computed property will replace the text with HTML for bolding and bullet points
    formattedDescription() {
      // Replace custom bullet markers (e.g., "• ") with proper HTML list items
      let html = this.description.replace(/•\s\*\*(.*?)\*\*(.*?)(\n|$)/g, '<li><strong>$1</strong>$2</li>');
      html = `<ul>${html}</ul>`; // Wrap in an unordered list
      html = html.replace(/<br\s*\/?>/g, ''); // Remove any stray <br> tags
      return html;
    }
  },
  methods: {
    toggleCaseStudy() {
      this.showCaseStudy = !this.showCaseStudy;
    }
  }
};
</script>

<style scoped>
/* Card base styles */
.experience-card {
  @apply  p-6 rounded-xl shadow-lg border border-gray-700
         transition-all duration-300 ease-in-out
         transform hover:scale-[1.02] hover:shadow-2xl hover:border-blue-500; /* Subtle scale & border accent on hover */
}

/* Custom styles for description bullet points */
.description-content ul {
  list-style: none; /* Remove default bullet points */
  padding-left: 0;
}

.description-content li {
  position: relative;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem; /* Space for custom bullet */
}

.description-content li::before {
  content: "•"; /* Custom bullet character */
  color: #38bdf8; /* Tailwind's blue-400, or a color of your choice */
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0;
}

/* Animation for case study toggle */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.case-study-details.animate-fade-in {
  animation: fade-in 0.4s ease-out forwards;
}
</style>