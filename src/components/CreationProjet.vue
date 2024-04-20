<template>
  <section class="cards-list">
    <div class="cards">
      <!--boucle for pour aller chaque projet dans la data projects-->
      <Card
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @show-modal="showModal"
      />
      <!--modal en appellant les methode de vue, de selection et de fermeture de la modal-->
      <ModalCardsProjet
        :showModalFlag="showModalFlag"
        :selectedProject="selectedProject"
        @close-modal="closeModal"
      />
    </div>
  </section>
</template>

<script>
import Card from '@/components/CardsProjet.vue'
import ModalCardsProjet from '@/components/ModalCardsProjet.vue'
import DynamiserCommentaire from '@/assets/dynamiserCommentaire.png'
import DynamiserCommentaireCards from '@/assets/commentaireCards.png'
import Booki from '@/assets/Capture d’écran du 2024-04-16 20-15-44.png'
import BookiCard from '@/assets/bookiCards.png'
import CV from '@/assets/Capture d’écran du 2024-04-16 20-43-37.png'
import CVCard from '@/assets/CVCards.png'
import Doco from '@/assets/Capture d’écran du 2024-04-16 21-03-54.png'
import DocoCard from '@/assets/docoCards.png'
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faWordpress,
  faElementor,
  faWpforms
} from '@fortawesome/free-brands-svg-icons'

export default {
  components: {
    Card,
    ModalCardsProjet
  },
  data() {
    //donnée de projet
    return {
      projects: [
        //détail de chaque projet
        {
          id: 1,
          title: 'Espace commentaire',
          description: "On m'a donné comme défi",
          date: '27/03/2024',
          imageModal: DynamiserCommentaire,
          imageCard: DynamiserCommentaireCards,
          skills: [
            { name: 'HTML5', icon: faHtml5, color: '#E34F26' },
            { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
            { name: 'CSS3', icon: faCss3Alt, color: '#264DE4' }
          ],
          link: 'https://github.com/Mondot547/dinamiserCommentaire'
        },
        {
          id: 2,
          title: 'Booki',
          description: 'Réservation de voyage dans différents lieux à Marseille',
          date: '15/08/2022',
          imageModal: Booki,
          imageCard: BookiCard,
          skills: [
            { name: 'HTML5', icon: faHtml5, color: '#E34F26' },
            { name: 'CSS3', icon: faCss3Alt, color: '#264DE4' }
          ],
          link: 'https://github.com/Mondot547/Transformer_une_maquette_en_site_web_avec_HTML_-_CSS_Mondot_Alexandre-test'
        },
        {
          id: 3,
          title: 'Code ton CV',
          description: 'Le but était de tester nos connaissance sur le HTML & CSS',
          date: '12/03/2024',
          imageModal: CV,
          imageCard: CVCard,
          skills: [
            { name: 'HTML5', icon: faHtml5, color: '#E34F26' },
            { name: 'CSS3', icon: faCss3Alt, color: '#264DE4' }
          ],
          link: 'https://github.com/Mondot547/coderSonCv'
        },
        {
          id: 4,
          title: 'SARL Doco Locamotoculture',
          description: "Vitrine d'un magasin de vente et de location d'appareils de jardin",
          date: '01/09/2023',
          imageModal: Doco,
          imageCard: DocoCard,
          skills: [
            { name: 'Wordpress', icon: faWordpress, color: '#101517' },
            { name: 'WpForm', icon: faWpforms, color: '#B2571A' },
            { name: 'Elementor', icon: faElementor, color: '#8D0039' }
          ],
          link: 'https://sarl-doco-locamotoculture.fr/?v=11aedd0e4327'
        }
      ],

      //le flag pour afficher / masquer la modal
      showModalFlag: false,

      //le projet selectionné à afficher dans la modale
      selectedProject: null
    }
  },
  methods: {
    //affiche la modal avec les information du projet selectionné
    showModal(project) {
      this.selectedProject = project
      this.showModalFlag = true
    },

    //ferme la modal
    closeModal() {
      this.showModalFlag = false
    }
  }
}
</script>

<style scoped>
.cards-list,
.cards {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cards-list {
  width: 100%;
  height: 200dvh; /* Taille par défaut */
  white-space: inherit; /* Propriété inutile pour cette classe */
}

.cards {
  gap: 2rem;
  flex-wrap: wrap;
}

/* Média query pour les écrans de taille moyenne et plus */
@media screen and (min-width: 813px) {
  .cards-list {
    height: 68dvh;
    padding-top: 10rem;
  }
}
</style>
