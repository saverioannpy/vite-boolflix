<script>
import { store } from '../store';
import AppElementsList from './AppElementsList.vue';
export default{
    name: 'AppMain',
    data(){
        return{
            store,
        }
    },
    components: {
        AppElementsList,
    },
};
</script>

<template>   
    <!-- Lista degli elementi cercati-->
    <AppElementsList />
</template>

<style>
</style>
