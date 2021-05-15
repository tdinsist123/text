import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Msg from '../views/Msg.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // routes是一个数组对象形式
  routes: [
    {
      path : '/home',
      component: Home
    },
    {
      path : '/about',
      component: About,
      children: [
        {
          path : 'msg',
          component: Msg
        },
        // {
        //   path:'',
        //   redirect: '/about/msg'
        // }
      ]
    },
    {
      path : '/',
      redirect : '/home'
    }
  ]
})
