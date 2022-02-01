<template>
  <div class="forskolor">
    <h1>Förskolor</h1>
    <h1>{{test}}</h1>
    <!-- <h1>{{testData}}</h1> -->
    <div class="main-div">
      <div class="child-div" v-for="item in schoolsData" :key="item.id">
        <div>{{ item.name }}</div>
        <div>{{ item.username }}</div>
        <div>{{ item.email }}</div>
      </div>
  </div>
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

    const schoolsState: Schools = reactive({
      data: [],
    });

    onMounted(() => {
      getSelectedData().then(response => response)
        .then(data => {
          data.forEach(element => {
            schoolsState.data.push(element)
          });
        });
    })

    const schoolsData = computed(() => {
      return schoolsState.data;
    })

    console.log(schoolsData);
    
    return {
      test, schoolsData
    }
  }
});
</script>


<style scoped>
 .main-div{
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
 }

 .child-div{
   font-family: Verdana, Geneva, Tahoma, sans-serif;
   text-align: center;
   height: 300px;
   background-color: lightblue;
   margin: 10px;
   padding: 10px;
 }
</style>