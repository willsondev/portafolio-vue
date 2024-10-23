<template>
    <div class="text-white">
        <h1 class="mb-8 text-2xl font-medium cssanimation sequence leFadeInLeft">Hola, Soy Willson Huenchulao Valdes. </h1>
        <h1 class="text-2xl font-medium tracking-tighter">Ingeniero Informático y Desarrollador Front-End</h1>
        <p class="prose prose-neutral dark:prose-invert">
            Como ingeniero informático con experiencia en desarrollo front-end, 
            <router-link to="/proyectos" class="relative text-white">
                Trabajo
                <span class="absolute bottom-0 left-0 w-full h-1 bg-slate-600"></span>
            </router-link>
            en crear interfaces de usuario eficientes y atractivas utilizando tecnologías modernas. Mi enfoque está en la implementación de soluciones técnicas que optimicen la experiencia del usuario y faciliten la interacción intuitiva con aplicaciones web.
        </p>



        <div data-scrolly-top="flipY" class="text-white"> 
     it's easy to do 
</div>
    </div>
</template>

<script>
export default {
  name: 'IntroduccionCard',

  mounted() {
    this.animateSequence();
    this.animateRandom();
  
  },

  methods: {
    
    animateSequence() {
      const a = document.getElementsByClassName('sequence');
      for (let i = 0; i < a.length; i++) {
        let $this = a[i];
        let letter = $this.innerHTML.trim();
        let str = '';
        let delay = 50;

        for (let l = 0; l < letter.length; l++) {
          if (letter[l] !== ' ') {
            str += `<span style="animation-delay:${delay}ms; -moz-animation-delay:${delay}ms; -webkit-animation-delay:${delay}ms;">${letter[l]}</span>`;
            delay += 50;
          } else {
            str += letter[l];
          }
        }
        $this.innerHTML = str;
      }
    },

    animateRandom() {
      const a = document.getElementsByClassName('random');
      for (let i = 0; i < a.length; i++) {
        let $this = a[i];
        let letter = $this.innerHTML.trim();
        let delay = 70;
        let delayArray = [];
        let randLetter = [];

        for (let j = 0; j < letter.length; j++) {
          while (true) {
            let random = this.getRandomInt(0, letter.length - 1);
            if (!delayArray.includes(random)) {
              delayArray[j] = random;
              break;
            }
          }
        }

        for (let l = 0; l < delayArray.length; l++) {
          let str = '';
          let index = delayArray[l];
          if (letter[index] !== ' ') {
            str = `<span style="animation-delay:${delay}ms; -moz-animation-delay:${delay}ms; -webkit-animation-delay:${delay}ms;">${letter[index]}</span>`;
            randLetter[index] = str;
          } else {
            randLetter[index] = letter[index];
          }
          delay += 80;
        }

        randLetter = randLetter.join("");
        $this.innerHTML = randLetter;
      }
    },

    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    
  }
}
</script>

<style>
.cssanimation, .cssanimation h1 {
    animation-duration: 1s;
    animation-fill-mode: both;
}

.cssanimation h1 { display: inline-block; }

.leFadeInLeft h1 { animation-name: leFadeInLeft; }
@keyframes leFadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-60px);
    }
    to {
        opacity: 1;
    }
}
</style>
