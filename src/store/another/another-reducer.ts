import { createReducer } from '@reduxjs/toolkit';
import { cityChange, setCity, setError, setFavorites, setRandomCity, sortTypeSelect } from './another-actions';
import { City, defaultCity } from '../../types/city';
import { sortTypes } from '../../components/constants/all-constants';
import { Cities } from '../../components/constants/cities';
import { Offer } from '../../types/offer';
import { initialOffersState } from '../offer/offer-reducer';

export type AnotherStateType = {
  city: City;
  sortType: sortTypes;
  error: string;
  randomCity: City;
  favorites: Offer[];
};

export const initialAnotherState: AnotherStateType = {
  city: defaultCity,
  sortType: sortTypes.Popular,
  error: '',
  randomCity: Cities[1],
  favorites: [],
};

export const anotherReducer = createReducer((initialOffersState && initialAnotherState), (builder) => {
  builder
    .addCase(setCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(sortTypeSelect, (state, { payload }) => {
      state.sortType = payload;
    })
    .addCase(cityChange, (state, { payload }) => {
      state.city = {...state.city, name: payload};
    })
    .addCase(setError, (state, { payload }) => {
      state.error = payload;
    })
    .addCase(setRandomCity, (state, { payload }) => {
      state.randomCity = payload;
    })
    .addCase(setFavorites, (state, { payload }) => {
      state.favorites = payload;
    });
});
