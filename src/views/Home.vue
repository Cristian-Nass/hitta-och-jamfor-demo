<template>
  <input type="text" v-model="searchValue" />
  <div class="selected-view">
    <!-- <button @click="setSelectComponent('ListOfDataTiley')">Tile</button> -->
    <!-- <button @click="setSelectComponent()">List</button> -->
  </div>
  <component v-if="loadData" :is="selectComponent" :dataSchools="schoolsData" />
  <div class="loading-data" v-else>Loading Data...</div>
</template>

<script lang="ts">
import {defineComponent, ref, Ref, computed, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import List from '@/components/List.vue';
import Map from '@/components/Map.vue';
import {getSchoolsData} from '@/functions/getData';
import {SchoolsEntites} from '@/functions/getData';

export default defineComponent({
  name: 'Home',
  components: {
    List,
    Map,
  },

  setup() {
    const route = useRoute();
    const organization = ref(route.params).value.organization;
    const selectComponent = ref('List');
    const propsTest = ref('Hitta och Jamför');
    const schoolsState: Ref<SchoolsEntites[]> = ref([]);
    const searchValue = ref('')
    const listView = ref (false);
    const loadData = ref(false);

    onMounted(() => {
      getSchoolsData()
        .then((response) => response)
        .then((data) => {
          data.entites.forEach((res) => {
            schoolsState.value.push(res);
          });
          loadData.value = true
        });
    });

    const schoolsData = computed(() => schoolsState.value
      .filter((f) => f.Name.toLowerCase().includes(searchValue.value.toLowerCase())));

    const setSelectComponent = () => {
      selectComponent.value = listView.value ? 'ListOfDataTiley' : 'ListOfDataLinear'
      listView.value = !listView.value
    };

    return {
      organization,
      selectComponent,
      setSelectComponent,
      propsTest,
      schoolsData,
      searchValue,
      listView,
      loadData
    };
  },
});
</script>

<style scoped>
.selected-view {
  width: 100;
  direction: rtl;
}
.loading-data{
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  animation:example  2s infinite;
  color: purple;
}

@keyframes example {
  0% {opacity: 1}
  50% {opacity: 0}
  100% {opacity: 1}
}

</style>
