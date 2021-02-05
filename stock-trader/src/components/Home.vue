<template>
    <div>
        <h1 class='display-3 font-weight-light my-4'>Negocie e Consulte suas Ações</h1>
        <v-sheet :elevation='6' class='pa-3' color='primary'>
            <span class='headline white--text font-weight-light'>Você pode Salvar & Carregar os Dados</span>
        </v-sheet>
        <v-sheet :elevation='6' class='pa-3 mt-3' color='success darken-1'>
            <span class='headline white--text font-weight-light'>Clique em 'Finalizar dia' para iniciar um novo dia!</span>
        </v-sheet>
        <v-divider class='my-4' />
        <p class='display-1'><strong>Seu Saldo: </strong>{{funds | currency}}</p>
    </div>
</template>

<script>
export default {
    computed:{
        funds(){
            return this.$store.getters.funds;
        }
    }
}
</script>

<style>

</style>