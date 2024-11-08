import React, { useEffect } from "react";
import ProfileMovies from "./ProfileMovies";
import { useDispatch, useSelector } from "react-redux";
import { requestMovieDetails } from "../../Redux/profile-reducer";
import { useParams } from "react-router-dom";
import { addToFavorites } from "../../Redux/favorite-reducer";

const ProfileMoviesContainer = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();

    // Получаем данные из состояния Redux
    const movie = useSelector((state) => state.moviesInfoPage.movie);
    const posters = useSelector((state) => state.moviesPage.posters);
    const favoriteMovies = useSelector((state) => state.favoriteMovies);
    const loading=useSelector((state)=>state.moviesInfoPage.loading)
    // Запрос данных при монтировании компонента и изменении userId
    useEffect(() => {
        dispatch(requestMovieDetails(userId));
    }, [dispatch, userId]);

    // Определяем, является ли фильм избранным
    const isFavorite = movie ? favoriteMovies.some(favMovie => favMovie.id === movie.id) : false;

    return (
        <ProfileMovies
            movie={movie}
            posters={posters}
            loading={loading}
            isFavorite={isFavorite}
        />
    );
};

export default ProfileMoviesContainer;
