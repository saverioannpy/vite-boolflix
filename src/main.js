import { createApp } from 'vue'
import App from './App.vue'
//import bootstrap
import './assets/style.scss'
//imports fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar as fullStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar} from '@fortawesome/free-regular-svg-icons'
//aggiunta icone alla libreria
library.add(fullStar, emptyStar)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
