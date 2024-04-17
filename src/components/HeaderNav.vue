<template>
  <header>
    <nav>
      <font-awesome-icon :icon="['fas', 'laptop-code']" />

      <ul>
        <li>
          <router-link to="/">Présentation</router-link>
        </li>
        <li>
          <router-link to="/projet">Projets</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

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
  color: #333;
  font-size: 1.3rem;
  text-transform: uppercase;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
}
</style>
