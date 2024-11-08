import { moviesApi } from "../api/api";

const SET_LOADING = 'SET_LOADING';
const SET_MOVIE_DETAILS = 'SET_MOVIE_DETAILS';


const initialState = {
    movie: null,
    loading: false, // Добавляем состояние загрузки
};

const moviesInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            
            return {
                ...state,
                loading: action.loading, // Обновляем состояние загрузки
            };
        case SET_MOVIE_DETAILS:
            
            return {
                ...state,
                movie: action.movie,
            };
        default:
            return state;
    }
};


export const setMovieDetails = (movie) => ({
    type: SET_MOVIE_DETAILS,
    movie,
});


export const setLoading = (loading) => ({
    type: SET_LOADING,
    loading,
});

export const requestMovieDetails = (userId) => {
    return async (dispatch) => {
        
        dispatch(setLoading(true)); // Устанавливаем загрузку в true
        const data = await moviesApi.getDescription(userId);
        dispatch(setMovieDetails(data));
        dispatch(setLoading(false)); // Устанавливаем загрузку в false
    };
};


export default moviesInfoReducer;
