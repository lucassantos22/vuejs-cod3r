export default {
    state:{
        produtos: [],
    },
    getters:{
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations:{
        addProduto(state, produto){
            state.produtos.push(produto);
        }
    },
    actions:{
        addProduto(context, produto){
            setTimeout(()=>{
                context.commit('addProduto', produto);
            }, 1000);
        }
    }
}