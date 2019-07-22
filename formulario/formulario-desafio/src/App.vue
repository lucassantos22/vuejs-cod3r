<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>

				<NomeCompleto v-model="nomeCompleto"></NomeCompleto>	

				<Rotulo nome="E-mail">
					<input type="email" v-model="usuario.email">
				</Rotulo>	

				<Rotulo nome="Senha">
					<input type="password" v-model="usuario.senha">
				</Rotulo>	

				<Rotulo nome="Repetir Senha">
					<input type="password" v-model="usuario.senhaRepetir">
				</Rotulo>		

				<Rotulo nome="Tipo de conta">
					<select v-model="usuario.tipoConta">
						<option value="Normal">Normal</option>
						<option value="Premium">Premium</option>
					</select>
				</Rotulo>	
				
				<hr>

				<button @click.prevent="enviarFormulario()">Enviar formulario</button>
							
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->

			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>

				<Rotulo nome="Nome completo">
					<span>{{nomeCompleto.nome}} {{nomeCompleto.sobrenome}}</span>
				</Rotulo>	

				<Rotulo nome="E-mail">
					<span>{{usuario.email}}</span>
				</Rotulo>	

				<Rotulo nome="Senha">
					<span>{{usuario.senha}}</span>
				</Rotulo>	

				<Rotulo nome="Tipo de conta">
					<span>{{usuario.tipoConta}}</span>
				</Rotulo>	

			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeCompleto from './components/NomeCompleto.vue'

export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	data(){
		return{
			usuario: {
				tipoConta: "Normal"
			},
			nomeCompleto:{
				nome:'',
				sobrenome:''
			},
			enviado: false,
		}
	},
	methods: {
		enviarFormulario(){
			if(!this.nomeCompleto.nome || !this.nomeCompleto.sobrenome || !this.usuario.email || !this.usuario.senha || !this.usuario.tipoConta){
				alert("Todos os campos devem ser preenchidos.");
			}else if(this.usuario.senha != this.usuario.senhaRepetir){
				alert("As senhas devem estar iguais em ambos os campos.");
			}else{
				this.enviado = true;
			}
		}
	},
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
