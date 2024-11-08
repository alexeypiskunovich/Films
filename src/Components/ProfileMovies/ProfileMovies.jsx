import React from "react";
import { Box, Card, CardMedia, Typography, Button, CircularProgress } from "@mui/material";
import NextMovie from "./NextMovie";
import ButtonFavorite from "./ButtonFavorite";
import { useLocation } from "react-router-dom";
import NextFavorite from "./NextFavorite";

const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

const ProfileMovies = ({ movie, posters, isFavorite, loading }) => {
    
    const location = useLocation();
    const fromFavorites = new URLSearchParams(location.search).get('from');

    return (
        <> {loading  ? (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px',  }} >
                <CircularProgress sx={{ color: '#B0BEC5' }} /> 
            </div>
        ) : (
        <Box sx={{ bgcolor: '#f5f5f5', p: 2 }}>
            
            <Box
                sx={{
                    position: 'relative',
                    height: '300px',
                    backgroundImage: `url(${posterBaseUrl}${movie?.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 2,
                    mb: 2,
                }}
            >
                <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                    color: '#fff',
                    p: 2,
                }}>
                    <Typography variant="h5">{movie?.title}</Typography>
                </Box>
            </Box>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mb: 2 }}>
                <CardMedia
                    component="img"
                    sx={{ width: { xs: '100%', sm: '200px' }, height: 'auto' }}
                    image={`${posterBaseUrl}${movie?.poster_path}`}
                    alt={movie?.title}
                />
                <Box sx={{ p: 2 }}>
                    <ButtonFavorite  isFavorite={isFavorite} movie={movie} />
                    <Typography variant="h6">{movie?.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                    Popularity: {movie?.popularity} | Rating: {movie?.vote_average} | Release Date: {movie?.release_date} | Country: {movie?.origin_country[0]}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        {movie?.overview}
                    </Typography>
                </Box>
            </Card>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                {fromFavorites === 'myFavorite' || fromFavorites === 'Favorite' ? (
                    <NextFavorite movie={movie} />
                ) : (
                    <NextMovie movie={movie} posters={posters} />
                )}
            </Box>
        </Box>
        )}</>
    );
}

export default ProfileMovies;