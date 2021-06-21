import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const allBreedsUrl = "https://dog.ceo/api/breeds/list";
const randomBreedUrl = "https://dog.ceo/api/breeds/image/random";

export default new Vuex.Store({
  state: {
    allBreeds: "",
    randomBreed: "",
    selectedBreed: "",
  },
  mutations: {
    SET_BREEDS(state, breeds) {
      state.allBreeds = breeds;
    },
    SET_RANDOM_BREED(state, randomBreed) {
      state.randomBreed = randomBreed;
    },
  },
  actions: {
    async getAllBreeds({ commit }) {
      axios.get(allBreedsUrl).then((response) => {
        commit("SET_BREEDS", response.data.message);
      });
    },
    async getRandomBreed({ commit }) {
      axios.get(randomBreedUrl).then((response) => {
        commit("SET_RANDOM_BREED", response.data.message);
      });
    },
  },

  modules: {},
});
