<template>
  <div class="container">
    <div class="text-container" data-aos="fade-right" data-aos-offset="150">
      <h1 class="typing-effect">Bienvenue, je suis développeur web</h1>
      <p>
        Je m'appelle Alexandre Mondot, actuellement en formation dev web full-stack au Centre Européen de Formation.
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
import img3D from '../assets/imageMaquettePortfolio.png'
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
  margin-top: 10rem;
}

.text-container p {
  width: 500px;
  line-height: 2rem;
}

.image-container {
  width: 30%;
  perspective: 1000px; /* perspective pour créer un effet 3D */
}

.image-container img {
  width: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s ease; /* ajouter une transition pour une animation douce */
}

.creation {
  margin-top: 15rem;
}
</style>
