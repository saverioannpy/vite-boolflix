<script>
import { store } from '../store';
import axios from 'axios';
import AppSearch from './AppSearch.vue';
import AppElementsList from './AppElementsList.vue';
export default{
    name: 'AppMain',
    data(){
        return{
            store,
        }
    },
    components: {
        AppSearch,
        AppElementsList,
    },

    methods: {
        movieSearch() {
            axios.get(store.apiConfig.apiUrlMovie, {
                params: {
                    api_key: store.apiConfig.apiKey,
                    query: store.searchText,
                    language: "it",
                }
            }).then((response) => store.films = response.data.results);
        }
    }

};
</script>

<template>
    <AppSearch @movieSearch="movieSearch()"/>
    <AppElementsList />
</template>

<style>
</style>
