new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed:{
        resultado(){
            if(this.valor==37){
                return "Valor igual";
            }else{
                return "Valor diferente";
            }
        }
    },
    watch:{
        resultado(){
            setTimeout(() => {
                this.valor=0;
            }, 5000);
        }
    }
});