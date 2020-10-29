import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    namePlayer: "",
  },
  mutations: {
    namePlayer(state, payload) {
      state.namePlayer = payload;
    },
  },
  actions: {},
  modules: {}
})