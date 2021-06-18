import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const url = 'https://dog.ceo/api/breeds/list';

export default new Vuex.Store({
    state: {
        allBreeds: null,
    },
    mutations: {
        SET_BREEDS(state, breeds) {
            state.allBreeds = breeds
        }
    },
    actions: {
        async getAllBreeds({commit}) {
            axios.get(url)
                .then(response => {
                    commit('SET_BREEDS', response.data.message)
                })
        },
    },
    modules: {},
    getters: {
        getAllBreeds: (state) => state.allBreeds,
    },
});
