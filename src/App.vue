<template>
  <div id="nav">
    <router-link to="/" class="back-to-home">Back</router-link>
  </div>
  <router-view/>
  <!-- <div style="display: flex; justify-content: space-evenly; ">
    <router-link to="/forskolor"><div class="selected-skol">Forskolor</div></router-link>
    <div class="selected-skol">Grundskolor</div>
  </div> -->
</template>

<style>
.back-to-home {
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;
  text-decoration: none;
  font-size: 18px;
}
</style>
