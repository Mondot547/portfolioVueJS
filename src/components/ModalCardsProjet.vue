<template>
  <!--affiche la modal que si showModalFlag est vrai + appel de la fonction handleClickOutside-->
  <div v-if="showModalFlag" class="modal" @click="handleClickOutside">
    <div class="modal-content" data-aos="fade-up">
      <!--btn pour fermer la modal-->
      <button class="close-btn" @click="closeModal">X</button>
      <div class="img">
        <img :src="selectedProject.imageModal" alt="Image du projet" />
      </div>

      <!--information propre à chaque projet-->
      <div>
        <h2>{{ selectedProject.title }}</h2>
        <p>{{ selectedProject.description }}</p>
        <date>{{ selectedProject.date }}</date>

        <!--liste des techno utilisé pour chaque projet-->
        <ul class="skills">
          <li v-for="(skill, index) in selectedProject.skills" :key="index">
            <!--icon avec couleur-->
            <font-awesome-icon :icon="skill.icon" :style="{ color: skill.color }" />
          </li>
        </ul>

        <!--lien vers le repo git ou le site en question-->
        <a
          v-if="selectedProject.link"
          :href="selectedProject.link"
          target="_blank"
          rel="noopener noreferrer"
          >Lien vers le projet</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //propriété indique si la modal doit s'afficher ou pas
    showModalFlag: Boolean,

    //objet représentant les détails du projet selectioné
    selectedProject: Object
  },
  methods: {
    //méthode pour émettre un événement de fermeture de la modal
    closeModal() {
      this.$emit('close-modal')
    },

    //méthode qui permet de fermer la modal si click en dehors
    handleClickOutside(event) {
      //verifie ou est le click
      if (event.target.classList.contains('modal')) {
        //et ferme la modal
        this.closeModal()
      }
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-content {
  background-color: white;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 90%;
  box-sizing: border-box;
}
.img {
  box-sizing: border-box;
}
.modal-content img {
  width: 80%;
}

.modal-content div {
  text-align: center;
}
.modal-content div .skills {
  display: flex;
  list-style: none;
  gap: 2rem;
  justify-content: center;
  padding: 0;
  font-size: 2rem;
}
.skills li svg {
  margin-top: 10px;
}
.skills li svg:hover {
  margin-top: 10px;
  position: relative;
  z-index: 99;
}
.modal-content div p {
  width: 50%;
  margin: 0 auto;
}

.modal-content date {
  padding: 2rem;
}
.close-btn {
  position: absolute;
  top: 1%;
  right: 1%;
  cursor: pointer;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  padding: 0.5rem;
  color: #000;
  background-color: #999;
  border-radius: 50%;
  padding: 0 9px 0 9px;
}

@media screen and (min-width: 650px) {
  .modal-content {
    flex-direction: row;
  }
}
</style>
