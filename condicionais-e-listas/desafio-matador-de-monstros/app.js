new Vue({
    el: "#app",
    data:{
        gameStatus: false,
        playerLife: 100,
        monsterLife: 100,
        logs:[]
    },
    methods:{
        iniciarJogo(){
            this.gameStatus = true;
            this.playerLife = 100;
            this.monsterLife = 100;
        },
        atacar(special=false){
            if(!special){
                this.playerLife = Math.max((this.playerLife - (Math.random() * 20)).toFixed(), 0);
                this.monsterLife = Math.max((this.monsterLife - (Math.random() * 15)).toFixed(), 0);
            }else{
                this.playerLife = Math.max((this.playerLife - (Math.random() * 15)).toFixed(), 0)
                this.monsterLife = Math.max((this.monsterLife - (Math.random() * 20)).toFixed(), 0)
            }

        },
        curar(){
            const valorCuraHeroi = (Math.random() * 10);
            const valorDano = Math.random() * 5;
            const valorCuraMonstro = Math.random() * 3;
            this.playerLife = Math.round(this.playerLife + valorCuraHeroi - valorDano);
            this.monsterLife = Math.round(this.monsterLife + valorCuraMonstro);
        },
        registerLog(text){
            this.logs.unshift(text);
        }
    },
    computed:{
        hasResult(){
            return this.playerLife <= 0 || this.monsterLife <= 0;
        }
    },
    watch:{
        hasResult(result){
            if(result) this.gameStatus = false;
        },
        playerLife(life, lifeBeforeDamage){
            this.registerLog("O player perdeu " + (lifeBeforeDamage - life) +" de vida");
        },
        monsterLife(life, lifeBeforeDamage){
            this.registerLog("O monstro perdeu " + (lifeBeforeDamage - life) +" de vida");  
        }
    }
})