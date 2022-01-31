<template>
  <div class="home">
    <SchoolSelector msg="Hitta och Jämför"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SchoolSelector from '@/components/SchoolSelector.vue';

export default defineComponent({
  name: 'Home',
  components: {
    SchoolSelector,
  },
});
</script>
