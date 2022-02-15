<template>
  <input type="text" v-model="searchValue" />
  <div class="selected-view">
    <button @click="setSelectComponent('ListOfDataTiley')">Tile</button>
    <button @click="setSelectComponent('ListOfDataLinear')">List</button>
  </div>
  <component :is="selectComponent" :dataSchools="schoolsData" />
</template>

<script lang="ts">
import {defineComponent, ref, Ref, computed, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import ListOfDataTiley from '@/components/ListOfDataTiley.vue';
import ListOfDataLinear from '@/components/ListOfDataLinear.vue';
import {getSchoolsData} from '@/functions/getData';
import {SchoolsEntites} from '@/functions/getData';

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
  width: 100;
  direction: rtl;
}
</style>
