<template>
    <div class="contador">
        <p>{{contador}}</p>
        <hr>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            contador:this.numeroInicial
        }
    },
    methods:{
        adicionar(){
            this.contador++;
        },
        subtrair(){
            this.contador--;
        }
    },
    props:{
        numeroInicial:Number
    }
}
</script>

<style scoped>
    .contador p{
        padding: 5px 25px;
        font-size: 30px;
    }
    .contador button{
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background: coral;
        color: white;
        outline: none;
    }
</style>
