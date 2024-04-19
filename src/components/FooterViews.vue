<script setup>
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <footer>
    <span class="footer-nav">
      <ul class="nav-list">
        <li class="nav-item">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="faLinkedinIn" />
          </a>
        </li>
        <li class="nav-item">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="faGithub" />
          </a>
        </li>
        <li class="nav-item">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="faInstagram" />
          </a>
        </li>
      </ul>
    </span>
    <small>Copyright @Mondot547 || fais le: 15/05/2024</small>
  </footer>
</template>

<style scoped>
footer {
  text-align: center;
}

.footer-nav {
  margin-top: 5rem;
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0;
}

.nav-item {
  font-size: 3rem;
}

.nav-item:hover {
  transform: scale(1.3);
  transition: all 0.3s ease-in;
}

.nav-item a {
  color: #1e5d76;
  text-decoration: none;
}

.nav-item a:hover {
  color: #9d4d36;
  transition: all 0.3s ease-in;
}
</style>
