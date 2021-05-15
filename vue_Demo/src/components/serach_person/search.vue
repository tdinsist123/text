<template>
  <div>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">搜索Github上的用户</h3>
      <input type="text" placeholder="enter the name you search" v-model="search_name"/>
      <!-- <p>搜索值：{{search_name}}</p> -->
      <button @click="search_song">Search</button>
  </section>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'

  export default {
    name : 'search',
	data() {
		return {
			search_name : '',
      }
    },
    methods:{
      search_song () {
          const search_name = this.search_name.trim();
          if (search_name){
            PubSub.publish('search_value',search_name)        //发布消息publish('消息名'，传递值)
          }
      }
    }
  }
</script>

<style>
</style>
