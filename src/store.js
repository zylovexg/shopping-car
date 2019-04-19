import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carData: []
  },
  mutations: {
    GET_CAR_DATA (state, data) {
      state.carData = data
    },
    ADD_DATA (state, index) {
      state.carData[index].total++
      // 需要调用改变购物车数据接口
    },
    REDUCE_DATA (state, index) {
      if (state.carData[index].total > 1) {
        state.carData[index].total--
        // 需要调用改变购物车数据接口
      }
    }
  },
  actions: {
    getCarData (context, data) {
      context.commit('GET_CAR_DATA', data)
    },
    addData (context, index) {
      context.commit('ADD_DATA', index)
    },
    reduceData (context, index) {
      context.commit('REDUCE_DATA', index)
    }
  }
})
