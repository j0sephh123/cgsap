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
      {id: 1, name: 'uno' , active: true , pos: {
        x: 1, y: 1,
      }},
      {id: 2, name: 'dos',  active: false, pos: {
        x: 1, y: 1,
      }},
      {id: 3, name: 'tres' , active: false, pos: {
        x: 1, y: 1,
      }},
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
    },
    setRange(state, range) {
      state.range.value = range;
    },
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
