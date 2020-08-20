import { reqAddOrUpdateCart,reqShopCartList ,reqUpdateIsCheck} from "@/api"

const state = {
  shopCartList:[]
}
const mutations = {
  RECEIVESHOPCARTLIST(state,shopCartList){
    state.shopCartList = shopCartList
  }
}
const actions = {
  //异步发请求
  async addOrUpdateCart({commit},{skuId,skuNum}){
    const result = await reqAddOrUpdateCart(skuId,skuNum)
    if(result.code === 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))  //返回的是失败的promise 结果就是这个return返回的失败的promise的原因
      // return 'failed'  行 但是async函数将永远返回成功状态的promise
    }
  },

  async getShopCartList({commit}){
    const result = await reqShopCartList()
    if(result.code === 200){
      commit('RECEIVESHOPCARTLIST',result.data)
    }
  },


  async updateIsCheck({commit},{skuId,isChecked}){
    const result = await reqUpdateIsCheck(skuId,isChecked)
    if(result.code === 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))  //返回的是失败的promise 结果就是这个return返回的失败的promise的原因
      // return 'failed'  行 但是async函数将永远返回成功状态的promise
    }
  },


  async updateAllIsCheck({commit,state,dispatch},isChecked){
    let promises = []
    state.shopCartList.forEach(item => {
      //遍历每一个购物车，如果选中状态本身就和传递过来要修改的状态一样  就不用发请求
      if(item.isChecked === isChecked) return
      
      //如果说不一样，都需要发送请求，而且所有的每一个的请求都成功，才算成功
      let promise = dispatch('updateIsCheck',{skuId:item.skuId,isChecked})

      promises.push(promise)

    })
    
    return Promise.all(promises)
  }

}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
