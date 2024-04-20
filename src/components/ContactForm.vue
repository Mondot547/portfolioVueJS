<script setup>
import HeaderNav from './HeaderNav.vue'
import FooterViews from './FooterViews.vue'
</script>

<template>
  <HeaderNav />
  <main id="contact" class="contact-form">
    <span class="img3d" data-aos="fade-up"></span>
    <div class="form" data-aos="fade-down">
      <!-- Messages de succès et d'erreur -->
      <div class="status-messages" :class="statusClass" v-if="status">

        <!--affiche le message de statut (succee ou erreur)-->

        <span>{{ statusMessage }}</span>

        <!--boutton pour fermer le message de statut-->

        <button @click="closeStatus" class="close-button" aria-label="Fermer">&times;</button>
      </div>
      <!-- Formulaire -->
      <form @submit.prevent="submitForm" ref="form">

        <!--génération des champs de formulaire en fonction des données-->

        <div class="form-group" v-for="(item, index) in formItems" :key="index">

          <!--label pour chaque champ-->

          <label :for="item.id" class="form-label">{{ item.label }}:</label>

          <!--input ou text area en fonction du type-->

          <template v-if="item.type === 'textarea'">
            <textarea
              :id="item.id"
              v-model="formData[item.id]"
              rows="5"
              class="form-input"
              required
              aria-label="Message"
              :aria-describedby="item.id + '-error'"
            ></textarea>
          </template>
          <template v-else>
            <input
              :type="item.type"
              :id="item.id"
              v-model="formData[item.id]"
              class="form-input"
              required
              :aria-label="item.label"
              :aria-describedby="item.id + '-error'"
            />
          </template>
          <!-- Affichage les erreurs -->
          <div v-if="formErrors[item.id]" class="error-message">{{ formErrors[item.id] }}</div>
        </div>
        <!-- Bouton d'envoi -->
        <div class="btn-form">
          <button type="submit" class="submit-button">Envoyer</button>
        </div>
      </form>
    </div>
  </main>
  <FooterViews />
</template>

<script>
export default {

  //les données du formulaire et statut
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        object: '',
        email: '',
        message: ''
      },
      status: '',
      formErrors: {},

      //définition des éléments du formulaire avec leurs propoiétés
      formItems: [
        { id: 'firstName', label: 'Nom', type: 'text' },
        { id: 'lastName', label: 'Prénom', type: 'text' },
        { id: 'object', label: 'Objet', type: 'text' },
        { id: 'email', label: 'Email', type: 'email' },
        { id: 'message', label: 'Message', type: 'textarea' }
      ]
    }
  },
  computed: {

    //affichage du message de statut en fonction de son état
    statusMessage() {
      if (this.status === 'success') {
        return 'Merci pour votre soumission !'
      } else if (this.status === 'error') {
        return 'Oops ! Il y a eu un problème lors de la soumission de votre formulaire'
      } else {
        return ''
      }
    },

    //class css pour le message de statut
    statusClass() {
      return {
        'status-messages': true,
        success: this.status === 'success',
        error: this.status === 'error'
      }
    }
  },
  methods: {

    //validation des champs requis
    async submitForm() {
      this.formErrors = {}

      let isValid = true

      //validation des champs requis
      this.formItems.forEach((item) => {
        if (!this.formData[item.id]) {
          this.formErrors[item.id] = `${item.label} est requis.`
          isValid = false
        }
      })

      //soumission si le form est valide
      if (isValid) {
        this.sendFormData()
      } else {
        this.status = 'error'
      }
    },
    //validation de l'e-mail
    validateEmail(email) {
      // Validation de l'adresse e-mail
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regex.test(email)
    },

    //envoi des donnée du formulaire a formspree
    async sendFormData() {
      let data = new FormData()
      for (let key in this.formData) {
        data.append(key, this.formData[key])
      }
      try {
        let response = await fetch('https://formspree.io/f/xgegpjkk', {
          method: 'POST',
          body: data,
          headers: {
            Accept: 'application/json'
          }
        })
        //verif de la réponse
        if (response.ok) {
          this.status = 'success'
          this.closeStatusAfterDelay()
          this.resetForm()
        } else {
          this.status = 'error'
        }
      } catch (error) {
        console.error('Erreur lors de la soumission du formulaire :', error)
        this.status = 'error'
      }
    },
    //reinitialisation du formulaire après soumission réussie
    resetForm() {
      for (let key in this.formData) {
        this.formData[key] = ''
      }
      if (this.$refs.form) {
        this.$refs.form.reset()
      }
    },
    closeStatus() {
      this.status = ''
    },
    //fermeture auto du message
    closeStatusAfterDelay() {
      setTimeout(() => {
        this.closeStatus()
        this.resetForm()
      }, 500)
    }
  }
}
</script>

<style scoped>
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.contact-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 115dvh;
  padding-top: 10rem;
  padding-bottom: 5rem;
}
.form {
  width: 85%;
  display: flex;
  justify-content: center;
}
.img3d {
  width: 60%;
  height: 100%;
  background-image: url('@/assets/imageMaquettePortfolio.png');
  background-repeat: no-repeat;
  background-position: 50%;
}

.status-messages {
  position: absolute;
  top: 20%;
  right: 2%;
  transform: translate(10px, 10px); /* Espacement par rapport au bord */
  background-color: var(--status-message_success-color);
  color: var(--status-message_color);
  padding: 10px;
  border: 1px solid var(--status-message_border-color);
  border-radius: 5px;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
label {
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: var(--label-color);
}
.form-input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid var(--input-border_color);
  border-radius: 5px;
}
.error-message {
  color: var(--error-message_color);
  font-size: 0.8rem;
}
.submit-button {
  background-color: var(--submit-btn_bck-color);
  color: var(--submit-btn_color);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
}
.submit-button:hover {
  background-color: var(--submit-btn_bck-color_hover);
}
.close-button {
  position: absolute;
  top: -5px;
  right: -3px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--close-btn_color);
}

@media screen and (min-width: 768px) {
  .contact-form {
    width: 90%;
    flex-direction: row;
    height: 50dvh;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding-top: 15rem;
  }

  .form {
    width: 50%;
    box-sizing: border-box;
  }

  .form input,
  .form textarea {
    width: 95%;
  }
}
</style>
