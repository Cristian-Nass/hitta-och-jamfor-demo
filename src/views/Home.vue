<template>
  <div class="home">
    <StartComponent msg="Hitta och Jämför"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StartComponent from '@/components/StartComponent.vue';

export default defineComponent({
  name: 'Home',
  components: {
    StartComponent,
  },
});
</script>
