import React, { useState } from 'react';
import { Button, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    color: 'black',
    borderColor: 'black',
    '&:hover': {
      backgroundColor: 'rgba(128, 128, 128, 0.2)',
      borderColor: 'black',
    },
    '&:disabled': {
      backgroundColor: 'rgba(128, 128, 128, 0.5)',
      color: 'rgba(0, 0, 0, 0.5)',
      borderColor: 'rgba(0, 0, 0, 0.5)',
    },
  },
  activeButton: {
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    color: '#fff',
    borderColor: 'transparent',
    '&:hover': {
      backgroundColor: 'rgba(128, 128, 128, 0.7)',
    },
  },
}));

const Paginator = ({ totalMoviesCount, pageSize, currentPage, onPageChange, portionSize = 3 }) => {
  const classes = useStyles();

  const pagesCount = Math.ceil(totalMoviesCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div >
      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <Grid container spacing={1} justifyContent="center">
          <Grid item>
            <Button
              className={classes.button}
              variant='outlined'
              onClick={() => {
                onPageChange(1);
                setPortionNumber(1); // Переход на первую страницу
              }}
              disabled={currentPage === 1}
            >
              First
            </Button>
          </Grid>

          <Grid item>
            <Button
              className={classes.button}
              variant="outlined"
              onClick={() => setPortionNumber(portionNumber - 1)}
              disabled={portionNumber === 1}
            >
              Prev
            </Button>
          </Grid>

          {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => (
              <Grid item key={p}>
                <Button
                  className={`${classes.button} ${currentPage === p ? classes.activeButton : ''}`}
                  variant={currentPage === p ? 'contained' : 'outlined'}
                  onClick={() => onPageChange(p)}
                  sx={{ margin: '0 4px' }}
                >
                  {p}
                </Button>
              </Grid>
            ))}

          {portionCount > portionNumber && (
            <Grid item>
              <Button
                className={classes.button}
                variant="outlined"
                onClick={() => setPortionNumber(portionNumber + 1)}
              >
                Next
              </Button>
            </Grid>
          )}

          <Grid item>
            <Button
              className={classes.button}
              variant="outlined"
              onClick={() => {
                onPageChange(pagesCount);
                setPortionNumber(portionCount); // Переход на последнюю страницу
              }}
              disabled={currentPage === pagesCount}
            >
              Last
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Paginator;
