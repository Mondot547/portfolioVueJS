// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Modification ici, importation des fonctions adaptées pour Vue Router 4
import routes from './routes/routes';

const router = createRouter({
  history: createWebHistory(), // Utilisation de l'historique de navigation basé sur l'historique du navigateur (mode 'history')
  routes
});

const app = createApp(App); // Création de l'application Vue

// Montage de l'application avec le routeur
app.use(router);

// Montage de l'application Vue
app.mount('#app');
