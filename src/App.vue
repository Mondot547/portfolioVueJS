<script setup>
import ContactForm from './components/ContactForm.vue'
import img3D from './assets/imageMaquettePortfolio.png'
import HeaderNav from './components/HeaderNav.vue'
</script>

<template>
  <HeaderNav />
  <main id="haut">
    <section class="presentation" id="presentation">
      <p>
        Je suis Alexandre Mondot, en formation dev web full-stack au Centre Européen de Formation.
        Passionné par la technologie et la création, je me lance dans cette aventure pour découvrir
        et maîtriser les aspects variés du développement web.
      </p>
      <img :src="img3D" alt="un personnage en 3d avec des accessoires electroniques" />
    </section>
    <section id="cretation">
      <h1>Création</h1>
    </section>
    <section id="contact">
      <ContactForm />
    </section>
  </main>
</template>

<style scoped>
.presentation {
  margin-top: 7rem;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.presentation p {
  width: 300px;
}
</style>
