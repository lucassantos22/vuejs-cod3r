<template>
    <v-footer class="pa-3" height="60px" dark>
        <v-spacer></v-spacer>
        <div>Todos os direitos reservados, &copy; {{ anoAtual }}</div>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        computed:{
            anoAtual(){
                return new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>
    v-footer{
        position: absolute;
        bottom: 0;
    }
</style>