import { createApp } from 'vue';
import App from '../src/views/PortfolioViews.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import router from './routes/routes';
import './assets/style/base.css';


library.add(fas, fab);

const app = createApp(App);

// Montage de l'application avec le routeur
app.use(router);

// Montage de l'application Vue
app.component('font-awesome-icon', FontAwesomeIcon); // Ajoutez le composant FontAwesomeIcon

AOS.init();
app.mount('#app');

// Initialise AOS après le montage de l'application
app.config.globalProperties.$aos = AOS;


