<template>
  <div>
      <ul class="todo-main" v-for="(todo , index ) in todos" :key='index'>
        <li @mouseenter="onenter" @mouseleave="onleave">
          <label>
            <input type="checkbox" v-model="todo.complete"/>
            <span v-text="todo.title"></span>
          </label>
          <button class="btn btn-danger"  v-show="isshow" @click="del_name(index)">删除</button>
        </li>
      </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
      name: 'under',
      data() {
        return {
          isshow : false
        }
      },
      computed:{
        ...mapState(['todos']),
      },
      methods:{
        del_name (index) {
            this.$store.dispatch('del',index)
        },
        onenter(){
          this.isshow = true

        },
        onleave(){
          this.isshow = false
        }
      }
  }
</script>

<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;

}

li:hover{
  background: #ddd;
}

li label {
  /* float: left; */
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}


li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

</style>
