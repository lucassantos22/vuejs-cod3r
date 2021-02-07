export default {
    state: {
        funds: 10000,
        stocks: []
    },
    mutations: {
        buyStock(state, {stockId, quantity, stockPrice}) {
            const record = state.stocks.find(element => element.id === stockId);
            // Verificar se já tenho essa ação
            if (record) {
                record.quantity += quantity;
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity
                });
            }
            state.funds -= stockPrice * quantity;
        },
        sellStock(state, {stockId, quantity, stockPrice}) {
            const record = state.stocks.find(element => element.id === stockId);
            if (record.quantity > quantity) {
                record.quantity -+ quantity;
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1);
            }
            state.funds += stockPrice * quantity;
        },
        setPortfolio(state, portfolio) {
            state.funds = portfolio.funds;
            state.stocks = portfolio.stocksPortfolio || [];
        }
    },
    actions: {
        sellStock({commit}, order) {
            commit('sellStock', order);
        }
    },
    getters: {
        funds(state){
            return state.funds;
        },
        stocksPortfolio(state, getters){
            return state.stocks.map(stock=>{
                const record = getters.stocks.find(element => element.id == stock.id);
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            });
        }
    }
}