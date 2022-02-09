<template>
<div class="selected-view">
  <button @click="setSelectComponent('ListOfDataTiley')">Tile</button>
  <button @click="setSelectComponent('ListOfDataLinear')">List</button>
</div>
  <component :is="selectComponent" />
</template>

<script lang="ts">
import { defineComponent, ref} from "vue";
import { useRoute } from "vue-router";
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
    const selectComponent = ref('ListOfDataTiley')

    const setSelectComponent = (component: string) => {
      selectComponent.value = component;
      console.log(component);
    }

    return {
      organization,
      selectComponent,
      setSelectComponent
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
