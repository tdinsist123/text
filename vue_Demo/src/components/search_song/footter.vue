<template>
  <div>
      <div class="todo-footer"  v-show="todos.length">
        <label>
          <input type="checkbox"  v-model="isequal"/>
        </label>
        <span>
          <span>已完成{{complete_num}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" @click="clear" v-show="complete_num">清除已完成任务</button>
      </div>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  export default {
    name: 'footter',
    computed:{
      ...mapState(['todos']),
      ...mapGetters(['complete_num']),
      isequal:{
        get () {
        return this.$store.getters.isequal
          },
        set (value){    //value是当前checkbox勾选的值，只有true或者false
          this.$store.dispatch('select_all',value)
        }
      }

    },
    methods:{
      clear () {
        this.$store.dispatch('clear')
      },
    }
  }
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}


</style>
