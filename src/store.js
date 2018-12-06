import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: {
      active: false,
    }
  },
  mutations: {
    modal(state, bool) {
      state.modal.active = bool;
    },
  },
  actions: {

  },
  getters: {
    modal: state => state.modal,
  },
})
