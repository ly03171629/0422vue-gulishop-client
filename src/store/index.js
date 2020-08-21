import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import user from './user'
import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
import trade from './trade'

const state = {}
const mutations = {}
const actions = {}
const getters = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    user,
    home,
    search,
    detail,
    shopcart,
    trade
  }   //合并小的store到大的store身上
})