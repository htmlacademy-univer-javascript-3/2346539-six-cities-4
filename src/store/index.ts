import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { createApi } from '../api/api';

export const api = createApi();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
