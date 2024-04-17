<!-- HeaderNav.vue -->
<template>
  <header>
    <nav>
      <font-awesome-icon :icon="['fas', 'laptop-code']" />
      <ul>
        <li>
          <a @click="navigateToAnchor('presentation')">Présentation</a>
        </li>
        <li>
          <a @click="navigateToAnchor('skills')">Skills</a>
        </li>
        <li>
          <a @click="navigateToAnchor('projets')">Projets</a>
        </li>
        <li>
          <a @click="navigateToAnchor('contact')">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['navigateToAnchor']
}
</script>

<style scoped>
nav,
nav ul {
  display: flex;
}
nav {
  z-index: 1000;
  padding: 0 1rem 0 1rem;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
}
nav svg {
  font-size: 2rem;
}
nav ul {
  gap: 2rem;
  list-style: none;
  justify-content: left;
  padding: 0;
  text-align: center;
}

nav a {
  text-decoration: none;
  color: #1e5d76;
  font-size: 1.3rem;
  text-transform: uppercase;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
}

nav a:hover {
  color: #9d4d36;
}
</style>
