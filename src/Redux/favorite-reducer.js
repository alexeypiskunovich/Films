const initialState = JSON.parse(localStorage.getItem('favoriteMovies')) || [];

const favoriteMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITES': {
            
            const movieExists = state.some(movie => movie.id === action.movie.id);
            const newState = action.isFavorite
                ? (movieExists ? state : [...state, action.movie])
                : state.filter(movie => movie.id !== action.movie.id);
            localStorage.setItem('favoriteMovies', JSON.stringify(newState));
            return newState;
        }
        default:
            return state;
    }
};

export const addToFavorites = (movie, isFavorite) => ({
    type: 'ADD_TO_FAVORITES',
    movie,
    isFavorite,
});

export default favoriteMoviesReducer;
