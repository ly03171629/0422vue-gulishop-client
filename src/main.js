import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServer'
import 'swiper/css/swiper.css'


// import {reqCategoryList} from '@/api'
// reqCategoryList()


import '@/api' //为了测试用的

//组件三大步： 定义  注册  使用

import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import Pagination from '@/components/Pagination'



//全局注册TypeNav  因为它是一个公用的组件
Vue.component('TypeNav',TypeNav)
Vue.component('SliderLoop',SliderLoop)
Vue.component('Pagination',Pagination)




Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this //配置全局事件总线
  },
  // el:'#app',
  router,   //注册注入给Vue添加路由功能并且让每个组件内部都有两个对象可以拿到 $router $route
  render:h => h(App),
  store
      //  1、注册组件App   2、使用组件   3、渲染组件
  // components:{
  //   App
  // },
  // template:'<App/>'   //
}).$mount('#app')