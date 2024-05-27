import {createReducer} from '@reduxjs/toolkit';
import { Offer } from './types/offer';
import { listFilling, cityChange } from './action';
import { offers } from './mocks/offers';

type StateType = {
  city: string;
  offers: Offer[];
};

const initialState: StateType = {
  city: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, {payload}) => {
      state.city = payload as unknown as string;
    })
    .addCase(listFilling, (state) => {
      state.offers = offers;
    });
});

export {reducer};
