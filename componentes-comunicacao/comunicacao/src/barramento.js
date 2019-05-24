import Vue from "vue";
export default new Vue({
    methods:{
        alterarNome(nome){
            this.$emit("alterarIdadePeloBarramento", nome)
        },
        quandoNomeMudar(c){
            this.$on("alterarIdadePeloBarramento", c);
        }
    }
});