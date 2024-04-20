<template>
  <header>
    <nav>
      <router-link :to="{ name: 'Accueil' }" class="logo">
        <font-awesome-icon :icon="['fas', 'laptop-code']" />
      </router-link>
      <ul>
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
  justify-content: center;
}
header,
nav,
nav ul {
  display: flex;
}
nav {
  z-index: 1000;
  width: 90%;
  position: fixed;
  background-color: var(--nav-background_color);
  padding: 0 1rem 0 1rem;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 0;
  box-shadow: 10px 10px 30px var(--nav-shadow);
  border-radius: 10px;
  height: 80px;
}

nav .logo svg {
  text-decoration: none;
  color: var(--nav-icon_color);
  border: none;
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

nav ul li a {
  text-decoration: none;
  color: var(--nav-link_color);
  font-size: 1.3rem;
  text-transform: uppercase;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  cursor: pointer;
  padding-bottom: 1rem;
  transition: all 0.3s;
  border-bottom: 1px solid transparent;
}

nav ul li a:hover {
  color: var(--nav-link_color-hover);
  transition: all 0.3s ease-in;
  border-bottom: 1px solid var(--nav-link_color-hover);
}
</style>
