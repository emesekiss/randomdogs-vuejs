<template>
  <div>
    <h1 class="text-3xl p-12 font-extrabold">This is all the breeds you've retrieved</h1>
    <ol>
      <li v-for="(breed,idx) in breeds" :key="idx" href="">
        <a :href="`/list/${idx}`">{{ breed }}</a>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: 'List',
  mounted() {
    this.$store.dispatch("getAllBreeds")
  },
  computed: {
    breeds() {
      return this.$store.state.allBreeds;
    }
  },
};
</script>

