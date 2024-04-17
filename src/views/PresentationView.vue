<template>
  <div class="container">
    <div class="text-container" data-aos="fade-right" data-aos-offset="150">
      <h1 class="typing-effect">
        Bienvenue, je suis <span class="color-title">Développeur Web</span>
      </h1>
      <p>
        Je m'appelle <span class="name-color">Alexandre Mondot</span>, actuellement en formation dev
        web full-stack au <span class="centre-color">Centre Européen de Formation</span>. <br />
        Passionné par la technologie et la création, je me lance dans cette aventure pour découvrir
        et maîtriser les aspects variés du développement web.
      </p>
    </div>
    <div class="image-container">
      <img
        :src="img3D"
        alt="un personnage en 3d avec des accessoires electroniques"
        @mouseenter="startRotation"
        @mouseleave="stopRotation"
        :style="imageTransformStyle"
        data-aos="fade-left"
      />
    </div>
  </div>
</template>

<script setup>
import img3D from '@/assets/development-4536630_1280.png'
</script>

<script>
export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      rotateImage: false
    }
  },
  computed: {
    imageTransformStyle() {
      if (this.rotateImage) {
        const deltaX = (this.mouseX / window.innerWidth - 0.5) * 20 // ajustez l'angle de rotation horizontal
        const deltaY = (this.mouseY / window.innerHeight - 0.5) * -20 // ajustez l'angle de rotation vertical

        return {
          transform: `rotateX(${deltaY}deg) rotateY(${deltaX}deg)`
        }
      } else {
        return {}
      }
    }
  },
  methods: {
    startRotation(event) {
      this.rotateImage = true
      this.updateMousePosition(event)
    },
    stopRotation() {
      this.rotateImage = false
    },
    updateMousePosition(event) {
      this.mouseX = event.clientX
      this.mouseY = event.clientY
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 5rem;
  position: relative;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.text-container {
  padding: 3rem 0 3rem 0;
}

.text-container p {
  width: 600px;
  line-height: 2rem;
}

.text-container .red-color {
  font-weight: bold;
  font-size: 1.5rem;
}
.color-title {
  color: #8444b2;
}
.name-color {
  color: #ed5561;
}
.centre-color {
  color: #1d76bc;
}
.name-color,
.centre-color {
  font-size: 1.5rem;
}
.name-color,
.centre-color,
.color-title {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
    sans-serif;
}
.image-container {
  width: 30%;
  perspective: 1000px; /* perspective pour créer un effet 3D */
}

.image-container img {
  width: 100%;
  background-color: transparent;
  transform-style: preserve-3d;
  transition: transform 0.5s ease; /* ajouter une transition pour une animation douce */
}
.creation {
  margin-top: 15rem;
}
</style>
