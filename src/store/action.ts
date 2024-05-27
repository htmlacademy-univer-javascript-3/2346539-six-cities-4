import {createAction} from '@reduxjs/toolkit';
import { LoadingStatus, sortTypes } from '../components/constants/all-constants';
import { AuthStatus } from '../components/constants/all-constants';
import { Offer } from '../types/offer';
import { City } from '../types/city';
import { Author } from '../types/review';
import { Review } from '../types/review';

export const cityChange = createAction<string>('сityChange');

export const setCity = createAction<City>('setCity');

export const listFilling = createAction('listFilling');

export const sortTypeSelect = createAction<sortTypes>('sortTypeSelect');

export const highlightMarker = createAction<{ id: string } | null>('highlightMarker');

export const loadOffers = createAction<Offer[]>('loadOffers');

export const loadOffer = createAction<Offer>('loadOffer');

export const setLoadingStatus = createAction<LoadingStatus>('setLoadingStatus');

export const setAuthStatus = createAction<AuthStatus>('setAuthStatus');

export const setAuthor = createAction<Author | undefined>('setUser');

export const setError = createAction<string>('setError');

export const addReview = createAction<Review>('addReview');
