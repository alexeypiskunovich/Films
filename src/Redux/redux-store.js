import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import {thunk as thunkMiddleware} from "redux-thunk";
import usersReducer from './movies-reducer';
import moviesInfoReducer from './profile-reducer';
import favoriteMoviesReducer from './favorite-reducer';

const store = configureStore({
    reducer: {
        moviesPage:usersReducer,
        moviesInfoPage:moviesInfoReducer,
        favoriteMovies: favoriteMoviesReducer,
        
    }
  }, applyMiddleware(thunkMiddleware));
  
  window.store=store;
  export default store;