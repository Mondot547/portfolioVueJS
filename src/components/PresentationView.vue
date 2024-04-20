<script>
import { ref, computed } from 'vue'
import img3D from '../assets/imgPresentation.png'

export default {
  setup() {
    const mouseX = ref(0)
    const mouseY = ref(0)
    const rotateImage = ref(false)

    const startRotation = (event) => {
      rotateImage.value = true
      updateMousePosition(event)
    }

    const stopRotation = () => {
      rotateImage.value = false
    }

    const updateMousePosition = (event) => {
      mouseX.value = event.clientX
      mouseY.value = event.clientY
    }

    const imageTransformStyle = computed(() => {
      if (rotateImage.value) {
        const deltaX = (mouseX.value / window.innerWidth - 0.5) * 20
        const deltaY = (mouseY.value / window.innerHeight - 0.5) * -20

        return {
          transform: `rotateX(${deltaY}deg) rotateY(${deltaX}deg)`
        }
      } else {
        return {}
      }
    })

    return { img3D, startRotation, stopRotation, imageTransformStyle }
  }
}
</script>

<template>
  <div id="presentation" class="container">
    <div class="text-container" data-aos="fade-right" data-aos-offset="150">
      <h1>
        Bienvenue, je suis <span class="color-title">Développeur Web</span>
        <span class="typing-cursor"></span>
      </h1>
      <p>
        Je m'appelle <span class="name-color">Alexandre Mondot</span>, actuellement en formation dev
        web full-stack au <span class="centre-color">Centre Européen de Formation</span>. <br />
        Passionné par la technologie et la création, je me lance dans cette aventure pour découvrir
        et maîtriser les aspects variés du développement web.
      </p>
    </div>
    <div class="image-container">
      <!-- Image avec les méthodes pour la faire bouger ou non selon où est la souris -->
      <img
        :src="img3D"
        alt="Un personnage en 3D avec des accessoires électroniques"
        @mouseenter="startRotation"
        @mouseleave="stopRotation"
        :style="imageTransformStyle"
        data-aos="fade-left"
      />
    </div>
  </div>
</template>

<style scoped>
/* Style spécifique pour l'effet de frappe */
.typing-effect {
  overflow: hidden;
  border-right: 0.15em solid orange; /* Curseur de frappe */
  white-space: nowrap;
  margin: 0;
  letter-spacing: 0.15em;
  animation:
    typing 3.5s steps(30, end),
    blink-caret 0.75s step-end infinite;
}

/* Animation de frappe */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* Animation du curseur de frappe */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

/* Animation d'effacement */
@keyframes erasing {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}

/* Classe pour masquer le titre après l'effacement */
.typing-effect-hide {
  visibility: hidden;
  white-space: nowrap;
}

.container {
  display: flex;
  height: 75dvh;
  padding-top: 5rem;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.text-container {
  padding: 3rem 0 3rem 0;
}

.text-container p {
  width: 500px;
  line-height: 2rem;
}

.color-title {
  color: var(--presentation-title_color);
}

.name-color {
  color: var(--presentation-name_color);
}

.centre-color {
  color: var(--presentation-centre_color);
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
  perspective: 500px;
}

.image-container img {
  width: 100%;
  background-color: transparent;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
}
</style>