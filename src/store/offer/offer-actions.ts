import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import { LoadingStatus } from '../../components/constants/all-constants';
import { Review } from '../../types/review';

export const loadOffers = createAction<Offer[]>('loadOffers');

export const loadOffer = createAction<Offer>('loadOffer');

export const highlightMarker = createAction<{ id: string } | null>('highlightMarker');

export const setLoadingStatus = createAction<LoadingStatus>('setLoadingStatus');

export const addReview = createAction<Review>('addReview');
