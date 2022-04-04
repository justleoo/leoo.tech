import * as Vue from 'vue';
import router from './router';
import App from './App.vue';
import './styles/App.css';


Vue.createApp(App)
  .use(router)
  .mount('#app')
