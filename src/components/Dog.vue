<template>
 <div>Your selected breed is {{ selectedBreed }}</div>
</template>

<script>
export default {
  name: 'Dog',
  data () {
    return {
      teams: [
        { id: '11', name: 'Team1' },
        { id: '12', name: 'Team2' },
        { id: '13', name: 'Team3' }
      ],
      selectedBreed: ''
    }
  },
  computed: {
    dogId () {
      return this.$route.params.dogId
    }
  },
  methods: {
    findProperBreed () {
      this.selectedBreed = this.breeds.find(breed => breed.id === this.breedId)
    }
  },
  watch: {
    $route () {
      this.findProperBreed()
    }
  },
  created () {
    this.findProperBreed()
  }
}
</script>
