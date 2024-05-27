import { createReducer } from '@reduxjs/toolkit';
import { setAuthStatus, setAuthor } from './user-actions';
import { AuthStatus } from '../../components/constants/all-constants';
import { Author } from '../../types/review';

export type UserStateType = {
  authStatus: AuthStatus;
  author?: Author;
};


export const initialUserState: UserStateType = {
  authStatus: AuthStatus.Unknown,
  author: undefined,
};

export const userReducer = createReducer(initialUserState, (builder) => {
  builder
    .addCase(setAuthStatus, (state, { payload }) => {
      state.authStatus = payload;
    })
    .addCase(setAuthor, (state, { payload }) => {
      state.author = payload;
    });
});
