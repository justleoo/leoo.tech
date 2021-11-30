import * as Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import './assets/css/App.css'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/portfolio',
      component: () => import(/* webpackChunkName: "portfolio" */ './components/Portfolio.vue')
    },
    {
      path: '/projects',
      component: () => import('./components/Projects.vue')
    },
  ]
})

Vue.createApp(App).use(router).mount('#app')
