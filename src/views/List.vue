<template>
  <div>
    <h1 class="text-3xl p-12 font-extrabold">This is all the breeds you've retrieved</h1>
    <ol>
    <li v-for="(breed,idx) in breeds" :key="idx" href="">
      <a href="">{{breed}}</a>
    </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: 'List',
  data () {
    return {
      breeds: null
    }
  },
  mounted(){
    this.breeds=this.$store.getters.getAllBreeds;
  }
};
</script>

