import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Acoes from './components/Acoes'
import Portfolio from './components/Portfolio'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/acoes',
            component: Acoes
        },{
            path: '/portfolio',
            component: Portfolio
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})