new Vue({
	el: '#desafio',
	data: {
		classe3:'',
		classe:'',
		classe4:'',
		condicao:"false"
	},
	methods: {
		iniciarEfeito() {
			this.condicao = !this.condicao;
		},
		iniciarProgresso() {

		}
	}
})
