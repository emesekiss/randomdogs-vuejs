<template>
  <div>Your selected breed is {{ breeds[breedIdx] }}
    <h1>{{ breedIdx }}</h1>
    <img src="https://images.dog.ceo/breeds/hound-english/n02089973_1516.jpg">
    <p>{{this.dogImage}}</p>
  </div>
</template>


<script>
import axios from "axios";

//const selectedDogUrl = "https://dog.ceo/api/breed/hound/images/random";

export default {
  name: 'Dog',
  data () {
    return {
      dogImage: ''
    }
  },
  mounted () {
    axios
        .get("https://dog.ceo/api/breed/hound/images/random")
        .then(response => (this.dogImage = response.data.message))
        .catch(error => console.log(error))
  },

  computed: {
    breedIdx() {
      return this.$route.params.breedIdx
    },
    breeds() {
      return this.$store.getters.getAllBreeds
    }
  },
}

</script>
