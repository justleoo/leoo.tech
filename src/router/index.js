import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: () => import(/* webpackChunkName: "portfolio" */ '../components/About.vue')
    },
    {
      path: '/projects',
      component: () => import('../components/Projects.vue')
    },
  ]
})

export default router;
