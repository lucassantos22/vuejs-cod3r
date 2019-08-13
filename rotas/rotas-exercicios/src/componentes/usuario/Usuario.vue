<template>
    <div id="usuario">
        <h2>Usuarios</h2>
        <hr/>
        <p><strong>Código: {{codigo}}</strong></p>
        <button sucesso @click="voltar"> Voltar </button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            codigo: this.$route.params.id
        }
    },
    methods: {
        voltar(){
            this.$router.push('/');
        }
    },
}
</script>

<style>

</style>
