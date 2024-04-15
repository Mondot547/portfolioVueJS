<template>
  <header>
    <nav>
      <router-link :to="{ hash: '#haut' }">
        <font-awesome-icon :icon="['fas', 'laptop-code']" />
      </router-link>
      <ul>
        <li>
          <router-link :to="{ hash: '#presentation' }">Présentation</router-link>
        </li>
        <li>
          <router-link :to="{ hash: '#creation' }">Création</router-link>
        </li>
        <li>
          <router-link :to="{ hash: '#contact' }">Contact</router-link>
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
  width: 90%;
  top: 2%;
  left: 5%;
  position: fixed;
  background-color: whitesmoke;
  padding: 0 1rem 0 1rem;
  justify-content: space-between;
  align-items: center;
}
nav ul {
  gap: 1rem;
  list-style: none;
}

nav a {
  text-decoration: none;
  color: #333;
}
</style>
