<template>
<div :class="modal.active ? 'modal is-active' : 'modal'">
  <div @click="$store.commit('modal', {active: false})" class="modal-background"></div>

  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Change max range</p>
      <button class="delete" @click="$store.commit('modal', {active: false})"></button>
    </header>
    <section class="modal-card-body">
      <div class="columns">
        <div class="column">
          Current value: {{range.max}}
        </div>
        <div class="is-divider-vertical" data-content="Max Value"></div>
        <div class="column">
          <input 
          v-model="maxRange" 
          type="number" 
          class="input" 
          >
        </div>
      </div>
      
    </section>
    <footer class="modal-card-foot">
      <button @click="save()" class="button is-success">Save changes</button>
      <button @click="$store.commit('modal', {active: false})" class="button">Cancel</button>
    </footer>
  </div>

</div>
</template>

<script>
import {mapGetters} from 'vuex'
// @click="$store.commit('modal', {active: true})">{{range.value}}/{{range.max}}
// @change="change" 
export default {
  data() {
    return {
      maxRange: '',
    }
  },
  methods: {
    save() {
      this.$store.commit('range', {newMax: this.maxRange})
      this.$store.commit('modal', {active: false})
    }
  },
  computed: {
    ...mapGetters(['modal', 'range'])
  },
}
</script>
