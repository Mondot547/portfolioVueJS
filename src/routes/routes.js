// routes.js
import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../views/NotFound.vue';
import PresentationView from '@/views/PresentationView.vue';
import SkillsViews from '@/views/SkillsViews.vue';
import CreationProjet from '@/views/CreationProjet.vue';
import ContactForm from '@/views/ContactForm.vue';
import Portfolio from '@/views/PortfolioViews.vue';

const routes = [
  { path: '/', component: Portfolio },
  { path: '/#presentation', component: PresentationView },
  { path: '/#skills', component: SkillsViews },
  { path: '/#projets', component: CreationProjet },
  { path: '/#contact', component: ContactForm },

  { path: '/:pathMatch(.*)', name: 'NotFound', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes,

});

export default router;
