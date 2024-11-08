import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../../Redux/favorite-reducer";
import { Button } from "@mui/material";

const ButtonFavorite = ({ isFavorite, movie }) => {
  const dispatch = useDispatch();
  const [isFavoriteState, setIsFavorite] = useState(isFavorite);

  useEffect(() => {
    setIsFavorite(isFavorite);
  }, [isFavorite]);

  const toggleFavorite = () => {
    const newFavoriteState = !isFavoriteState;
    setIsFavorite(newFavoriteState);
    dispatch(addToFavorites(movie, newFavoriteState));
  };

  return (
    <Button
      variant={isFavoriteState ? "contained" : "outlined"}
      sx={{
        mt: 2, 
        borderColor: isFavoriteState ? 'gray' : 'red', 
        color: isFavoriteState ? 'white' : 'red', 
        backgroundColor: isFavoriteState ? 'gray' : 'transparent',
        '&:hover': {
          borderColor: isFavoriteState ? 'darkred' : 'darkgray', 
          color: isFavoriteState ? 'white' : 'darkgray', 
        },
      }}
      onClick={toggleFavorite}
    >
      {isFavoriteState ? 'Remove from favorites' : 'Add to favorites'}
    </Button>
  );
};

export default ButtonFavorite;