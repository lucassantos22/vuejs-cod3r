<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4> <!-- responsividade para dispositivos móveis -->
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{stock.name}} 
                <small>(Preço: {{stock.price | currency}} | Qtde: {{stock.quantity}})</small>
                </strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field v-model.number='quantity' label='Quantidade' type='number'
                :error='!Number.isInteger(quantity) || insufficientQuantity'/>
                <v-btn class='blue darken-3 white--text ml-5' @click='sellStock' 
                :disabled='quantity <= 0 || !Number.isInteger(quantity) || insufficientQuantity'>{{insufficientQuantity ? 'Insuficiente': 'Vender'}}</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>

import {mapActions} from 'vuex';

export default {
    ...mapActions({sellStocks: 'sellStock'}),
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        insufficientQuantity(){
            return this.quantity > this.stock.quantity;
        }
    },
    methods: {
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            this.$store.dispatch('sellStock', order);
            // this.sellStocks();
            this.quantity = 0;
        }
    }
}
</script>

<style>

</style>