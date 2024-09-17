<template>
  <div class="text-white">
    
    <IntroduccionCard />
    <GalleriaCard />
    <RedesSociales />
    <HabilidadesCard />
  </div>

</template>

<script >
import IntroduccionCard from "@/components/IntroduccionCard.vue";
import GalleriaCard from '@/components/GalleriaCard.vue';
import RedesSociales from '@/components/RedesSociales.vue';
import HabilidadesCard from '@/components/HabilidadesCard.vue';

export default {
  components: { IntroduccionCard, GalleriaCard, RedesSociales, HabilidadesCard }
}
</script>

