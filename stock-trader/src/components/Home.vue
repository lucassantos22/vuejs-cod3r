<template>
    <div class="home">
        <h1>Santos Investimentos</h1>
        <span class="subtitle">Seja quem você merece</span>
        <v-img class="wallpaper" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
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
        position: fixed;
        padding: 10%;
        top:10%;
        color: white;
        z-index: 2;
        font-family: 'Playfair Display', serif;
        font-size: 100px;
        text-shadow: black 1px 1px 1px;
    }
    .home{
        height: calc(100vh - 130px);
        width: 100%;
    }
    .wallpaper{
        height: 100%;
    }
    .subtitle{
        position: fixed;
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