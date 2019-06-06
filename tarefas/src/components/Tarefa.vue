<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <div class="input-group-text">
        <input type="radio" checked aria-label="Radio button for following text input">
      </div>
    </div>
    <input type="text" class="form-control" aria-label="Text input with radio button" v-model="tarefa">
    <button type="button" class="btn btn-secondary btn-sm" @click="adicionarTarefa()">Adicionar</button>
  </div>
  
</template>

<script>

export default {
    data(){
        return{
            tarefa:null
        }
    },
    methods: {
        adicionarTarefa(){
            this.$emit("adicionarTarefa", {"nome":this.tarefa, status: false})
        }
    },
};
</script>

<style>
    .input-group{
        width: 50%;
        margin: 0 auto;
        margin-bottom: 50px;
    }
</style>
