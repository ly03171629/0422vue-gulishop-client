import Vue from 'vue'
import App from '@/App'
import router from '@/router'
//组件三大步： 定义  注册  使用

import TypeNav from '@/components/TypeNav'
//全局注册TypeNav  因为它是一个公用的组件
Vue.component('TypeNav',TypeNav)

Vue.config.productionTip = false

new Vue({
  // el:'#app',
  router,   //注册注入给Vue添加路由功能并且让每个组件内部都有两个对象可以拿到 $router $route
  render:h => h(App)     //  1、注册组件App   2、使用组件   3、渲染组件
  // components:{
  //   App
  // },
  // template:'<App/>'   //
}).$mount('#app')