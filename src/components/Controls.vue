<template>
<div>
  <select
    @change="$store.commit('selectRect', select)" 
    class="select" 
    v-model="selectData">
    <option 
      v-for="rect in rects" 
      :key="rect.id"
    >{{rect.id}}</option>
    
  </select>
  <button class="button" @click="click()">Click</button>
</div>

</template>

<script>
import {TweenMax} from 'gsap';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      selectData: 3,
    }
  },
  methods: {
    click(){
      TweenMax
        .to('.active-rect', 0.5, {x: `+=${this.range.value}`});
    },
  },
  computed: {
    ...mapGetters(['range', 'rects', 'select'])
  }
}
</script>
