import { createApp } from 'vue'
import './style.css' 
import App from './App.vue'
import router from './router';
import './assets/tailwind.css';
//import router from './router'
//import './assets/css/app.css'.

createApp(App)
  .use(router)
  .mount('#app');
