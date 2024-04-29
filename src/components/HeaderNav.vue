<template>
  <header>
    <nav>
      <router-link :to="{ name: 'Accueil' }" class="logo">
        <font-awesome-icon :icon="['fas', 'laptop-code']" />
      </router-link>
      <button class="menu-toggle" @click="toggleMenu">
        <!-- Ajoutez un toggle pour le menu mobile -->
        <font-awesome-icon :icon="isMenuOpen ? ['fas', 'times'] : ['fas', 'bars']" />
      </button>
      <ul :class="{ open: isMenuOpen }" @click="closeMenu">
        <!-- Ajoutez la classe 'open' lorsque le menu est ouvert -->
        <li>
          <router-link :to="{ name: 'Presentation' }">Présentation</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Skills' }">Skills</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Projets' }">Projets</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Contact' }">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
}

nav {
  z-index: 10;
  width: 100%;
  background-color: var(--nav-background_color);
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  margin-right: auto;
  font-size: 2rem;
}

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--nav-icon_color);
  font-size: 1.5rem;
  display: none; /* Cache le toggle par défaut */
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
  transition: transform 0.3s ease;
}

ul li {
  text-align: center;
}

ul li a {
  text-decoration: none;
  color: var(--nav-link_color);
  font-size: 1.3rem;
  text-transform: uppercase;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block; /* Affiche le toggle en mode mobile */
  }

  ul {
    display: none; /* Cache les liens par défaut en mode mobile */
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--nav-background_color);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding-top: 3rem; /* Ajout de l'espace pour le toggle */
    transition: all 0.3s ease;
  }

  ul.open {
    display: flex;
  }
}
</style>

<script>
// Dans votre composant Vue.js
export default {
  data() {
    return {
      isMenuOpen: false // Ajoutez une donnée pour suivre l'état du menu
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen // Inversez l'état du menu
    },
    closeMenu() {
      this.isMenuOpen = false // Fermez le menu
    }
  }
}
</script>
