import Vue from 'vue';
import Router from "vue-router";
import Inicio from "./componentes/Inicio";
import Usuario from "./componentes/usuario/Usuario";
import UsuarioDetalhe from "./componentes/usuario/UsuarioDetalhe";
import UsuarioEditar from "./componentes/usuario/UsuarioEditar";
import UsuarioLista from "./componentes/usuario/UsuarioLista";
import Menu from './componentes/template/Menu'

Vue.use(Router)

export default new Router({
    mode: 'history', // Ou hash
    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition;
        }
        if(to.hash){
            return {selector:to.hash};
        }else{
            return {x:0, y:0}
        }
    },
    routes: [{
        path: '/',
        // component: Inicio,
        name: 'inicio',
        components: {
            defaut: Inicio,
            menu: Menu
        }
    },
    {
        path: '/usuario',
        component: Usuario,
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
    },
    {
        path: '/redirecionar',
        redirect: '/usuario'
    },
    {
        path: '*',
        redirect: '/'
    }]
})