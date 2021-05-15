<template>
  <div>
    <h1 v-if="content">请输入内容进行搜索</h1>
  <div class="row">
    <div class="card" v-for="(message,index) in messages" :key = 'index'>
          <a :href="message.url" target="_blank">
          <img :src="message.photo_url" style='width: 100px'/></a>
          <p class="card-text">{{ message.name }}</p>
    </div>
  </div>
</div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  export default {
    name : 'item',
    data() {
      return {
        messages : '',
        content : true
      }
    },
    mounted() {
      //一般使用于兄弟组件     订阅，subscribe('发布信息名',(msg,传递过来的值))
      PubSub.subscribe('search_value',(msg , search_name ) =>{
        const url = `https://api.github.com/search/users?q=${search_name}`;
        axios.get(url).then(response  =>{
          console.log(response)
            const res = response.data.items
            const messages = res.map(item => ({
              url : item.html_url,
              photo_url : item.avatar_url,
              name : item.login
            }))
            console.log(messages)
            this.messages = messages
            this.content = false
        }).catch(error => {
          console.log(error)
        })
      })
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
