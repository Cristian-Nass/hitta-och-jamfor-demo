<template>
  <div>{{ myName }}</div>
  <div class="parent-grid-div">
    <div class="child-grid-div" v-for="school in schoolsData" :key="school.id">
      <img :src="school.Picture" />
      <div>{{ school.Name }}</div>
      <div>{{ school.Area }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  props: ['dataSchools'],
  components: {},
  name: 'ListOfDataTiley',
  setup(props) {
    const schoolsData = ref(props.dataSchools);

    return {
      schoolsData,
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
  padding: 6px;
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
