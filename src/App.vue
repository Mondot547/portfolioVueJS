<script setup>
import HeaderNav from './components/HeaderNav.vue'
import FooterViews from './components/FooterViews.vue'
</script>

<script>
export default {
  name: 'App',
  computed: {
    NotFound() {
      return this.$route.matched.some((route) => route.name === 'NotFound')
    }
  }
}
</script>

<template>
  <HeaderNav v-if="!NotFound" />
  <router-view></router-view>
  <FooterViews v-if="!NotFound" />
</template>

<style scoped></style>
