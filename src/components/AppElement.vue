<script>
import { store } from '../store';
export default{
    name: 'AppElement',
    data(){
        return{
            store,
        }
    },
};
</script>

<template>
    <div class="card-element" v-for="film in store.films">
        <div class="card-element-title">
            <p>  Titolo: {{ film.title }} </p>
        </div>
        <div class="card-element-original-title">
            <p>Titolo Originale: {{ film.original_title }}</p>
        </div>
        <div class="card-element-language">
            <p>Linga: {{ film.original_language }}</p>
        </div>
        <div class="card-element-rate">
            <p>Voto: {{ film.vote_average }} </p>
        </div>
    </div>
</template>

<style>
</style>