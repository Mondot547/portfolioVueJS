// routes.js
import { createRouter, createWebHistory } from 'vue-router';
import Presentation from '../components/PresentationView.vue';
import Projet from '../components/CreationProjet.vue';
import Contact from '../components/ContactForm.vue'
import NotFound from '@/components/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Presentation },
    { path: '/projet', component: Projet },
    { path: '/contact', component: Contact },
    { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound }
  ]
});

export default router;
