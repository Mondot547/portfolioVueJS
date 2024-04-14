import './assets/main.css'

import { createApp } from 'vue' // Modification ici, suppression de Vue
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app') // Modification ici, utilisation de component() pour déclarer le composant
