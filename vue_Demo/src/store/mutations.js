
//由actions触发，之间更新状态
import {ADD} from './mutation-types.js'
import {DEL,CLEAR,SELECT_ALL} from './mutation-types.js'

export default {

    [ADD] (state,{todo}) {
      state.todos.unshift(todo)           //unshift()  是把数据插在第一位，push是把数据插入最后
    },

    [DEL] (state,{index}) {
      state.todos.splice(index,1)
    },

    [CLEAR](state){
      state.todos = state.todos.filter(todo => !todo.complete)
    },

    [SELECT_ALL](state,{check}){
      state.todos.forEach(item => item.complete = check)
    }
}
