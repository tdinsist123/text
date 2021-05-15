<template>
  <div id="app">
    <div class="container">
      <search/>
       <item/>
     </div>
  </div>
</template>

<script>
  import search from "../components/serach_person/search.vue"
  import item from "../components/serach_person/item.vue"
  export default {
      components:{
          search,
          item
      },
      
  }
</script>

<style>
</style>
