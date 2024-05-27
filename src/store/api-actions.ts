import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoute, LoadingStatus } from '../components/constants/all-constants.tsx';
import { Offer } from '../types/offer.ts';
import { AxiosInstance } from 'axios';
import { Review } from '../types/review.ts';
import { AppDispatch } from '../types/state.ts';
import { loadOffers, setLoadingStatus } from './action.ts';


type ThunkApiConfig = {
  dispatch: AppDispatch;
  extra: AxiosInstance;
};

export const fetchOffers = createAsyncThunk<Offer[], undefined, ThunkApiConfig>(
  'fetchOffers',
  async (_arg, {extra: api, dispatch}) => {
    dispatch(setLoadingStatus(LoadingStatus.Pending));
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);
    dispatch(setLoadingStatus(LoadingStatus.Success));
    dispatch(loadOffers(data));
    return data;
  }
);

export const fetchOffer = createAsyncThunk<Offer, Offer['id'], ThunkApiConfig>(
  'fetchOffer',
  async (offerId, {extra: api, dispatch}) => {
    dispatch(setLoadingStatus(LoadingStatus.Pending));
    const {data: offer} = await api.get<Offer>(`${ApiRoute.Offers}/${offerId}`);
    const {data: reviews} = await api.get<Review[]>(`${ApiRoute.Reviews}/${offerId}`);
    const {data: nearPlaces} = await api.get<Offer[]>(`${ApiRoute.Offers}/${offerId}/nearPlaces`);
    offer.reviews = reviews;
    offer.nearPlaces = nearPlaces;
    dispatch(setLoadingStatus(LoadingStatus.Success));
    return offer;
  }
);
