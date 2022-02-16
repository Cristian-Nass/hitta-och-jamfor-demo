<template>
  <div>
    <div style="height: 80vh">
      <div class="parent-grid-div">
        <div class="child-grid-div" v-for="list in lists" :key="list.id">
          <img :src="list.Picture" />
          <div>{{ list.Name }}</div>
          <div>{{ list.Area }}</div>
        </div>
      </div>
    </div>
      <div class="page-item pagination-button">
        <div class="page-link">&lt;&lt;</div>
        <div
          class="page-link"
          v-for="item in Math.ceil(totalRows / perPage)"
          :key="item"
          @click="setCurrentPage(item)"
        >
          {{ item }}
        </div>
        <div class="page-link">&gt;&gt;</div>
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
  name: 'List',
  setup(props) {
    const schoolsData = computed(() => props.dataSchools);
    const currentPage = ref(1);
    const perPage = ref(12);

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
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
  cursor: default;
  display: flex;
  justify-content: center;
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
  .pagination-button {
    position: fixed;
    padding-left: 40px;
}

}

@media only screen and (max-width: 480px) {
  .parent-grid-div {
    grid-template-columns: 1fr;
  }
}
</style>
