<template>
  <HeaderNav />
  <main>
    <RouterView></RouterView>
  </main>
  <FooterViews />
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'
import FooterViews from '@/components/FooterViews.vue'

export default {
  name: 'PortfolioViews',
  components: {
    HeaderNav,
    FooterViews
  }
}
</script>
