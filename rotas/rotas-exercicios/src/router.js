import Vue from 'vue'
import Router from "vue-router"
import Inicio from "./componentes/Inicio"
import Usuario from "./componentes/usuario/Usuario"

Vue.use(Router)

export default new Router({
    mode: 'history', // Ou hash
    routes: [{
        path: '/',
        component: Inicio
    },
    {
        path: '/usuario/:id', 
        component: Usuario,
        props: true
    }]
})