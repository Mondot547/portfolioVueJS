import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../views/NotFound.vue';
import PresentationView from '@/views/PresentationView.vue';
import SkillsViews from '@/views/SkillsViews.vue';
import CreationProjet from '@/views/CreationProjet.vue';
import ContactForm from '@/views/ContactForm.vue';

const routes = [
  { path: '/', redirect: '/presentation' }, // Rediriger '/' vers '/presentation'
  { path: '/presentation', component: PresentationView },
  { path: '/skills', component: SkillsViews },
  { path: '/projets', component: CreationProjet },
  { path: '/contact', component: ContactForm },
  { path: '/:pathMatch(.*)', name: 'NotFound', component: NotFound } // Afficher NotFound pour les routes inconnues
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
