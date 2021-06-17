<template>
  <div>
    <h1 class="text-3xl p-12 font-extrabold">This is all the breeds you've retrieved</h1>
    <ul>
    <li v-for="(breed,idx) in breeds" :key="idx" href="">
      <a href=""><span>{{idx+1}}</span>
      {{breed}}</a>
    </li>
    </ul>
<!-- 
    <ul v-if="breed && breed.length">
      <li v-for="(breed,idx) in breeds" :key="idx">
        <a href=""><strong>{{breed}}</strong></a>
      </li>
    </ul> -->
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

