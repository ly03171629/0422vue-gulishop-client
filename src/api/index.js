//这个文件是所有的接口请求函数的文件
//每一个请求接口数据功能都给它定义成一个函数，以后哪里需要去请求数据，就调用对应的这个接口请求函数就好了
import Ajax from '@/ajax/Ajax'  //刚才暴露出去的instance
import mockAjax from '@/ajax/mockAjax'

// 路径/api/product/getBaseCategoryList    
// 请求方式：GET
// 请求参数：无
export const reqCategoryList = () => {
  return Ajax({
    url:'/product/getBaseCategoryList',
    method:'get'
  })
}
// reqCategoryList()

//请求banner和floor  mock的接口请求函数
export const reqBannerList = () => {
  return mockAjax({
    url:'/banner',
    method:'get'
  })
}

export const reqFloorList = () => {
  return mockAjax({
    url:'/floor',
    method:'get'
  })
}


// /api/list POST  
// data:{
//   "category3Id": "61",
//   "categoryName": "手机",
//   "keyword": "小米",
//   "order": "1:desc",
//   "pageNo": 1,
//   "pageSize": 10,
//   "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//   "trademark": "4:小米"
// }

//searchParams代表搜索参数，这个参数必须要有，至少得是一个没有属性的空对象
//参数如果是一个空的对象，代表搜索请求获取的是全部的数据
//参数如果有搜索条件，代表获取的就是搜索条件匹配的数据

export const reqGoodsListInfo = (searchParams) => {
  return Ajax({
    url:'/list',
    method:'post',
    data:searchParams,
  })
}

// reqGoodsListInfo({})

///api/item/{ skuId }  get
export const reqGoodsDetailInfo = (skuId) => {
  return Ajax({
    url:`/item/${ skuId }`,
    method:'get'
  })
}


//请求添加或者修改购物车（或者修改购物车数量）
///api/cart/addToCart/{ skuId }/{ skuNum }  post

export const reqAddOrUpdateCart = (skuId,skuNum) => {
  return Ajax({
    url:`/cart/addToCart/${ skuId }/${ skuNum }`,
    method:'post',
  })
} 


//请求购物车列表数据
///api/cart/cartList  get  无

export const reqShopCartList = () => {
  return Ajax({
    url:'/cart/cartList',
    method:'get'
  })
}


// export const reqShopCartList = () => Ajax.get('/cart/cartList')


// /api/cart/checkCart/{skuID}/{isChecked}  请求选中状态  get


export const reqUpdateIsCheck = (skuId,isChecked) => {
  return Ajax({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
    method:'get'
  })
}


//请求删除一个购物车数据   /api/cart/deleteCart/{skuId}  delete

export const reqDeleteCart = (skuId) => {
  return Ajax({
    url:`/cart/deleteCart/${skuId}`,
    method:'delete'
  })
}


//请求注册  /api/user/passport/register   post    {mobile,password,code}

export const reqRegister = (userInfo) => {
  return Ajax({
    url:'/user/passport/register',
    method:'post',
    data:userInfo
  })
}


//请求登录  /api/user/passport/login  post  {mobile,password}

export const reqLogin = (userInfo) => {
  return Ajax({
    url:'/user/passport/login',
    method:'post',
    data:userInfo
  })
}


//请求退出登录  /api/user/passport/logout
export const reqLogout = () => {
  return Ajax({
    url:'/user/passport/logout',
    method:'get',
  })
}



