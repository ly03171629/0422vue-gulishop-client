import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'

Vue.use(VueRouter) //声明使用插件  vue的插件都要去声明使用  第三方免了

const router = new VueRouter({
  routes
})
export default router