<!-- HeaderNav.vue -->
<template>
  <header>
    <nav>
      <router-link to="/#presentation" class="logo">
        <font-awesome-icon :icon="['fas', 'laptop-code']" />
      </router-link>
      <ul>
        <li>
          <router-link to="/#presentation">Présentation</router-link>
        </li>
        <li>
          <router-link to="/#skills">Skills</router-link>
        </li>
        <li>
          <router-link to="/#projets">Projets</router-link>
        </li>
        <li>
          <router-link to="/#contact">Contact</router-link>
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
  width: 98%;
  position: fixed;
  background-color: #fff;
  padding: 0 1rem 0 1rem;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 0;
  box-shadow: 10px 10px 30px #999;
  border-radius: 10px;
  height: 80px;
}

nav .logo a {
  text-decoration: none;
  color: #1e5d76;
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
  color: #1e5d76;
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
  color: #9d4d36;
  transition: all 0.3s ease-in;
  border-bottom: 1px solid #9d4d36;
}
</style>
