import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import Contador from "./Contador.vue";
// Vue.component('contador', Componente);

// Se fosse global

new Vue({
  render: h => h(App),
}).$mount('#app')
