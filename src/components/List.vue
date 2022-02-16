<template>
  <!-- <div class="parent-grid-div">
    <div class="child-grid-div" v-for="school in schoolsData" :key="school.id">
      <img :src="school.Picture" />
      <div>{{ school.Name }}</div>
      <div>{{ school.Area }}</div>
    </div>
  </div> -->

  <div id="app">
    {{Math.ceil(totalRows/perPage)}}
  <div class="myList">
    <div v-for="list in lists" :key="list.id">
    {{ list.Name }}
  </div>
  <button v-for="item in Math.ceil(totalRows/perPage)" :key="item" @click="setCurrentPage(item)">{{item}}</button>

  
  <!-- <b-pagination
     :total-rows="totalRows" 
     v-model="currentPage"
     :per-page="perPage"
  /> -->
  </div>
</div>
</template>

<script lang="ts">
import {defineComponent, ref, PropType, computed} from 'vue';
import {SchoolsEntites} from '@/functions/getData';

export default defineComponent({
  
  props: {
    dataSchools: Array as PropType<SchoolsEntites[]>,
  },
  
  components: {},
  name: 'List.vue',

  setup(props) {

    const schoolsData = computed(() => props.dataSchools)
    const currentPage = ref(1);
    const perPage = ref(5);

    const lists = computed(() => {
      const items = schoolsData.value;
      return items?.slice(
        (currentPage.value - 1) * perPage.value,
        currentPage.value * perPage.value
      )
    });

    const setCurrentPage = (pageNumber: number)  => {
      currentPage.value = (pageNumber)
    }

    const totalRows = computed(() => schoolsData.value?.length);
    
   

    return {
      schoolsData,
      currentPage,
      perPage,
      lists,
      totalRows,
      setCurrentPage,
    };
  },
});
</script>

<style scoped>
.parent-grid-div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.child-grid-div {
  background-color: bisque;
  margin: 4px;
  padding: 8px;
}

img {
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 1200px) {
  .parent-grid-div {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
@media only screen and (max-width: 900px) {
  .parent-grid-div {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 600px) {
  .parent-grid-div {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 480px) {
  .parent-grid-div {
    grid-template-columns: 1fr;
  }
}
</style>
