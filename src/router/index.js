import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'
import store from '@/store'
Vue.use(VueRouter) //声明使用插件  vue的插件都要去声明使用  第三方免了



//解决多次触发编程式导航  报错的问题
const originPush = VueRouter.prototype.push  //保存原来的push函数 ，后面修改之后可以找到原来的
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location,onResolved,onRejected){
  //调用push根本没有处理promise的回调，无论成功和失败
  if(onResolved === undefined && onRejected === undefined){
    return originPush.call(this,location).catch(() => {})
  }else{
    //代表调用push的时候，传了处理promise的回调
    return originPush.call(this,location,onResolved,onRejected)
  }
}

VueRouter.prototype.replace = function(location,onResolved,onRejected){
  //调用push根本没有处理promise的回调，无论成功和失败
  if(onResolved === undefined && onRejected === undefined){
    return originReplace.call(this,location).catch(() => {})
  }else{
    //代表调用push的时候，传了处理promise的回调
    return originReplace.call(this,location,onResolved,onRejected)
  }
}


const router = new VueRouter({
  routes,
  //控制跳转过去之后滚动位置在哪里
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  //to  代表目标（准备去到的组件） 路由对象
  //from  代表起始（从哪个组件） 路由对象
  //next : 放行还是不放行  是个函数  
  //next()  放行
  //next(false) 不放行 停在当前位置
  //next('/') 代表跳到指定的路径对应的组件
  let targetPath = to.path
  // 订单交易页面trade   //支付相关  pay paysuccess   //用户中心center  center/myorder center/grouporder 
  if(targetPath.indexOf('/trade') === 0 || targetPath.startsWith('/pay') || targetPath.startsWith('/center')){
    //代表你要去的地方需要判断用户是否登录
    if(store.state.user.userInfo.name){
      next()
    }else{
      //没有登录
      next('/login?redirect='+targetPath)
    }
  }else{
    //代表不需要用户登录的放行
    next()
  }
})



export default router