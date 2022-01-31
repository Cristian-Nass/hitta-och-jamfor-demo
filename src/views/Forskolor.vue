<template>
  <div class="forskolor">
    <h1>Förskolor</h1>
    <h1>{{test}}</h1>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import {getSelectedData} from './../functions/getData'

export default defineComponent({
  name: 'Forskolor',
  components: {
  },
  setup() {

    const test = ref('Cristian')

    onMounted(() => {
      getSelectedData().then((response) => {
        console.log(response)
      });
    })
    return {
      test
    }
  }
});
</script>
