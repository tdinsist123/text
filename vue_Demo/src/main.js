import Vue from "vue"
import App from "./App"
import router from './router'
import store from './store'


// Vue.config.productionTip = false

new Vue({
  el:'#app',
  components: { App },
  template: '<App/>',
  //可以简化写成这样
  // render : h => h(App),
  // 如同下面
  // render : function (createElement) {
  //   return createElement(App)
  // }
  router,
  store
})
