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
        <span>{{rect.name}}</span><br>
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

      // let top    = e.target.offsetTop;
      // let left   = e.target.offsetLeft;
      // let width  = e.target.offsetWidth;
      // let height = e.target.offsetHeight;
      // console.log(e);
      if(e.target.tagName === 'SPAN') {
        offset.top     = e.target.parentNode.offsetTop;
        offset.left    = e.target.parentNode.offsetLeft;
        offset.width   = e.target.parentNode.offsetWidth;
        offset.height  = e.target.parentNode.offsetHeight;
        
      }


      console.log('top -> ',    offset.top);
      console.log('left -> ',   offset.left);
      console.log('width -> ',  offset.width);
      console.log('height -> ', offset.height);
    


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
  padding: 20px;
  margin: 10px 0px;
  display: inline-block;
}
.active-rect {
  border: 5px solid black;
  font-size: 22px;
}

</style>
