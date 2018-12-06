<template>

<div>
  <div class="container">
    <div class="box" id="1">
      1
    </div><br>
    <div class="box" id="2">
      2
    </div><br>
    <div class="box" id="3">
      3
    </div><br>
  </div>
  <input @change="change" type="range" value=20 min="1" max="300">
  <span @click="$store.commit('modal', {active: true})">{{range.value}}</span> 
  <select v-model="select">
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </select>
  <button @click="click()">Click</button>
  <modal></modal>
</div>
</template>

<script>
import ModalVue from './components/Modal.vue';

export default {
  components: {
    modal: ModalVue,
  },
  data() {
    return {
      boxes: [
        {id: 1, name: 'first' , active: true},
        {id: 2, name: 'second', active: false},
        {id: 3, name: 'third' , active: false},
      ],
      select: 1,
      range: {
        value: 20,
        max: 300,
      }
      
    }
  },
  methods: {
    change(e) {
      this.range.value = +e.target.value;
    },
    click(){
      this.moveRight();
    },
    moveRight() {
      x.to(one, 0.5, {x: this.range.value});
    },
  },
  watch: {
    range: {
      handler(v) {
        console.log(v);
      },
      deep: true,
    },
  }
};
</script>
<style scoped>
.box {
  border: 1px solid black;
  padding: 20px;
  margin-left: 200px;
  margin-top: 20px;
  display: inline-block;
  margin-bottom: 20px;
}
.active-box {
  border: 5px solid black;
  font-size: 20px;
}
.container {
  border: 1px solid black;
}
</style>
