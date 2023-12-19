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
    <!-- Cards risultanti dalla ricerca -->
    <div class="card-element p-2 mb-3 d-flex" v-for="film in store.films">
        <!-- Interno Card Rotante-->
        <div class="card-inner">
            <!-- Fronta Card-->
            <div class="card-front">
                <img :src=" store.apiConfig.apiImg + film.poster_path " alt="" class="card-img">
            </div>
            <!-- Retro Card-->
            <div class="card-back" >
                <!-- Titolo Film-->
                <div class="card-element-title d-flex">
                    <p class="title fw-semibold pe-2 text-start"> Titolo: </p>
                    <p class="text-start"> {{ film.title }} </p>
                </div>
                <!-- Titolo Originale Film-->
                <div class="card-element-original-title d-flex">
                    <p class="title fw-semibold pe-2 text-start pe-1"> Titolo Originale: </p>
                    <p class="text-start"> {{ film.original_title }} </p>
                </div>
                <!-- Lingua Film-->
                <div class="card-element-language d-flex">
                    <p class="title fw-semibold pe-2 text-start"> Lingua: </p>
                    <div v-if="film.original_language === 'it' "> <!-- Visualizzazione bandiera italiana -->
                        <img src="../assets/img/it.png" alt="italian flag">
                    </div> 
                    <div v-else-if="film.original_language === 'en' "> <!-- Visualizzazione bandiera inglese -->
                        <img src="../assets/img/uk.png" alt="great britain flag">
                    </div>  
                    <div v-else> {{ film.original_language }} </div> <!-- Visualizzazione icona nazione -->
                </div>
                <!-- Vorazione Film-->
                <div class="card-element-rate d-flex">
                    <p class="title fw-semibold text-start me-1"> Voto: </p>
                    <p class="text-start"> {{ film.vote_average }}  </p>
                    <!-- <font-awesome-icon icon="fa-solid fa-star" style="color: #edc115;" /> -->
                    <!-- <font-awesome-icon icon="fa-regular fa-star" style="color: #edc115;" /> -->
                </div>
                <div class="card-element-overview d-flex">
                    <p class="text-start title fw-semibold me-1 ">Overview:</p>
                    <p class="text-start"> {{ film.overview }} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.card-element {
    background-color: transparent;
    width: 185px;
    height: 278px;
    margin-right: 20px;
    perspective: 1000px;
    }

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.card-element:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.card-front {
  background-color: #bbb;
  color: black;

  .card-img{
    width: 100%;
    height: 100%;
  }
}

.card-back {
    background-color: rgb(43, 38, 38);
    color: white;
    transform: rotateY(180deg);
    padding: 10px;
    overflow-y: scroll;

  p{
    font-size: 10px;
  }
  
  .title{
    color: rgb(219, 32, 44);
  }

  img{
    width: 20px;
  }
}
</style>