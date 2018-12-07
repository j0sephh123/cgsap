<template>
<div>
  <button class="button" @click="click()">Click</button>
</div>

</template>

<script>
import {TweenMax} from 'gsap';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      
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
