<script setup>
import ContactForm from './components/ContactForm.vue'
import img3D from './assets/imageMaquettePortfolio.png'
import HeaderNav from './components/HeaderNav.vue'
import CreationProjet from './components/CreationProjet.vue'
import FooterViews from './components/FooterViews.vue'
</script>

<template>
  <HeaderNav />
  <main id="haut">
    <section class="presentation" id="presentation">
      <p data-aos="zoom-in" data-aos-duration="500">
        Je suis Alexandre Mondot, en formation dev web full-stack au Centre Européen de Formation.
        Passionné par la technologie et la création, je me lance dans cette aventure pour découvrir
        et maîtriser les aspects variés du développement web.
      </p>
      <img :src="img3D" alt="un personnage en 3d avec des accessoires electroniques" />
    </section>
    <section class="creation" id="creation">
      <CreationProjet />
    </section>
    <section id="contact">
      <ContactForm />
    </section>
  </main>
  <FooterViews />
</template>

<style scoped>
.presentation {
  margin-top: 15rem;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.presentation p {
  width: 300px;
}
.creation {
  margin-top: 15rem;
}
</style>
