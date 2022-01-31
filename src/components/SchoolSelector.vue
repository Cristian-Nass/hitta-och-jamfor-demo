<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
    <div style="display: flex; justify-content: space-evenly; ">
    <router-link to="/forskolor"><div class="selected-skol" id="pre-school"></div></router-link>
    <router-link to="/grundskolor"><div class="selected-skol" id="elementry-school"></div></router-link>
  </div>
  <div>
    <h1></h1>
  </div>
    <div style="display: flex; justify-content: space-evenly; ">
    <router-link to="/gymnasieskolor"><div class="selected-skol" id="high-school"></div></router-link>
    <router-link to="/vardOchOmsorgsboenden"><div class="selected-skol" id="care-center"></div></router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SchoolSelector',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .selected-skol{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    width: 520px;
    min-height: 320px;
    background-color: darkgreen;
    color: seashell;
    background-repeat: no-repeat;
  }

  a {
    text-decoration: none;
  }

  #pre-school{
    background-image: url('./../assets/images/pre-school.jpg');
  }

  #elementry-school{
    background-image: url('./../assets/images/elementry-school.jpg');
  }

  #high-school{
    background-image: url('./../assets/images/high-school.jpg');
  }

  #care-center{
    background-image: url('./../assets/images/care-center.jpg');
  }
  
</style>
