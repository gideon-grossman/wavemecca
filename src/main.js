import Vue from 'vue'
import 
App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue';
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/stylesheets/main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
