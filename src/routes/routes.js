// routes.js
import { createRouter, createWebHistory } from 'vue-router';
import Presentation from '@/views/PresentationView.vue';
import Projet from '@/views/CreationProjet.vue';
import Contact from '@/views/ContactForm.vue'
import NotFound from '@/views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Presentation },
    { path: '/projet', component: Projet },
    { path: '/contact', component: Contact },
    { path: '/:pathMatch(.*)', name: 'NotFound', component: NotFound }
  ]
});

export default router;
