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
          @click="$store.commit('selectRect', rect.id)" 
          :class="rect.active ? 'rect active-rect' : 'rect'">
          {{rect.name}}
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

  },
  watch: {
    '$store.state.range': {
      handler(v) {
        console.log(v);
      },
      deep: true,
    },
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
