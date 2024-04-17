<!-- App.vue -->
<template>
  <HeaderNav :navigateToAnchor="navigateToAnchor" />
  <main>
    <section id="presentation">
      <PresentationView />
    </section>
    <section id="skills">
      <SkillsViews />
    </section>
    <section id="projets">
      <CreationProjet />
    </section>
    <section id="contact">
      <ContactForm />
    </section>
  </main>
  <FooterViews />
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import FooterViews from './components/FooterViews.vue'
import PresentationView from './views/PresentationView.vue'
import SkillsViews from './views/SkillsViews.vue'
import CreationProjet from './views/CreationProjet.vue'
import ContactForm from './views/ContactForm.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
    FooterViews,
    PresentationView,
    SkillsViews,
    CreationProjet,
    ContactForm
  },
  methods: {
    navigateToAnchor(anchor) {
      const element = document.getElementById(anchor)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>
