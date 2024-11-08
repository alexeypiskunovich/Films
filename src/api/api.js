import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'ebea8cfca72fdff8d2624ad7bbf78e4c'
    }
});

export const moviesApi = {
    getMovies(currentPage) {
        return instance.get('/now_playing', {
    
            params: {
                page: currentPage
            }
        }).then(response => {
            return response.data;
        });
    },
    getDescription(id) {
        return instance.get(`/${id}`).then(response => {
            return response.data;
        })
    }
};

