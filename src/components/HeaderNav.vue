<template>
  <header>
    <nav>
      <font-awesome-icon :icon="['fas', 'laptop-code']" />

      <ul>
        <li>
          <router-link to="/presentation">Présentation</router-link>
        </li>
        <li>
          <router-link to="/projet">Projet</router-link>
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
  background-color: whitesmoke;
  padding: 0 1rem 0 1rem;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

}
nav ul {
  gap: 2rem;
  list-style: none;

  padding: 0;
  text-align: center;
}

nav a {
  text-decoration: none;
  color: #333;
}
</style>
