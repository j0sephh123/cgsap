<template>
<div class="section">
<div class="box">
  <div class="columns is-multiline">
    <div 
      v-for="rect in rects" 
      :key="rect.id"
      class="column is-12"
      >
      <div
        @click="click(rect, $event)" 
        :class="rect.active ? 'rect active-rect' : 'rect'">
        <span>{{rect.name}}</span>
        <button 
          class="button"
          @click.stop="$store.commit('addRemove', {action: 'remove', rect: rect.id})">Click</button>
        <br>
        <span>x: {{rect.pos.x}} </span>
        <span>y: {{rect.pos.y}} </span>
        
      </div>
    </div>
  </div>

  <div class="field">
    <slider></slider>
    <controls></controls>
  </div>

  <modal></modal>
</div>
</div>
</template>

<script>


import ModalVue from './components/Modal.vue';
import { mapGetters } from 'vuex';
import SliderVue from './components/Slider.vue';
import ControlsVue from './components/Controls.vue';

export default {
  mounted() {
    
  },
  components: {
    modal: ModalVue,
    slider: SliderVue,
    controls: ControlsVue,
  },
  computed: {
    ...mapGetters(['range', 'rects', 'select'])
  },
  methods: {
    change(e) {
      this.range.value = +e.target.value;
    },
    click(rect, e) {
      const offset = {
        top    : e.target.offsetTop,
        left   : e.target.offsetLeft,
        width  : e.target.offsetWidth,
        height : e.target.offsetHeight,
      }

      if(e.target.tagName === 'SPAN') {
        for (const i in offset) {
          let c = i
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');

          offset[i] = e.target.parentNode[`offset${c}`];
        }
      } // if span element, go to parentNode for coordinates, doesn't always work.
      console.log(offset);

      this.$store.commit('selectRect', rect.id)
    },
  },
  watch: {
    // '$store.state.range': {
    //   handler(v) {
    //     console.log(v);
    //   },
    //   deep: true,
    // },
    select(val) {
      this.$store.commit('selectRect', val);
    },
  }
};
</script>
<style scoped>
.rect {
  cursor: pointer;
  border: 1px solid black;
  padding: 10px;
  margin: 10px 0px;
  display: inline-block;
}
.active-rect {
  border: 3px solid black;
  font-size: 18px;
}

</style>
