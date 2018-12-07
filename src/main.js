import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../node_modules/bulma/css/bulma.css'
import '../node_modules/bulma-extensions/dist/css/bulma-extensions.min.css'
import bulmaExtensions from '../node_modules/bulma-extensions/dist/js/bulma-extensions.min.js';
Object.defineProperty(Vue.prototype, '$be', { value: bulmaExtensions });


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
