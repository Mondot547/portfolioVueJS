<template>
  <!--affiche la couleur propre de l'icon avec :sytle='...'-->
  <span class="skill-icon" :style="{ color: skill.color }">
    <!--affiche l'icon a partir de la data skills-->
    <font-awesome-icon :icon="skill.icon" />
  </span>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.skill-icon {
  transition: all 0.3s ease;
  display: flex;
  flex-wrap: wrap;
}
.skill-icon:hover {
  transform: scale(1.3);
}

.skill-icon svg {
  font-size: 5rem;
}
</style>
