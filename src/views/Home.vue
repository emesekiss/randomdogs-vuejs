<template>
  <div class="home">
    <img class="logo" alt="Dog logo" src="../assets/pawprint.svg">
    <h1>Welcome to random dogs</h1>
    <img :src="dogImage" alt="Random image of a dog">
  </div>
</template>

<script>

export default {
  name: 'Home',
  mounted() {
    this.$store.dispatch("getRandomBreed")
  },
  computed: {
    dogImage() {
      return this.$store.state.randomBreed;
    }
  }
}
</script>
<style scoped>
.logo {
  max-height: 50px;
}

img {
  max-height: 500px;
}
</style>
