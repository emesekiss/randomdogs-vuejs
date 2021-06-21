<template>
  <div>Your selected breed is {{ breeds[breedIdx] }}
    <h1>{{ breedIdx }}</h1>
    <img :src="selectedBreed">
  </div>
</template>

<script>

export default {
  name: 'Dog',
  mounted() {
    this.$store.dispatch("getSelectedBreed")
  },
  computed: {
    breedIdx() {
      return this.$route.params.breedIdx
    },
    breeds() {
      return this.$store.state.allBreeds
    },
    selectedBreed() {
      return this.$store.state.selectedBreed;
    }
  }
}

</script>
