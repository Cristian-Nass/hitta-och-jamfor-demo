<template>
  <div class="organisation-style">
    <div v-for="(organisation, index) in organizations" :key="index">
      <router-link :to="`/${organisation}`">
        <div class="selected-skol">{{organisation}}</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
  name: "SchoolSelector",
  props: {
    msg: String,
  },
  setup() {
    const organizations: Ref<string[]> = ref(['forskolor', 'grundskolor', 'gymnasieskolor', 'vardOchOmsorgsboenden']);
    
    return {
      organizations: organizations.value,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.organisation-style {
  width: 100%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  align-items: center;
  gap: 1rem;
}

.selected-skol {
  margin: auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 520px;
  min-height: 320px;
  background-color: darkgreen;
  color: seashell;
  background-repeat: no-repeat;
}

a {
  text-decoration: none;
}

</style>

