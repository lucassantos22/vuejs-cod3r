import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter("contadorStrings", (valor)=>{
	let valorFinal = valor.replace(" ", "");
	return valorFinal.length;
});

new Vue({
	render: h => h(App),
}).$mount('#app')
