<template>
  <!-- <div class="parent-grid-div">
    <div class="child-grid-div" v-for="school in schoolsData" :key="school.id">
      <img :src="school.Picture" />
      <div>{{ school.Name }}</div>
      <div>{{ school.Area }}</div>
    </div>
  </div> -->

  <div style="display:flex; flex-direction: column">
    <div>Somthing</div>
    <div>Somthing Else</div>
    
    <div class="parent-grid-div">
      <div class="child-grid-div" v-for="list in lists" :key="list.id">
        <img :src="list.Picture" />
        <div>{{ list.Name }}</div>
        <div>{{ list.Area }}</div>
      </div>

      <div class="page-item pagination-button" style="display: flex">
        <div class="page-link" style="width: 40px">p</div>
        <div
          class="page-link pagination-button"
          v-for="item in Math.ceil(totalRows / perPage)"
          :key="item"
          @click="setCurrentPage(item)">
          {{ item }}
        </div>
        <div class="page-link pagination-button" style="width: 40px">n</div>
      </div>
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
    const schoolsData = computed(() => props.dataSchools);
    const currentPage = ref(1);
    const perPage = ref(8);

    const lists = computed(() => {
      const items = schoolsData.value;
      return items?.slice(
        (currentPage.value - 1) * perPage.value,
        currentPage.value * perPage.value
      );
    });

    const setCurrentPage = (pageNumber: number) => {
      currentPage.value = pageNumber;
    };

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

.pagination-button {
  width: 40px;
  height: 40px;
  cursor: default;
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
