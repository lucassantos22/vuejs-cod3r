new Vue({
    el:"#app",
    data:{
        nome:"Maria",
        logado:false
    },
    methods:{
        logar(){
            this.logado = !this.logado;
        }
    }
})