<template>
  <div>
    <main class="cards">
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
    </main>
  </div>
</template>

<script>
import Card from '../components/CardsProjet.vue'
import ModalCardsProjet from '../components/ModalCardsProjet.vue'
import DynamiserCommentaire from '../assets/dynamiserCommentaire.png'

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
          title: 'Dynamiser un espace commentaire',
          description:
            "outils utilisé: HTML, CSS, JS",
          image: DynamiserCommentaire
        },
        {
          id: 2,
          title: 'Projet 2',
          description: 'Description du projet 2',
          image: 'chemin/vers/image2.jpg'
        },
        {
          id: 3,
          title: 'Projet 3',
          description: 'Description du projet 3',
          image: 'chemin/vers/image3.jpg'
        },
        {
          id: 4,
          title: 'Projet 4',
          description: 'Description du projet 4',
          image: 'chemin/vers/image4.jpg'
        }
        // Ajoutez d'autres projets si nécessaire
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
.cards {
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10rem;
}
</style>
