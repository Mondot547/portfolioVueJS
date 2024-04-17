<template>
  <div class="card" @click="showModal(project)" data-aos="fade-down">
    <img :src="project.imageCard" alt="Image du projet" />
    <h3>{{ project.title }}</h3>
    <ul class="skills">
      <li v-for="(skill, index) in project.skills" :key="index">
        <font-awesome-icon :icon="skill.icon" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['project'],
  methods: {
    showModal(project) {
      this.$emit('show-modal', project)
    }
  }
}
</script>

<style scoped>
.card {
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-align: center;
}

.card:hover,
.card:focus {
  transform: scale(1.1);
}

.card img {
  width: 100%;
  height: 200px;
}
.card h3 {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: #8444b2;
  font-size: 1.3rem;
}
.card ul {
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 0;
}
.card ul li {
  color: #1d76bc;
  font-size: 2rem;
}
</style>
