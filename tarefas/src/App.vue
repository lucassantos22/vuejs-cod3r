<template>
	<div id="app">
		<h1>Tarefas</h1>
		<barraTarefas :tarefas="tarefas"></barraTarefas>
		<tarefa @adicionarTarefa="adicionarTarefa($event)"></tarefa>
		<tarefas :tarefas="tarefas"></tarefas>
	</div>
</template>

<script>

import Tarefas from "@/components/Tarefas.vue"
import Tarefa from "@/components/Tarefa.vue"
import BarraTarefas from "@/components/BarraTarefas.vue"

export default {
	data(){
		return{
			tarefas:[]
		}
	},
	methods: {
		adicionarTarefa(tarefa){
			this.tarefas.push(tarefa);
		}
	},
	components:{
		tarefas: Tarefas,
		tarefa: Tarefa,
		barraTarefas: BarraTarefas
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		font-weight: 300;
		font-size: 3rem;
	}
</style>
