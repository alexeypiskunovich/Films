import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

const NextMovie = ({ movie, posters }) => {
    const navigate = useNavigate();
    const [isNextDisabled, setIsNextDisabled] = useState(false); // Состояние для блокировки кнопки

    const handleBackToList = () => {
        navigate('/releases'); // Перенаправляем на страницу со списком фильмов
    };

    const handleNextMovie = () => {
        const currentIndex = posters.findIndex(m => m.id === movie.id);
        const nextIndex = currentIndex + 1;

        if (nextIndex < posters.length) {
            const nextMovie = posters[nextIndex];
            navigate(`/profilemovies/${nextMovie.id}`); // Переход к следующему фильму
        } else {
            setIsNextDisabled(true); // Блокируем кнопку, если больше нет фильмов
        }
    };

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            <Button
                variant="outlined"
                onClick={handleBackToList}
                sx={{
                    flexGrow: 1,
                    marginRight: 1,
                    borderColor: 'gray',
                    color: 'black',
                    '&:hover': {
                        borderColor: 'gray',
                        color: 'gray',
                    },
                }}
            >
                Back to List
            </Button>
            <Button
                variant="outlined"
                onClick={handleNextMovie}
                disabled={isNextDisabled} // Блокируем кнопку, если isNextDisabled равно true
                sx={{
                    flexGrow: 1,
                    marginRight: 1,
                    borderColor: 'gray',
                    color: isNextDisabled ? 'lightgray' : 'black', // Изменение цвета текста для заблокированной кнопки
                    '&:hover': {
                        borderColor: 'gray',
                        color: isNextDisabled ? 'lightgray' : 'gray',
                    },
                }}
            >
                Next Movie
            </Button>
        </Box>
    );
};

export default NextMovie;