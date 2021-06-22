<template>
  <div>
    <h1 class="text-3xl p-12 font-extrabold">This is all the breeds you've retrieved</h1>
    <ol>
      <li v-for="(breed,idx) in breeds" :key="idx" href="">
        <router-link :to="{name: 'Dog', params: { breed: breed}}">{{ breed }}</router-link>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: 'List',
  computed: {
    breeds() {
      return this.$store.state.allBreeds;
    }
  },
};
</script>

