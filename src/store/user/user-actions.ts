import { createAction } from '@reduxjs/toolkit';
import { AuthStatus } from '../../components/constants/all-constants';
import { Author } from '../../types/review';

export const setAuthStatus = createAction<AuthStatus>('setAuthStatus');

export const setAuthor = createAction<Author | undefined>('setUser');
