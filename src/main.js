import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import vueRouter from 'vue-router'
import store from './vuex/index'
import router from './router/index'
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')