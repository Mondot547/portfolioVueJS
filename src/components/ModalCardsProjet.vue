<script setup></script>

<template>
  <div v-if="showModalFlag" class="modal">
    <div class="modal-content">
      <button class="close-btn" @click="closeModal">X</button>
      <img :src="selectedProject.image" alt="Image du projet" />
      <div>
        <h2>{{ selectedProject.title }}</h2>
        <p>{{ selectedProject.description }}</p>
        <ul class="skills">
          <li>
            <font-awesome-icon :icon="['fab', 'html5']" />
          </li>
          <li>
            <font-awesome-icon :icon="['fab', 'css3-alt']" />
          </li>
          <li>
            <font-awesome-icon :icon="['fab', 'js']" />
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
  align-items: center;
  height: 76%;
  width: 80%;
  box-sizing: content-box;
}
.modal-content img {
  max-width: 550px;
  min-width: 200px;
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
  top: 12%;
  right: 10%;
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
</style>
