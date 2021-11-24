import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Portfolio from './components/Portfolio.vue'
import './assets/css/App.css'

Vue.use(VueRouter)
// router
const router = new VueRouter({
    routes: [
        {
            path: '/portfolio',
            components: Portfolio
        }
    ]
})
new Vue({
    router, render: h => h(App),
}).$mount('#app')
