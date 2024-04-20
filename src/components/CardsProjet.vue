<template>
  <figure class="card" @click="showModal(project, $event)" data-aos="fade-down">
    <img :src="project.imageCard" alt="Image du projet" />
    <div>
      <figcaption>{{ project.title }}</figcaption>
      <ul class="skills">
        <li v-for="(skill, index) in project.skills" :key="index">
          <font-awesome-icon :icon="skill.icon" :style="{ color: skill.color }" />
        </li>
      </ul>
    </div>
  </figure>
</template>

<script>
export default {
  props: ['project'],
  methods: {
    //affiche la modal
    showModal(project, event) {
      if (event) {
        event.stopPropagation() 
        // Empêche la propagation de l'événement si disponible
      }
      this.$emit('show-modal', project)
    }
  }
}
</script>

<style scoped>
.card {
  width: 350px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: 0.3s ease;
  text-align: center;
}

.card:hover,
.card:focus {
  transform: scale(1.1);
}

.card img {
  width: 330px;
  height: 200px;
  margin-bottom: 10px;
}
.card div {
  border: 1px solid var(--figure-div_border-color);
  width: 350px;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
.card figcaption {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: var(--figcaption-color);
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
  font-size: 2rem;
}
</style>
