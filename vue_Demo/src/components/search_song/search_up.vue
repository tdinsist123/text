<template>
  <div>
      <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"  v-model="todo_input"/>
      </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
      name: 'search_up',
      data() {
        return {
            todo_input : '',          //内部使用数据不需要使用vuex组件
          }
      },
      methods:{
        add () {
           console.log('todos')
          const add_name = this.todo_input.trim()
          console.log(add_name)
          if(!add_name){
            return
          }
          const todo ={
            title : add_name,
            complete : false
          }
          console.log(todo)
          this.$store.dispatch('add',todo)
          this.todo_input = ''
          console.log(this.$store.state.todos)
        }


      }
  }
</script>

<style>
/*header*/
.todo-header input {
  width: 575px;
  height: 40px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}



</style>
