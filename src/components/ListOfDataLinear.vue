<template>
    <div class="parent-grid-div" v-for="school in schoolsData" :key="school.id">
      <div class="child-grid-div">
        <img :src="school.Picture" />
      </div>
      <div class="child-grid-div">
        <div>{{ school.Name }}</div>
        <div>{{ school.Area }}</div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed, Ref } from "vue";
import { getSchoolsData } from "../functions/getData";
import { SchoolsEntites } from "../functions/getData";

export default defineComponent({
  components: {},
  name: "ListOfData",
  setup() {
    const schoolsState: Ref<SchoolsEntites[]> = ref([]);

    onMounted(() => {
      getSchoolsData()
        .then((response) => response)
        .then((data) => {
          data.entites.forEach((res) => {
            schoolsState.value.push(res);
          });
        });
    });

    const schoolsData = computed(() => {
      return schoolsState.value;
    });

    return {
      schoolsData,
    };
  },
});
</script>

<style scoped>
  .parent-grid-div {
    display: grid;
    grid-template-columns: 1fr 4fr;
    max-width: 1400px;
    margin: 0 auto;
  }

  .child-grid-div {
    background-color: bisque;
    margin: 6px;
    padding: 6px;
  }

  img {
  width: 100%;
  height: auto;
  }

</style>