<template>
    <div>
        <Rotulo nome="Nome">
            <input type="text" @input="alterarNome">
        </Rotulo>	

        <Rotulo nome="Sobrenome">
            <input type="text" @input="alterarSobrenome">
        </Rotulo>
    </div>
</template>

<script>
import Rotulo from "@/components/Rotulo.vue"
export default {
    props:{
        value: Object
    },
    components:{
        Rotulo: Rotulo
    },
    methods:{
        alterarNome(event){
            this.$emit("input", { 
                nome: event.target.value, 
                sobrenome: this.value.sobrenome 
            });
        },
        alterarSobrenome(event){
            this.$emit("input", { 
                nome:this.value.nome, 
                sobrenome: event.target.value 
            });
        },
    }
}
</script>

<style>

</style>
