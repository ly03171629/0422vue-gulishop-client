import {reqGoodsListInfo} from '@/api'

const state = {
  goodsListInfo:{}
}
const mutations = {
  RECEIVEGOODSLISTINFO(state,goodsListInfo){
    state.goodsListInfo = goodsListInfo
  }
}
const actions = {
  //如果通过dispatch去调用的函数，接收的第一个参数是context上下文，我们传递的参数是第二个，如果我们传递的是
  //多个参数，需要使用对象传递给第二个
  // dispatch('getGoodsListInfo','aaa','bbb')
  async getGoodsListInfo({commit},searchParams){
    const result = await reqGoodsListInfo(searchParams)
    if(result.code === 200){
      commit('RECEIVEGOODSLISTINFO',result.data)
    }
  }
}
const getters = {
  attrsList(state){
    return state.goodsListInfo.attrsList || []
  },
  goodsList(state){
    return state.goodsListInfo.goodsList || []
  },
  trademarkList(state){
    return state.goodsListInfo.trademarkList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
