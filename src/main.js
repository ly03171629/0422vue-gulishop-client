import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServer'
import 'swiper/css/swiper.css'
import * as API from '@/api'
import './validate'

//图片懒加载的插件
import VueLazyload from 'vue-lazyload'
import loading from '@/assets/images/timg.gif'
// 在图片界面没有进入到可视范围前不加载, 在没有得到图片前先显示loading图片
Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
  loading,  // 指定未加载得到图片之前的loading图片
})




//部分引入element-ui当中的 MessageBox, Message
import { MessageBox, Message, Pagination ,Button} from 'element-ui';  //引入了还没注册或者声明使用
// 声明使用或者注册
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;

// Vue.component(Pagination.name, Pagination);
Vue.use(Pagination)
Vue.use(Button)



//组件三大步： 定义  注册  使用

import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
// import Pagination from '@/components/Pagination'



//全局注册TypeNav  因为它是一个公用的组件
Vue.component('TypeNav',TypeNav)
Vue.component('SliderLoop',SliderLoop)
// Vue.component('Pagination',Pagination)
Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this //配置全局事件总线
    //全局事件总线本质就是一个对象
    //满足条件：
    //1、 所有的组件对象都可以看到这个对象   (决定了这个对象必须是在Vue的原型当中)
    //2、 这个对象必须能够使用$on和$emit    (决定了这个对象必须是能够调用到Vue原型的$on和$emit)
    //最终我们选择了vm作为事件总线是最简单的，因为本来我们就要有一个vm对象，直接拿来作为总线就好了
    Vue.prototype.$API = API  
    //目的并不是以它作为事件总线，因为它没法使用$on和$emit,我们只是为了让所有的组件能用API
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