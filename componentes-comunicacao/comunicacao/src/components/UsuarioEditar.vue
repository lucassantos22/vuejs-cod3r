<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <button @click="alterarNome">Alterar nome (irmão)</button>
        <p>Nome do usuário: <strong>{{nome}}</strong> </p>
    </div>
</template>

<script>

import barramento from "@/barramento.js"

export default {
    props:{
        nome: {
            type: String
        }
    },
    methods: {
        alterarNome(){
            this.nome = "Jennifer";
            barramento.$emit('nomeAlteradoIrmaoPraIrmao', this.nome);
        }
    },
    
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
