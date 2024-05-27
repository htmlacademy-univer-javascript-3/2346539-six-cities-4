import { createReducer } from '@reduxjs/toolkit';
import { addReview, highlightMarker, loadOffer, loadOffers, setLoadingStatus } from './offer-actions';
import { Offer } from '../../types/offer';
import { LoadingStatus } from '../../components/constants/all-constants';
import { Review } from '../../types/review';

export type OffersStateType = {
  selectedMarker: { id: string } | null;
  currentOffer?: Offer;
  offers: Offer[];
  loadingStatus: LoadingStatus;
  review: Review[];
};

export const initialOffersState: OffersStateType = {
  selectedMarker: null,
  currentOffer: undefined,
  offers: [],
  loadingStatus: LoadingStatus.Success,
  review: [],
};


export const offersReducer = createReducer(initialOffersState, (builder) => {
  builder
    .addCase(loadOffers, (state, { payload }) => {
      state.offers = payload;
    })
    .addCase(loadOffer, (state, { payload }) => {
      state.currentOffer = payload;
    })
    .addCase(addReview, (state, { payload }) => {
      state.currentOffer?.reviews?.push(payload);
    })
    .addCase(setLoadingStatus, (state, { payload }) => {
      state.loadingStatus = payload;
    })
    .addCase(highlightMarker, (state, { payload }) => {
      state.selectedMarker = payload;
    });
});
