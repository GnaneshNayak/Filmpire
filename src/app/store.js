// import { configureStore } from '@reduxjs/toolkit';
// import { tmdbApi } from '../services/TMBD';

// export default configureStore({
//   reducer: {
//     [tmdbApi.reducerPath]: tmdbApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(tmdbApi.middleware),
// });

import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMBD';
import genreOrCategoryReducer from '../features/currentGenreOrCategory';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
