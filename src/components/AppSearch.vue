<script>
import { store } from '../store';
export default{
    name: 'AppSearch',
    data(){
        return{
            store,
        }
    },
};
</script>

<template>
    <!-- Search Bar-->
    <div class="searchbar-container container d-flex align-items-center">
        <div class="search-bar-text pe-2">
            <input type="text" placeholder="Cerca un film o una serie tv.." v-model="store.searchText">
        </div>
        <div class="search-bar-button ">
            <button @click.prevent="$emit('movieSearch')" class="btn btn-danger"> Cerca </button>
        </div>
    </div>  
</template>
<style>
</style>
