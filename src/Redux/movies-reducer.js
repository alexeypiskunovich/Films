import { moviesApi } from "../api/api"

const SET_POSTER = 'SET_POSTER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_MOVIES_COUNT = 'SET_TOTAL_MOVIES_COUNT';
const SET_LOADING = 'SET_LOADING';

const initialState = {
    posters: [],
    pageSize: 20,
    totalMoviesCount: 0,
    currentPage: 1,
    loading: false, // Добавляем состояние загрузки
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTER:
            return {
                ...state,
                posters: action.posters
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_MOVIES_COUNT:
            return {
                ...state,
                totalMoviesCount: action.count
            };
            case SET_LOADING:
            return {
                ...state,
                loading: action.loading, // Обновляем состояние загрузки
            };
        default:
            return state;
    }
};


export const setPoster = (posters) => ({
    type: SET_POSTER,
    posters
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const setTotalMoviesCount = (totalMoviesCount) => ({
    type: SET_TOTAL_MOVIES_COUNT,
    count: totalMoviesCount
});
export const setLoading = (loading) => ({
    type: SET_LOADING,
    loading,
});

export const requestUsers = (page) => {
    return async (dispatch) => {
        
        dispatch(setLoading(true)); // Устанавливаем загрузку в true
            const data = await moviesApi.getMovies(page);
            dispatch(setPoster(data.results)); // Сохраняем список постеров
            dispatch(setTotalMoviesCount(data.total_results)); // Сохраняем общее количество фильмов
            dispatch(setLoading(false)); // Устанавливаем загрузку в false
    }
};


export default usersReducer;
