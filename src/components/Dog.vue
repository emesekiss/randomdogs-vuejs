<template>
  <div>
    <h3>Your selected breed is {{ breed }}</h3>
    <img :src="dogImage">
  </div>
</template>

<script>
export default {
  name: 'Dog',
  mounted() {
    this.$store.commit("SET_SELECTED_BREED", this.$route.params.breed)
    this.$store.dispatch("getSelectedBreed");
  },
  computed: {
    breed() {
      return this.$route.params.breed;
    },
    dogImage() {
      return this.$store.state.dogImage;
    }
  },
}
</script>
<style scoped>
img {
  max-height: 500px;
}
</style>
