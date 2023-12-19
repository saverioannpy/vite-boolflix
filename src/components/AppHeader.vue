<script>
import AppSearch from './AppSearch.vue';
import { store } from '../store';
import axios from 'axios';
export default{
    name: 'AppHeader',
    data(){
        return{
            store,
        }
    },
    components: {
        AppSearch,
    },
    methods: {
        //chiamata Api alla ricerca del film
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
}
</script>

<template>
    <div class="header  d-flex justify-content-between align-items-center p-2">
        <!-- Logo sito-->
        <div class="logo-container">
            <img src="../assets/img/boolfix-logo.png" alt="" class="img-fluid">
        </div>
        <!-- Barra di ricerca-->
        <div class="searchbar-container">
            <AppSearch @movieSearch="movieSearch()" />
        </div>
    </div>
</template>

<style>

.header{
    width: 100vw;
    background-color: rgb(8, 8, 8);
}

.logo-container{
    width: 150px
}
</style>
