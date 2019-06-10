<template>
  <div class="tarefas">
    <p v-if="tarefas.length==0">Nenhuma tarefa cadastrada!</p>
    <template v-for="tarefa in tarefas">
      <div v-if="!tarefa.status" class="tarefa vermelho" @click="mudarStatusTarefa(tarefa)">
        <span>{{tarefa.nome}}</span>
      </div>
      <div v-else class="tarefa verde" @click="mudarStatusTarefa(tarefa)">
        <span>{{tarefa.nome}}</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tarefas: Array
  },
  methods: {
    mudarStatusTarefa(tarefa) {
      tarefa.status = !tarefa.status;
    }
  }
};
</script>

<style>
div.tarefa {
  cursor: pointer;
  padding: 30px;
  margin: 25px;
  display: inline-block;
  border-radius: 8%;
}

div.tarefa span {
  font-family: "Montserrat", sans-serif;
}

.vermelho {
  background-color: #ff5b33;
}

.verde {
  background-color: #55dd7d;
  text-decoration: line-through;
}

p {
  font-size: 26px;
  color: #ffce0d;
}

</style>
