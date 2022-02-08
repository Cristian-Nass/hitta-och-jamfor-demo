<template>
  <div class="forskolor">
    <h1>{{organization}}</h1>
    <div class="main-div">
      <div class="child-div" v-for="item in schoolsData" :key="item.id">
        <div>{{ item.Name }}</div>
        <div>{{ item.Area }}</div>
        <div>{{ item.Regi }}</div>
      </div>
  </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, ref,reactive, computed,Ref } from 'vue';
import { useRoute } from 'vue-router';
import {getSchoolsData} from '../functions/getData'
import {Schools, SchoolsEntites} from '../functions/getData'


export default defineComponent({
  name: 'Organization',
  components: {
  },
  setup() {
    const route = useRoute();
    const organization = ref(route.params).value.organization;
    const schoolsState: Ref<SchoolsEntites[]> = ref([]);

    

    onMounted(() => {
      getSchoolsData().then(response => response)
      .then(data => {
        data.entites.forEach((res) => {
          console.log(res);
          schoolsState.value.push(res)
          
        })
      });   
    })

    const schoolsData = computed(() => {
      return schoolsState.value;
    })
    return {
      organization, schoolsData
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