<template>
  <div class="forskolor">
    <h1>Förskolor</h1>
    <h1>{{test}}</h1>
    <!-- <h1>{{testData}}</h1> -->
    <ul id="example-1">
    <li v-for="item in testData" :key="item.id">
      {{ item.name }} - {{ item.username }} - {{ item.email }}
    </li>
  </ul>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, ref,reactive, computed } from 'vue';
import {getSelectedData} from './../functions/getData'
import {School} from './../functions/getData'

interface Schools {
  data: School[];
}

export default defineComponent({
  name: 'Forskolor',
  components: {
  },
  setup() {

    const test = ref('Cristian')
    const state: Schools = reactive({
      data: [],
    });

    onMounted(() => {
      getSelectedData().then(response => response)
        .then(data => {
          data.forEach(element => {
            state.data.push(element)
          });
        });
    })

    const testData = computed(() => {
      return state.data;
    })

    console.log(testData);
    
    return {
      test, testData
    }
  }
});
</script>
