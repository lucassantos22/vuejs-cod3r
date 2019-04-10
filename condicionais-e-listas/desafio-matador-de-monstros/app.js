new Vue({
    el: "#app",
    data:{
        gameStatus: false,
        playerLife: 0,
        monsterLife: 100
    },
    methods:{
        iniciarJogo(){
            this.gameStatus = true;
            this.playerLife = 100;
            this.monsterLife = 100;
        }
    },
    computed:{
        hasResult(){
            return this.playerLife == 0 || this.playerLife == 0;
        }
    },
    watch:{

    }
})