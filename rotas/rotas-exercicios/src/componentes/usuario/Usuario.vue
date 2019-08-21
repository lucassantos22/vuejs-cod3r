<template>
    <div id="usuario">
        <h2>Usuarios</h2>
        <hr>
        <router-view/>
        <button sucesso @click="voltar"> Voltar </button>
    </div>
</template>

<script>
export default {
    methods: {
        voltar(){
            this.$router.push({name: 'inicio'});
        }
    },
}
</script>

<style>

</style>
