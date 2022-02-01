<template>
  <div class="forskolor">
    <h1>Förskolor</h1>
    <h1>{{test}}</h1>
    <!-- <h1>{{testData}}</h1> -->
    <ul id="example-1">
    <li v-for="item in testData" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
  </div>
</template>


<script>
import { defineComponent, onMounted, ref,reactive, computed } from 'vue';
import {getSelectedData} from './../functions/getData'

export default defineComponent({
  name: 'Forskolor',
  components: {
  },
  setup() {

    const test = ref('Cristian')
    const state = reactive({
      data: [],
    });

    // let data: any;


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
