<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>Testando componente</h2>
    </div>
</template>

<script>
export default {
    name: 'Component',
    props: {
        msg: String
    },
    methods:{
        alert(){
            "Atenção!";
        }
    }
}
</script>

<style scoped>
    h1{
        color:red
    }

</style>