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
  <RouterView></RouterView>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'
import PresentationView from './PresentationView.vue'
import SkillsViews from './SkillsViews.vue'
import CreationProjet from './CreationProjet.vue'
import ContactForm from './ContactForm.vue'
import FooterViews from '@/components/FooterViews.vue'

export default {
  name: 'PortfolioViews',
  components: {
    HeaderNav,
    PresentationView,
    SkillsViews,
    CreationProjet,
    ContactForm,
    FooterViews
  },
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else if (to.path !== from.path) {
      // Scroll to top when navigating to a different route
      return { top: 0, behavior: 'smooth' }
    } else if (savedPosition) {
      // Preserve saved position when navigating back/forward in history
      return savedPosition
    } else {
      // Default behavior
      return { left: 0, top: 0 }
    }
  }
}
</script>
