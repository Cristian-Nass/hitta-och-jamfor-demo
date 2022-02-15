<template>
    <div class="parent-grid-div" v-for="school in schoolsData" :key="school.id">
      <div class="child-grid-div" id="image-div">
        <img :src="school.Picture" />
      </div>
      <div class="child-grid-div">
        <div style="padding-top: 10px">{{ school.Name }}</div>
        <div>{{ school.Area }}</div>
      </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  props: ['dataSchools', 'filterInput'],
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
    padding: 4px 0;
    display: grid;
    grid-template-columns: 1fr 4fr;
    max-width: 1400px;
    margin: 0 auto;
  }

  .child-grid-div {
    background-color: bisque;
    width: 100%;
    padding: 4px;
  }

  img {
    background-color: bisque;
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 480px) {
    .parent-grid-div {
      display: block;
    }
    #image-div {
      display:none
    }
  }
</style>