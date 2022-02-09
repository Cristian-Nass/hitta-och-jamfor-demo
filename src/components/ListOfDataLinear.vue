<template>
  <div>{{myName}}</div>
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
import {defineComponent, ref} from "vue";

export default defineComponent({
  props: ['dataSchools'],
  components: {},
  name: "ListOfDataLinear",
  setup(props) {
    const schoolsData = ref(props.dataSchools)

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