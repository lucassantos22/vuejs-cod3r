<template>
    <v-layout row wrap class='mt-3'>
        <Stock v-for='stock in stockPortfolio' :key='stock.id' :stock='stock'/>
    </v-layout>
</template>

<script>

import Stock from './Stock';

export default {

    components: {
        Stock
    },
    computed: {
        stockPortfolio(){
            return this.$store.getters.stocksPortfolio
        }
    }
}

</script>

<style>

</style>