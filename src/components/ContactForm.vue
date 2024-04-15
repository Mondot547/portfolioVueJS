<template>
  <form class="contact-form" @submit.prevent="submitForm">
    <div>
      <label class="form-label" for="name">Nom:</label>
      <input class="form-input" type="text" id="name" v-model="formData.name" required />
    </div>

    <div>
      <label class="form-label" for="email">Email:</label>
      <input class="form-input" type="email" id="email" v-model="formData.email" required />
    </div>

    <div>
      <label class="form-label" for="message">Message:</label>
      <textarea class="form-input" id="message" v-model="formData.message" required></textarea>

      <button class="submit-button" type="submit">Envoyer</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        await fetch('URL_DE_VOTRE_FORMSPREE', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        })
        alert('Message envoyé avec succès!')
        this.formData = {
          name: '',
          email: '',
          message: ''
        }
      } catch (error) {
        console.error("Erreur lors de l'envoi du message:", error)
        alert("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.")
      }
    }
  }
}
</script>

<style scoped>
.contact-form {
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.contact-form div {
    width: 50%
}
.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.1rem;
}

.submit-button {
  background-color: #4caf50;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
