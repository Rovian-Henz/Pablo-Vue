import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerName: "",
  },
  mutations: {
    playerName(state, payload) {
      state.playerName = payload;
    },
  },
  actions: {},
  modules: {}
})