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
    <div class="element-list d-flex justify-content-center flex-wrap pt-3 p-3 ">
        <AppElement />
    </div>
        
</template>

<style>
   .element-list{
    background-color: rgb(57, 52, 52);
    width: calc(100% / 200px);  
   }
</style>