import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

import '@/assets/css/reset.css'

Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
