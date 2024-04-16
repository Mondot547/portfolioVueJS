// routes.js
import { createRouter, createWebHistory } from 'vue-router';
import Presentation from '../components/PresentationView.vue';
import Projet from '../components/CreationProjet.vue';
import Contact from '../components/ContactForm.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/presentation', component: Presentation },
    { path: '/projet', component: Projet },
    { path: '/contact', component: Contact }
  ]
});

export default router;
