<template>
  <header>
    <nav>
      <router-link :to="{ name: 'Home', hash: '#haut' }">
        <font-awesome-icon :icon="['fas', 'laptop-code']" />
      </router-link>
      <ul>
        <li>
          <router-link :to="{ name: 'Home', hash: '#presentation' }">Présentation</router-link>
        </li>
        <li>
          <a href="#creation">Création</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
  position: fixed;
  background-color: whitesmoke;
  padding: 0 1rem 0 1rem;
  justify-content: space-between;
  align-items: center;
  top: 2%;
  left: 3.5%;
  gap: 2rem;
  width: 90%;
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
