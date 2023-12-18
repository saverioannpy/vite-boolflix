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
    <div class="search-bar">
        <input type="text" placeholder="Cerca un film o una serie tv.." v-model="store.searchText">
        <button @click.prevent="$emit('movieSearch')" > Cerca Film</button>
    </div>
</template>

<style>
</style>
