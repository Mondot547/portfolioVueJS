<template>
  <div>
    <h1 data-aos="fade-down">404 - Page non trouvée !</h1>
    <p data-aos="fade-right">
      Cette page n'existe pas malheureusement, je vous invite à cliqué ci-dessous
    </p>
    <font-awesome-icon :icon="['fas', 'arrow-down']" data-aos="zoom-out" />
    <br />
    <router-link to="/" data-aos="zoom-in">Revenir à l'acceuil</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;
  position: relative;
}
a {
  text-transform: uppercase;
}
svg {
  margin: 1rem 0 2rem 0;
  font-size: 3rem;
}
</style>
