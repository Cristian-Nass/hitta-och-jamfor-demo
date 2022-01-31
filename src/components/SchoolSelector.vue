<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
    <div style="display: flex; justify-content: space-evenly; ">
    <router-link to="/forskolor"><div class="selected-skol">Forskolor</div></router-link>
    <router-link to="/grundskolor"><div class="selected-skol">Grundskolor</div></router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SchoolSelector',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
