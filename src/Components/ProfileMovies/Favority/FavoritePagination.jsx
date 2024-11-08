import React from "react";
import { Box, Button, Typography } from "@mui/material";

const FavoritePagination = ({ currentPage, setCurrentPage, totalMovies }) => {
    const moviesPerPage = 10;

    // Обработчики для кнопок
    const nextPage = () => {
        if (currentPage < Math.ceil(totalMovies / moviesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="center" mt={4}>
            <Button 
                variant="outlined" 
                onClick={prevPage} 
                disabled={currentPage === 1}
                sx={{
                    mr: 2,
                    borderColor: currentPage === 1 ? 'gray' : 'black',
                    color: currentPage === 1 ? 'gray' : 'black',
                    '&:hover': {
                        borderColor: 'gray',
                        color: 'gray',
                    },
                }}
            >
                Previous
            </Button>
            <Typography variant="body1">
                Page {currentPage} from {Math.ceil(totalMovies / moviesPerPage)}
            </Typography>
            <Button 
                variant="outlined" 
                onClick={nextPage} 
                disabled={currentPage === Math.ceil(totalMovies / moviesPerPage)}
                sx={{
                    ml: 2,
                    borderColor: currentPage === Math.ceil(totalMovies / moviesPerPage) ? 'gray' : 'black',
                    color: currentPage === Math.ceil(totalMovies / moviesPerPage) ? 'gray' : 'black',
                    '&:hover': {
                        borderColor: 'gray',
                        color: 'gray',
                    },
                }}
            >
                Next
            </Button>
        </Box>
    );
};

export default FavoritePagination;