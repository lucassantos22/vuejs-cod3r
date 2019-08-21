import Vue from 'vue';
import Router from "vue-router";
import Inicio from "./componentes/Inicio";
import Usuario from "./componentes/usuario/Usuario";
import UsuarioDetalhe from "./componentes/usuario/UsuarioDetalhe";
import UsuarioEditar from "./componentes/usuario/UsuarioEditar";
import UsuarioLista from "./componentes/usuario/UsuarioLista";

Vue.use(Router)

export default new Router({
    mode: 'history', // Ou hash
    routes: [{
        path: '/',
        component: Inicio,
        name: 'inicio'
    },
    {
        path: '/usuario', 
        component: Usuario,
        props: true,
        children: [
            {
                path: '',
                component: UsuarioLista
            },
            {
                path: ':id',
                component: UsuarioDetalhe,
                props: true
            },
            {
                path: ':id/editar',
                component: UsuarioEditar,
                props: true,
                name: "editarUsuario"
            },
        ]
    }]
})