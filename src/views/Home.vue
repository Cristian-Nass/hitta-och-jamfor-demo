<template>
  <input type="text" v-model="searchValue" />
  <div class="selected-view">
    <button @click="setSelectComponent('List')">List</button>
    <button @click="setSelectComponent('Map')">Map</button>
  </div>
  <component :is="selectComponent" :dataSchools="schoolsData" />
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

    onMounted(() => {
      getSchoolsData()
        .then((response) => response)
        .then((data) => {
          data.entites.forEach((res) => {
            schoolsState.value.push(res);
          });
        });
    });

    const schoolsData = computed(() => schoolsState.value
      .filter((f) => f.Name.toLowerCase().includes(searchValue.value.toLowerCase())));

    const setSelectComponent = (component: string) => {
      selectComponent.value = component;
    };

    return {
      organization,
      selectComponent,
      setSelectComponent,
      propsTest,
      schoolsData,
      searchValue
    };
  },
});
</script>

<style scoped>
.selected-view {
  width: 100vw;
  padding: 10px 10px 10px 85vw;
}
</style>
