<template>
  <div class="card" @click="showModal(project)" data-aos="fade-down">
    <img :src="project.image" alt="Image du projet" />
    <h3>{{ project.title }}</h3>
    <ul class="skills">
      <li v-for="(skill, index) in project.skills" :key="index">{{ skill.name }}</li>
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
  width: 330px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-align: center;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 12px 12px 30px 12px #999;
}

.card img {
  width: 200px;
}
.card ul {
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
</style>
