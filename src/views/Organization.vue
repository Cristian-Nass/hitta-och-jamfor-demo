<template>
  <input type="text" v-model="inputValue" />
  
  <div class="selected-view">
    <button @click="setSelectComponent('ListOfDataTiley')">Tile</button>
    <button @click="setSelectComponent('ListOfDataLinear')">List</button>
  </div>
  <component :is="selectComponent" :dataSchools="schoolsData" :filterInput="inputValue" />
</template>

<script lang="ts">
import {defineComponent, ref, Ref, computed, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import ListOfDataTiley from './../components/ListOfDataTiley.vue';
import ListOfDataLinear from './../components/ListOfDataLinear.vue';
import {getSchoolsData} from './../functions/getData';
import {SchoolsEntites} from './../functions/getData';

export default defineComponent({
  name: 'Organization',
  components: {
    ListOfDataTiley,
    ListOfDataLinear,
  },

  setup() {
    const route = useRoute();
    const organization = ref(route.params).value.organization;
    const selectComponent = ref('ListOfDataTiley');
    const propsTest = ref('Hitta och Jamför');
    const schoolsState: Ref<SchoolsEntites[]> = ref([]);
    const inputValue = ref('')

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
      return schoolsState.value
    });


      //  const schoolsData = computed(() => schoolsState.value.filter((data) => 
      //   data.Name.includes(inputValue.value.toLowerCase())));

    const setSelectComponent = (component: string) => {
      selectComponent.value = component;
    };

    // const inputValue = computed(() =>  {
    //   // console.log(searchFilterTerm.value);
    //   return searchFilterTerm.value
    // })
    

    return {
      organization,
      selectComponent,
      setSelectComponent,
      propsTest,
      schoolsData,
      inputValue
    };
  },
});
</script>

<style scoped>
.selected-view {
  width: 100;
  direction: rtl;
}
</style>
