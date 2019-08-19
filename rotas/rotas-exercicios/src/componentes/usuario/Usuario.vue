<template>
    <div id="usuario">
        <h2>Usuarios</h2>
        <button sucesso @click="voltar"> Voltar </button>
        <router-view/>
    </div>
</template>

<script>
export default {
    methods: {
        voltar(){
            this.$router.push('/');
        }
    },
}
</script>

<style>

</style>
