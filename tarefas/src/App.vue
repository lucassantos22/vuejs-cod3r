<template>
  <div id="app">
    <h1 :class="{green: todasTarefasFeitas, red:!todasTarefasFeitas}">Tarefas</h1>
    <barraTarefas :tarefas="tarefas"></barraTarefas>
    <tarefa @adicionarTarefa="adicionarTarefa($event)"></tarefa>
    <tarefas :tarefas="tarefas"></tarefas>
  </div>
</template>

<script>
import Tarefas from "@/components/Tarefas.vue";
import Tarefa from "@/components/Tarefa.vue";
import BarraTarefas from "@/components/BarraTarefas.vue";

export default {
  data() {
    return {
      tarefas: []
    };
  },
  methods: {
    adicionarTarefa(tarefa) {
      if (!tarefa.nome) {
        alert("Insira um nome para sua tarefa");
        return;
      }
      let flag = 0;
      if (this.tarefas) {
        this.tarefas.forEach(el => {
          if (el.nome == tarefa.nome) {
            flag = 1;
          }
        });
      }
      if (flag == 1) {
        alert(`A tarefa '${tarefa.nome}' já foi cadastrada.`);
        return;
      }
      this.tarefas.push(tarefa);
    }
  },
  computed: {
    todasTarefasFeitas(){
      const tarefasFeitas = this.tarefas.filter(el=>{
        return el.status;
      });
      if(this.tarefas.length == tarefasFeitas.length){
        return true;
      }else{
        return false;
      }
    }
  },
  components: {
    tarefas: Tarefas,
    tarefa: Tarefa,
    barraTarefas: BarraTarefas
  },
  watch: {
    tarefas: {
      deep: true,
      handler() {
        localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
      }
    }
  },
  created() {
    this.tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
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

.red{
  color: #ff5b33;
}

.green{
  color: #55dd7d;
}

</style>
