import { reactive } from 'vue'

export const store = reactive({
    apiConfig: {
        apiUrlMovie: 'https://api.themoviedb.org/3/search/movie',
        apiKey: '26ea7e12eb25516f47c6bbb624053b38',
    },
    searchText: "",
    films: [],
});