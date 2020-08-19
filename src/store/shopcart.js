import { reqAddOrUpdateCart,reqShopCartList} from "@/api"

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
      return Promise.reject(new Error('failed'))
    }
  },

  async getShopCartList({commit}){
    const result = await reqShopCartList()
    if(result.code === 200){
      commit('RECEIVESHOPCARTLIST',result.data)
    }
  }

}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
