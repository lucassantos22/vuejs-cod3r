new Vue({
    el: "#app",
    data:{
        statusJogo: false,
        playerLife: 100,
        monsterLife: 100
    },
    methods:{
        iniciarJogo(){
            this.statusJogo = !this.statusJogo;
        },
        desistir(){
            this.statusJogo = !this.statusJogo;   
        }
    },
    computed:{

    },
    watch:{

    }
})