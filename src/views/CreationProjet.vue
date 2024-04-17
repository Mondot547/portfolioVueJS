<template>
  <main>
    <div class="cards">
      <Card
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @show-modal="showModal"
      />
      <ModalCardsProjet
        :showModalFlag="showModalFlag"
        :selectedProject="selectedProject"
        @close-modal="closeModal"
      />
    </div>
  </main>
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
    return {
      projects: [
        {
          id: 1,
          title: 'Espace commentaire',
          description: "On m'a donné comme défi",
          imageModal: DynamiserCommentaire,
          imageCard: DynamiserCommentaireCards,
          skills: [
            { name: 'HTML5', icon: faHtml5, color: '#E34F26' },
            { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
            { name: 'CSS3', icon: faCss3Alt, color: '#264DE4' }
          ]
        },
        {
          id: 2,
          title: 'Booki',
          description: 'Réservation de voyage dans différents lieux à Marseille',
          imageModal: Booki,
          imageCard: BookiCard,
          skills: [
            { name: 'HTML5', icon: faHtml5, color: '#E34F26' },
            { name: 'CSS3', icon: faCss3Alt, color: '#264DE4' }
          ]
        },
        {
          id: 3,
          title: 'Code ton CV',
          description: "J'ai codé mon CV",
          imageModal: CV,
          imageCard: CVCard,
          skills: [
            { name: 'HTML5', icon: faHtml5, color: '#E34F26' },
            { name: 'CSS3', icon: faCss3Alt, color: '#264DE4' }
          ]
        },
        {
          id: 4,
          title: 'SARL Doco Locamotoculture',
          description: "Vitrine d'un magasin de vente et de location d'appareils de jardin",
          imageModal: Doco,
          imageCard: DocoCard,
          skills: [
            { name: 'Wordpress', icon: faWordpress, color: '#101517' },
            { name: 'WpForm', icon: faWpforms, color: '#B2571A' },
            { name: 'Elementor', icon: faElementor, color: '#8D0039' }
          ]
        }
      ],
      showModalFlag: false,
      selectedProject: null
    }
  },
  methods: {
    showModal(project) {
      this.selectedProject = project
      this.showModalFlag = true
    },
    closeModal() {
      this.showModalFlag = false
    }
  }
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80dvh;
}

.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  width: 60%;
}
</style>
