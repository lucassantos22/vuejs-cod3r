<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <button @click="alterarNomeFilho">Alterar nome (filho)</button>
        <p>Nome do usuario: <strong>{{nome}}</strong></p>
    </div>
</template>

<script>

import barramento from '@/barramento.js';

export default {
    props:{
        nome:{
            type: String,
            required: true,
            default: "Anônimo",
            /*default: function(){
                return "Anônimo";
            }*/
        }
    },
    methods: {
        alterarNomeFilho(){
            this.$emit("alterarNomeFilho", "João");
        }
    },
    created() {
        barramento.$on("nomeAlteradoIrmaoPraIrmao", nome=> this.nome = nome);
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
