<template>
  <div class="contact-form">
    <span class="information" data-aos="zoom-in" data-aos-easing="ease-in" data-aos-delay="100">
    </span>
    <div class="form" data-aos="fade-left">
      <!-- Messages de succès et d'erreur -->
      <div class="status-messages" :class="statusClass" v-if="status">
        <span>{{ statusMessage }}</span>
        <button @click="closeStatus" class="close-button" aria-label="Fermer">&times;</button>
      </div>
      <!-- Formulaire -->
      <form @submit.prevent="submitForm" ref="form">
        <div class="form-group" v-for="(item, index) in formItems" :key="index">
          <label :for="item.id" class="form-label">{{ item.label }}:</label>
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
          <!-- Affichage des erreurs -->
          <div v-if="formErrors[item.id]" class="error-message">{{ formErrors[item.id] }}</div>
        </div>
        <!-- Bouton d'envoi -->
        <div class="btn-form">
          <button type="submit" class="submit-button">Envoyer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      status: '',
      formErrors: {},
      formItems: [
        { id: 'name', label: 'Nom', type: 'text' },
        { id: 'email', label: 'Email', type: 'email' },
        { id: 'message', label: 'Message', type: 'textarea' }
      ]
    }
  },
  computed: {
    statusMessage() {
      if (this.status === 'success') {
        return 'Merci pour votre soumission !'
      } else if (this.status === 'error') {
        return 'Oops ! Il y a eu un problème lors de la soumission de votre formulaire'
      } else {
        return ''
      }
    },
    statusClass() {
      return {
        'status-messages': true,
        success: this.status === 'success',
        error: this.status === 'error'
      }
    }
  },
  methods: {
    async submitForm() {
      this.formErrors = {}

      let isValid = true
      this.formItems.forEach((item) => {
        if (!this.formData[item.id]) {
          this.formErrors[item.id] = `${item.label} est requis.`
          isValid = false
        }
      })

      if (isValid) {
        this.sendFormData()
      } else {
        this.status = 'error'
      }
    },
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
    closeStatusAfterDelay() {
      setTimeout(() => {
        this.closeStatus()
        this.resetForm()
      }, 10000)
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
}
.form {
  width: 85%;
  display: flex;
  justify-content: center;
}
.information {
  width: 100%;
  height: 500px;
  background-image: url('@/assets/imageMaquettePortfolio.png');
  background-repeat: no-repeat;
  background-position: 50%;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 15px 15px 0;
}
.information ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 3rem;
  height: 50%;
  background-color: rgb(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px 10px 10px 0;
  font-weight: bolder;
}
.information ul li a {
  text-decoration: none;
  color: #000;
}
.status-messages {
  position: absolute;
  top: 20%;
  right: 2%;
  transform: translate(10px, 10px); /* Espacement par rapport au bord */
  background-color: green;
  color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
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
  color: #cc0000;
}
.form-input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.error-message {
  color: #cc0000;
  font-size: 0.8rem;
}
.submit-button {
  background-color: #cc0000;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
}
.submit-button:hover {
  background-color: #7a1205;
}
.close-button {
  position: absolute;
  top: -5px;
  right: -3px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: red;
}

@media screen and (min-width: 768px) {
  .contact-form {
    width: 90%;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding-top: 5rem;
  }
  .form {
    width: 50%;
    box-sizing: border-box;
  }

  .form input,
  .form textarea {
    width: 95%;
  }
  .information {
    width: 50%;
  }
}
</style>
