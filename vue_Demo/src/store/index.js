import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import state from './state.js'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,     //保存data中的属性和值
  getters,    //保存计算属性中的值和属性
  actions,      //当别组件components调用时去使用，间接更换数据值，去调用mutations
  mutations,    //被actions调用，去直接更改state中的值
})

