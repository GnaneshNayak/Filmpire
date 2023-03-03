import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route, useRoutes } from 'react-router-dom';
import useStyles from './styles.js';
import { Actors, MovieInformation, NavBar, Movies, Profile } from './index';

function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Movies /> },
    { path: '/movie/:id', element: <MovieInformation /> },
    { path: '/actors/:id', element: <Actors /> },
    { path: '/profile/:id', element: <Profile /> },
  ]);
  return routes;
}

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/approved" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
