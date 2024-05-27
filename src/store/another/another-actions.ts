import { createAction } from '@reduxjs/toolkit';
import { City } from '../../types/city';
import { sortTypes } from '../../components/constants/all-constants';
import { Offers } from '../../types/offer';

export const setCity = createAction<City>('setCity');

export const setError = createAction<string>('setError');

export const cityChange = createAction<string>('сityChange');

export const listFilling = createAction('listFilling');

export const setRandomCity = createAction<City>('setRandomCity');

export const sortTypeSelect = createAction<sortTypes>('sortTypeSelect');

export const setFavorites = createAction<Offers>('setFavorites');
