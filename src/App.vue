<template>
  <div id="nav">
    <router-link to="/">Back</router-link>
  </div>
  <router-view/>
  <!-- <div style="display: flex; justify-content: space-evenly; ">
    <router-link to="/forskolor"><div class="selected-skol">Forskolor</div></router-link>
    <div class="selected-skol">Grundskolor</div>
  </div> -->
</template>

<style>
 .selected-skol{
   text-align: center;
   padding-top: 20px;
   width: 30vw;
   height: 100px;
   background-color: salmon;
   color: seashell;
 }

 a {
   text-decoration: none;
 }
</style>
