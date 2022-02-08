<template>
  <!-- <div class="forskolor">
    <h1>{{organization}}</h1>
    <div class="main-div">
      <div class="child-div" v-for="item in schoolsData" :key="item.id">
        <div>{{ item.Name }}</div>
        <div>{{ item.Area }}</div>
        <div>{{ item.Regi }}</div>
      </div>
  </div>
  </div> -->

  <div class="main-div">
    <div class="child-grid" v-for="item in schoolsData" :key="item.id">
      <Card>
        <template #header class="mb-0">
          <img alt="user header" src="../assets/images/school.jpg" />
        </template>
        <template #title>{{ item.Name }}</template>
        <template #subtitle>
          {{ item.Area }}
        </template>
        <template #footer>
          <Button icon="pi pi-check" label="Spara" />
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive, computed, Ref } from "vue";
import { useRoute } from "vue-router";
import { getSchoolsData } from "../functions/getData";
import { Schools, SchoolsEntites } from "../functions/getData";

import Button from "primevue/button";
// import InputText from 'primevue/inputtext'
// import MultiSelect from 'primevue/multiselect';
import Card from "primevue/card";

export default defineComponent({
  name: "Organization",
  components: {
    Card,
    Button,
  },
  setup() {
    const route = useRoute();
    const organization = ref(route.params).value.organization;
    const schoolsState: Ref<SchoolsEntites[]> = ref([]);

    onMounted(() => {
      getSchoolsData()
        .then((response) => response)
        .then((data) => {
          data.entites.forEach((res) => {
            console.log(res);
            schoolsState.value.push(res);
          });
        });
    });

    const schoolsData = computed(() => {
      return schoolsState.value;
    });
    return {
      organization,
      schoolsData,
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
.grid {
  padding: 0;
  margin: 0;
}

.p-card {
  box-shadow: none;
}

.p-button {
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
