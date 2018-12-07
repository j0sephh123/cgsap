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
      {id: 1, name: '1' , active: true , pos: {
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
    addRemove(state, {action, rect}) {
      let id = state.rects[state.rects.length - 1]['id'] + 1;
      if(action === 'add') {
        let newRect = {
          id, 
          name: id.toString(), 
          active: false , pos: {
            x: 1, y: 1,
          }
        };
        state.rects.push(newRect);
      } else if (action === 'remove') {
        state.rects = state.rects.filter(r => r.id !== rect);
      }
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
