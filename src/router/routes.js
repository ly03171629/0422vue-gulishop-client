import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

export default [
  //专门配置各种路由的地方     路由和路由器要区分
  {
    path:'/ShopCart',
    component:ShopCart
  },
  
  {
    path:'/addcartsuccess',
    component:AddCartSuccess
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
    }
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