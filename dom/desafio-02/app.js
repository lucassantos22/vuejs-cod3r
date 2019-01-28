new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alertMethod(){
            alert("Hello World!");
        },
        keydownEvent(event){
            this.valor = event.target.value;
        }
    }
})