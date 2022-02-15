<template>
  <button @click="setView">Toggle View</button>
  <div :class="viewToggle ? 'parent-grid-div-list' : 'parent-grid-div-tile'">
    <div class="child-grid-div" v-for="school in schoolsData" :key="school.id">
      <div :class="viewToggle ? 'parent-flex-div-list' : 'parent-flex-div-tile'">
        <div :style="{width: viewToggle ? '250px' : '100%'}">
          <img :src="school.Picture" />
        </div>
        <div>
          <div>{{ school.Name }}</div>
          <div>{{ school.Area }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref, computed} from 'vue';
import {SchoolsEntites} from '@/functions/getData';

export default defineComponent({
  
  props: {
    dataSchools: Array as PropType<SchoolsEntites[]>,
  },
  
  components: {},
  name: 'ListOfDataTiley',

  setup(props) {
    const viewToggle = ref(false)
    const schoolsData = computed(() => props.dataSchools)
    const setView = (() => {
      viewToggle.value = !viewToggle.value
      console.log(viewToggle.value);
      
    })
    
    return {
      schoolsData,
      setView,
      viewToggle
    };
  },
});
</script>

<style scoped>

.parent-grid-div-tile {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
  max-width: 1400px;
  margin: 0 auto;
}
.parent-grid-div-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.parent-flex-div-tile{
  display: flex;
  flex-direction: column;
}

.parent-flex-div-list{
  display: flex;
  flex-direction: row;
}

.child-grid-div {
  text-align: left;
  background-color: bisque;
  padding: 6px;
}

img {
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 1200px) {
  .parent-grid-div-tile {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
@media only screen and (max-width: 900px) {
  .parent-grid-div-tile {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 600px) {
  .parent-grid-div-tile {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 480px) {
  .parent-grid-div-tile {
    grid-template-columns: 1fr;
  }

  .parent-flex-div-list{
  display: flex;
  flex-direction: column;
  align-items: center;
}
}
</style>
