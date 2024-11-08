import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const NextFavorite = ({ movie }) => {
    const favoriteMovies = useSelector(state => state.favoriteMovies);
    const navigate = useNavigate();
    const [isNextDisabled, setIsNextDisabled] = useState(false); // Состояние для блокировки кнопки


    const handleNextMovie = () => {
        const currentIndex = favoriteMovies.findIndex(m => m.id === movie.id);
        const nextIndex = currentIndex + 1;

        if (nextIndex < favoriteMovies.length) {
            const nextMovie = favoriteMovies[nextIndex];
            navigate(`/profilemovies/${nextMovie.id}?from=Favorite`); // Переход к следующему фильму
        } else {
            setIsNextDisabled(true)
        }
    };

    return (
        <Box display="flex" alignItems="center" mt={2}>
            
            <NavLink to='/myFavorite' style={{ textDecoration: 'none' }}>
                <Button variant="outlined"
                sx={{
                    flexGrow: 1,
                    marginRight: 1,
                    borderColor: 'gray', // Серый цвет границы
                    color: 'black', // Черный цвет текста
                    '&:hover': {
                        borderColor: 'gray', // Оставляем серым при наведении
                        color: 'gray', // Серый текст при наведении
                    },
                }}>
                    My Favorite
                </Button>
            </NavLink>
            <Button
                variant="outlined"
                onClick={handleNextMovie}
                disabled={isNextDisabled}
                sx={{
                    flexGrow: 1,
                    marginRight: 1,
                    borderColor: 'gray', // Серый цвет границы
                    color: 'black', // Черный цвет текста
                    '&:hover': {
                        borderColor: 'gray', // Оставляем серым при наведении
                        color: 'gray', // Серый текст при наведении
                    },
                }}
                
            >
                Next Favorite Movie
            </Button>
        </Box>

    );
};

export default NextFavorite;