import Vue from "vue";
import axios from "axios";

// axios.defaults.baseURL = 'https://curso-vuejs-9eded.firebaseio.com/';

Vue.use({
    install(Vue){
        // Vue.prototype.$http = axios;
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vuejs-9eded.firebaseio.com/'
        })
    }
})