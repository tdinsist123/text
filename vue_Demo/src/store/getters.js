export default {
  complete_num (state) {
    return state.todos.reduce((pret,todo) => pret + (todo.complete?1:0),0)      //reduce需要设置初始数是什么，否则会返回原值
  },
  isequal (state,getters) {
    return  getters.complete_num === state.todos.length
  }
}
