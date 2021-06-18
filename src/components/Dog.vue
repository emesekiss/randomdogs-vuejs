<template>
  <div>Your selected breed is {{ breeds[breedIdx] }}
  <h1>{{breedIdx}}</h1></div>

</template>

<script>
export default {
  name: 'Dog',

  computed: {
    breedIdx() {
      return this.$route.params.breedIdx
    },
    breeds() {
      return this.$store.getters.getAllBreeds
    }
  }

  // methods: {
  //   findProperBreed() {
  //     console.log(this.$store.getters.getAllBreeds)
  //     // this.selectedBreed = this.breeds.find((breed, idx) => breed[idx] === this.breedIdx)
  //   }
  // }
  // ,
  // watch: {
  //   $route() {
  //     this.findProperBreed()
  //   }
  // }
  // ,
  // created() {
  //   this.findProperBreed()
  // }
}
</script>
