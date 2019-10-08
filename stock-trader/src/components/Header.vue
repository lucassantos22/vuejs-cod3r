
<template>
    <v-toolbar color="#f1f1f4">
        <v-toolbar-title>SANTOS INVESTIMENTOS</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat><router-link to="/">Início</router-link></v-btn>
            <v-btn flat><router-link to="/portfolio">Portfólio</router-link></v-btn>
            <v-btn flat><router-link to="/acoes">Ações</router-link></v-btn>
            <v-btn flat @click="finalizarDia">Finalizar dia</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Header",
        methods:{
            finalizarDia(){
                alert('Dia finalizado!')
            }
        }
    }
</script>

<style scoped>
</style>