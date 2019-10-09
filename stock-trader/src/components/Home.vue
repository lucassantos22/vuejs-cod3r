<template>
    <div>
        <h1>Santos Investimentos</h1>
        <span class="subtitle">Seja quem você merece</span>
        <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
            <div class="fill-height bottom-gradient"></div>
        </v-img>
    </div>
</template>

<script>
    export default {
        name: "Home",
    }
</script>

<style>
    .v-window v-carousel{
        height: 100vh;
        z-index: 1;
    }
    h1{
        position: absolute;
        padding: 10%;
        top:10%;
        color: white;
        z-index: 2;
        font-family: 'Playfair Display', serif;
        font-size: 100px;
        text-shadow: black 1px 1px 1px;
    }
    v-img{
        height: calc(100vh - 140px);
        width: 100%;
        position: fixed;
    }
    .subtitle{
        position: absolute;
        padding: 16%;
        top:10%;
        left: 20%;
        color: white;
        z-index: 2;
        font-family: 'Playfair Display', serif;
        font-size: 50px;
        text-shadow: black 1px 1px 1px;
        color: skyblue;
    }
</style>