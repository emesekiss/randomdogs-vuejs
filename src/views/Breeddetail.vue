<template>
  <div>
    <div><b>TASK DETAIL</b></div>
    <div class="boxed">
      <p><b>Description:</b> {{ breedDetail.title }}</p>

    </div>
  </div>
</template>


<script>
export default {
  name: "breed-detail",
  components: {},
  data() {
    return {
      breed: {title: ""},
    };
  },
  computed: {
    breedDetail() {
      return this.$store.state.selectedBreed;
    },
  },
  created() {
    this.$store.dispatch("retrieveSelectedBreed", this.$route.params.breedIdx);
  },
  methods: {},
};
</script>

<style scoped>

</style>