<template>
  <section class="presentation" id="presentation">
    <p>
      Je suis Alexandre Mondot, en formation dev web full-stack au Centre Européen de Formation.
      Passionné par la technologie et la création, je me lance dans cette aventure pour découvrir et
      maîtriser les aspects variés du développement web.
    </p>
    <img :src="img3D" alt="un personnage en 3d avec des accessoires electroniques" />
  </section>
</template>

<script setup>
import img3D from '../assets/imageMaquettePortfolio.png'
</script>

<style scoped>
.presentation {
  margin-top: 15rem;
  margin-bottom: 5rem;
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: space-evenly;
}
.presentation p {
  width: 300px;
}
.creation {
  margin-top: 15rem;
}
</style>
