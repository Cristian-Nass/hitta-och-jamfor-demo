<template>
  <div class="forskolor">
    <h1>{{organization}}</h1>
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
import { useRoute } from 'vue-router';
import {getSelectedSchoolData} from '../functions/getData'
import {School} from '../functions/getData'

interface Schools {
  data: School[];
}

export default defineComponent({
  name: 'Organization',
  components: {
  },
  setup() {
    const test = ref('Cristian')
    const route = useRoute();
    const organization = ref(route.params).value.organization;
    const schoolsState: Schools = reactive({
      data: [],
    });

    

    onMounted(() => {
      getSelectedSchoolData('users').then(response => response)
        .then(data => {
          data.forEach(element => {
            schoolsState.data.push(element)
          });
        });
    })

    const schoolsData = computed(() => {
      return schoolsState.data;
    })

    // console.log(schoolsData);
    
    return {
      test, schoolsData, organization
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

 @media only screen and (max-width: 1100px) {
  .main-div {
   grid-template-columns: 1fr 1fr 1fr;
  }
}

 @media only screen and (max-width: 800px) {
  .main-div {
   grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 552px) {
  .main-div {
   grid-template-columns: 1fr;
  }
}
</style>