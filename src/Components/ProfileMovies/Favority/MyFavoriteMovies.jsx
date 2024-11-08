import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Grid, Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import FavoritePagination from "./FavoritePagination";

const MyFavoriteMovies = () => {
    const favoriteMovies = useSelector(state => state.favoriteMovies);
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 10;

    
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

    
    const currentMovies = favoriteMovies.slice(indexOfFirstMovie, indexOfLastMovie);

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>My favorite movies</Typography>
            <Grid container spacing={2} >
                {favoriteMovies.length === 0 ? (
                    <Typography variant="body1">There are no selected movies</Typography>
                ) : (
                    currentMovies.map(movie => (
                        <Grid item key={movie.id} xs={12} md={6} >
                            <Card sx={{ display: 'flex', alignItems: 'center' }}>
                                <NavLink to={`/profilemovies/${movie.id}?from=myFavorite`}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 200, height: 275 }} // Set dimensions for the image
                                        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                </NavLink>
                                <CardContent fixed='true'>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        {movie.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {movie.overview}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                )}
            </Grid>
            <FavoritePagination 
                currentMovies={currentMovies}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalMovies={favoriteMovies.length}
            />
        </Box>
    );
};

export default MyFavoriteMovies;

