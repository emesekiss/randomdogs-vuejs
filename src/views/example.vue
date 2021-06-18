<template>
  <div class="list">
    <ul v-if="info && info.length">
      <li v-for="breed of info" :key="breed">
        <a href=""><strong>{{breed}}</strong></a>
      </li>
    </ul>
    <p>{{info}}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Example',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://dog.ceo/api/breeds/list')
      .then(response => (this.info = response.data.message))
      .catch(error => console.log(error))
  }
}
</script>