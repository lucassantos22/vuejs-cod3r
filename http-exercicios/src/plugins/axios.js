import Vue from "vue";
import axios from "axios";

// axios.defaults.baseURL = 'https://curso-vuejs-9eded.firebaseio.com/';

Vue.use({
    install(Vue){
        // Vue.prototype.$http = axios;
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vuejs-9eded.firebaseio.com/'
        });

        // Interceptar Requisições
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method);
            return config;
        }, error => Promise.reject(error));

        // Interceptar Respostas
        Vue.prototype.$http.interceptors.response.use(res => {
            const arr = [];
            for(let chave in res.data){
                arr.push({id: chave, ...res.data[chave]})
            }

            res.data = arr;
            return res;
        }, error => Promise.reject(error));
    }
})