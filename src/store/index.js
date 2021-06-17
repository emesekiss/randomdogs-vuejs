import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

const url = 'https://dog.ceo/api/breeds/list';

export default new Vuex.Store({
  state: {
    allBreeds: null,
  },
  mutations: {
    // syncrous
    // setAllBreeds(state) {
    //   this.state.allBreeds = state;
    // },
  },
  actions: {
    //asyncronous
    async setAllBreeds() {
      const response = await fetch(url);
      const breeds = await response.json();
      this.state.allBreeds = breeds.message;
      // state.commit('setAllBreeds', breeds.message);
    },
  },
  modules: {},
  getters: {
    getAllBreeds: (state) => state.allBreeds,
  },
});
