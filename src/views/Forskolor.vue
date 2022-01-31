<template>
  <div class="forskolor">
    <h1>Förskolor</h1>
    <h1>{{test}}</h1>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import axios from 'axios'

const getData = (() => {    
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e)
    );
});

export default defineComponent({
  name: 'Forskolor',
  components: {
  },
  setup() {

    const test = ref('Cristian')

    onMounted(() => {
      getData();
    })
    return {
      test
    }
  }
});
</script>
