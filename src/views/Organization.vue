<template>
<div class="selected-view">
  <button @click="setSelectComponent('ListOfDataTiley')">Tile</button>
  <button @click="setSelectComponent('ListOfDataLinear')">List</button>
</div>
  <component :is="selectComponent" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed, Ref } from "vue";
import { useRoute } from "vue-router";
import { getSchoolsData } from "../functions/getData";
import { SchoolsEntites } from "../functions/getData";
import ListOfDataTiley from "./../components/ListOfDataTiley.vue"
import ListOfDataLinear from "./../components/ListOfDataLinear.vue"

export default defineComponent({
  name: "Organization",
  components: {
    ListOfDataTiley,
    ListOfDataLinear
  },
  setup() {
    const route = useRoute();
    const organization = ref(route.params).value.organization;
    const schoolsState: Ref<SchoolsEntites[]> = ref([]);
    const selectComponent = ref('ListOfDataTiley')

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

    const setSelectComponent = (component: string) => {
      selectComponent.value = component;
      console.log(component);
      
    }

    return {
      organization,
      schoolsData,
      selectComponent,
      setSelectComponent
    };
  },
});
</script>

<style scoped>
.main-div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  max-width: 1600px;
  margin: 0 auto;
}
.child-grid{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border:  solid 1px rgba(140, 228, 235, 0.932);
  text-align: center;
  margin: 10px;
  padding: 10px
}
.selected-view {
  width: 100;
  direction: rtl;
}

@media only screen and (max-width: 1200px) {
  .main-div {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
@media only screen and (max-width: 900px) {
  .main-div {
    grid-template-columns: 1fr 1fr 1fr;
  }
}


@media only screen and (max-width: 600px) {
  .main-div {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 480px) {
  .main-div {
    grid-template-columns: 1fr;
  }
}
</style>
