import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store/store';
import './plugins/axios';

Vue.config.productionTip = false

Vue.filter('currency', value => `R$${value.toLocaleString()}`)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
