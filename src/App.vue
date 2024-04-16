<script setup>
import HeaderNav from './components/HeaderNav.vue'
import FooterViews from './components/FooterViews.vue'
</script>

<template>
  <HeaderNav />
  <router-view></router-view>
  <FooterViews />
</template>

<style scoped>

</style>
