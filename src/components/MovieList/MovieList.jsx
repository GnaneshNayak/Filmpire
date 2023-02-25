import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';

import { Movie } from '../index';

function MovieList({ movies }) {
  const classes = useStyles();
  console.log(movies);
  return (
    <Grid container className={classes.movieContainer}>
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
}

export default MovieList;
