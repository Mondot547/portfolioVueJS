<template>
  <div class="container">
    <Skill v-for="skill in skills" :key="skill.id" :skill="skill" data-aos="fade-down" />
  </div>
</template>

<script setup>
import Skill from '../components/SkillOfSkills.vue'
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faVuejs,
  faGit,
  faGithub,
  faBootstrap,
  faSass
} from '@fortawesome/free-brands-svg-icons'

const skills = [
  {
    id: 1,
    icon: faHtml5,
    color: '#E34F26' // Couleur HTML
  },
  {
    id: 2,

    icon: faCss3Alt,
    color: '#264DE4' // Couleur CSS
  },
  {
    id: 3,

    icon: faJs,
    color: '#F7DF1E' // Couleur JavaScript
  },
  {
    id: 4,

    icon: faReact,
    color: '#61DAFB' // Couleur React.js
  },
  {
    id: 5,

    icon: faNodeJs,
    color: '#339933' // Couleur Node.js
  },
  {
    id: 6,

    icon: faVuejs,
    color: '#4FC08D' // Couleur Vue.js
  },
  {
    id: 7,

    icon: faGit,
    color: '#F05032' // Couleur Git
  },
  {
    id: 8,

    icon: faGithub,
    color: '#181717' // Couleur GitHub
  },
  {
    id: 9,

    icon: faBootstrap,
    color: '#563D7C' // Couleur Bootstrap
  },
  {
    id: 10,

    icon: faSass,
    color: '#CC6699' // Couleur Sass
  }
]
</script>

<style scoped>
main,
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.container {
  height: 100dvh;
  gap: 3rem;
  width: 100%;
}
</style>
