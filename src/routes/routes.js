import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../views/NotFound.vue';
import PresentationView from '@/components/PresentationView.vue';
import SkillsViews from '@/components/SkillsViews.vue';
import CreationProjet from '@/components/CreationProjet.vue';
import ContactForm from '@/components/ContactForm.vue';

const routes = [
  { path: '/', name: 'Accueil', component: PresentationView },
  { path: '/presentation', name: 'Presentation', component: PresentationView },
  { path: '/skills', name: 'Skills', component: SkillsViews },
  { path: '/projets', name: 'Projets', component: CreationProjet },
  { path: '/contact', name: 'Contact', component: ContactForm },
  { path: '/not-found', name: 'NotFound', component: NotFound },
  { path: '/:pathMatch(.*)', redirect: '/not-found' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
