<template>
    <div>
        <v-toolbar
                dark
                src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        >

            <v-toolbar-title><span>S</span>ANTOS <span>I</span>NVESTIMENTOS</v-toolbar-title>

            <div class="flex-grow-1"></div>

            <v-btn icon>
                <v-icon></v-icon>
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "Header",
        methods:{
            finalizarDia(){
                alert('Dia finalizado!');
            }
        }
    }
</script>

<style scoped>
    v-toolbar-title{
        font-family: 'Playfair Display', serif;
    }
    span{
        color: orange;
        font-size: 35px;
    }
</style>