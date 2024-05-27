import {createReducer} from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { listFilling, cityChange, sortTypeSelect, highlightMarker } from './action';
import { offers } from '../mocks/offers';

type StateType = {
  city: string;
  offers: Offer[];
  sortType: string;
  selectedMarker: {
    id: string;
  } | null;
};

const initialState: StateType = {
  city: 'Paris',
  offers: [],
  sortType: 'Popular',
  selectedMarker: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, {payload}) => {
      state.city = payload;
    })
    .addCase(listFilling, (state) => {
      state.offers = offers;
    })
    .addCase(sortTypeSelect, (state, {payload}) => {
      state.sortType = payload;
    })
    .addCase(highlightMarker, (state, {payload}) => {
      state.selectedMarker = payload;
    });
});

export {reducer};
