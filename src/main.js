// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import routes from './routes/routes.js';
import { fab } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const router = createRouter({
  history: createWebHistory(), // Utilisation de l'historique de navigation basé sur l'historique du navigateur (mode 'history')
  routes
});

library.add(fas, fab);

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon); // Création de l'application Vue

AOS.init();

// Montage de l'application avec le routeur
app.use(router);

// Montage de l'application Vue
app.mount('#app');
