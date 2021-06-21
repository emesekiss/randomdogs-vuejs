import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const url = 'https://dog.ceo/api/breeds/list';

export default new Vuex.Store({
    state: {
        allBreeds: 'null',
        selectedBreed: null
    },
    mutations: {
        SET_BREEDS(state, breeds) {
            state.allBreeds = breeds
        },
        SET_SELECTED_BREED(state, selectedBreed) {
            state.selectedBreed = selectedBreed
        }
    },
    actions: {
        async getAllBreeds({commit}) {
            axios.get(url)
                .then(response => {
                    commit('SET_BREEDS', response.data.message)
                })
        },
        getSelectedBreed({commit}) {
            const selectedBreed = this.breeds.find((breed, idx) => breed[idx] === this.breedIdx)
            commit('SET_SELECTED_BREED', selectedBreed)
        }
    },
    modules: {},
    getters: {
        getAllBreeds: (state) => state.allBreeds,
        getSelectedBreed: (state) => state.selectedBreed
    },
});
