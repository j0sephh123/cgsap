import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: {
      active: false,
    },
    range: {
      value: 150,
      max: 300,
    },
    rects: [
      {id: 1, name: 'first' , active: true},
      {id: 2, name: 'second', active: false},
      {id: 3, name: 'third' , active: false},
    ],
    select: 1,
  },
  mutations: {
    modal(state, {active}) {
      state.modal.active = active;
    },
    range(state, {newMax}) {
      state.range.max = newMax;
    },
    selectRect(state, val) {
      val = +val;
      state.select = val;
      state.rects = state.rects.map(rect => {
        rect.active = false;

        if(val === rect.id) {
          rect.active = true;
        }
        return rect;
      })
    }
  },
  actions: {

  },
  getters: {
    modal: state => state.modal,
    range: state => state.range,
    select: state => state.select,
    rects: state => state.rects,
  },
})
