<script>
import { store } from '../store';
import AppElement from './AppElement.vue';
export default{
    name: 'AppElementsList',
    data(){
        return{
            store,
        }
    },
    components:{
        AppElement,
    }
};
</script>

<template>
    <AppElement />
</template>

<style>
</style>