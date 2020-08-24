// import Home from '@/pages/Home'
//import函数： 1、把对应路径的东西最终打包成单个文件  
            // 2、懒加载的功能：当访问对应的组件的时候，import才会调用实现懒加载
const Home = () => import('@/pages/Home')

// import Search from '@/pages/Search'
const Search = () => import('@/pages/Search')

import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'
import store from '@/store'


export default [
  //专门配置各种路由的地方     路由和路由器要区分
  {
    path:'/center',
    component:Center,
    children:[
      {
        path:'myorder',
        component:MyOrder
      },
      {
        path:'grouporder',
        component:GroupOrder
      },
      {
        path:'',
        redirect: 'myorder'
      }
    ]
  },
  {
    path:'/paysuccess',
    component:PaySuccess,
    beforeEnter: (to, from, next) => {
      if(from.path === '/pay'){
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path:'/pay',
    component:Pay,
    beforeEnter: (to, from, next) => {
      if(from.path === '/trade'){
        next()
      }else{
        next(false)
      }
    }

  },
  {
    path:'/trade',
    component:Trade,
    beforeEnter: (to, from, next) => {
      if(from.path === '/shopcart'){
        next()
      }else{
        next(false)
      }
    }

  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  
  {
    path:'/addcartsuccess',
    component:AddCartSuccess,
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
      if(to.query.skuNum && skuInfo){
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path:'/detail/:skuId',
    component:Detail
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/search/:keyword?',  //?代表这个params参数可以传也可以不传
    component:Search,
    name:'search',
    // props:true  //布尔值写法： 代表只是把params参数通过属性传递给相应的组件
    // props:{name:'赵丽颖'} // 对象写法，只能传递静态的数据  几乎不用  因为需要额外传递静态数据才会用到
    // props:function(route){  //route 收集好参数的路由对象
    //   //把传递过来的params参数和query参数一起映射为组件的属性（）
    //   return {keyword:route.params.keyword,keyword2:route.query.keyword}
    // }
  },
  {
    path:'/login',
    component:Login,
    meta:{
      isHide:true  //证明要隐藏footer
    },
    //路由独享守卫
    // beforeEnter: (to, from, next) => {
    //   if(!store.state.user.userInfo.name){
    //     next()
    //   }else{
    //     next(false)
    //   }
    // }
  },
  {
    path:'/register',
    component:Register,
    meta:{
      isHide:true  //证明要隐藏footer
    },
  },
  //重定向
  {
    path:'/',
    redirect:'/home'
  }
]