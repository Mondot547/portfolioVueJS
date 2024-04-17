<script setup></script>

<template>
  <div v-if="showModalFlag" class="modal">
    <div class="modal-content" data-aos="fade-up">
      <button class="close-btn" @click="closeModal">X</button>
      <div class="img">
        <img :src="selectedProject.imageModal" alt="Image du projet" />
      </div>
      <div>
        <h2>{{ selectedProject.title }}</h2>
        <p>{{ selectedProject.description }}</p>
        <ul class="skills">
          <li v-for="(skill, index) in selectedProject.skills" :key="index">
            {{ skill.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModalFlag: Boolean,
    selectedProject: Object
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-content {
  background-color: white;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 76%;
  width: 80%;
  box-sizing: border-box;
}
.img {
  box-sizing: border-box;
}
.modal-content img {
  width: 70%;
}

.modal-content div {
  text-align: center;
}
.modal-content div .skills {
  display: flex;
  list-style: none;
  gap: 2rem;
  justify-content: center;
  padding: 0;
  font-size: 2rem;
}
.skills li svg {
  margin-top: 10px;
}
.skills li svg:hover {
  margin-top: 10px;
  position: relative;
  z-index: 99;
}
.modal-content div p {
  width: 50%;
  margin: 0 auto;
}
.close-btn {
  position: absolute;
  top: 1%;
  right: 1%;
  cursor: pointer;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  padding: 0.5rem;
  color: #000;
  background-color: #999;
  border-radius: 50%;
  padding: 0 9px 0 9px;
}

@media screen and (min-width: 650px) {
  .modal-content {
    flex-direction: row;
  }
}
</style>
