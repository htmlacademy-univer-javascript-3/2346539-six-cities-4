import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, cityChange, sortTypeSelect, highlightMarker, setLoadingStatus, setCity } from './action';
import { LoadingStatus, sortTypes } from '../components/constants/all-constants';
import { City, defaultCity } from '../types/city';
import { Offer } from '../types/offer';

type StateType = {
  city: City;
  offers: Offer[];
  sortType: sortTypes;
  loadingStatus: LoadingStatus;
  selectedMarker: { id: string } | null;
};

const initialState: StateType = {
  city: defaultCity,
  offers: [],
  sortType: sortTypes.Popular,
  loadingStatus: LoadingStatus.Success,
  selectedMarker: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, { payload }) => {
      state.city = {
        ...state.city,
        name: payload,
      };
    })
    .addCase(loadOffers, (state, { payload }) => {
      state.offers = payload;
    })
    .addCase(setCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setLoadingStatus, (state, { payload }) => {
      state.loadingStatus = payload;
    })
    .addCase(sortTypeSelect, (state, { payload }) => {
      state.sortType = payload;
    })
    .addCase(highlightMarker, (state, { payload }) => {
      state.selectedMarker = payload;
    });
});

export { reducer };
