<template>
  <div id="app">
    <div class="container">
      <router-link to="/about">about</router-link>
      <router-link to="/home">home</router-link>
      <router-view></router-view>
     </div>
  </div>
</template>

<script>


  export default {
    name: 'App',
  }
</script>

<style>


</style>
