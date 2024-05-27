import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoute, AuthStatus, LoadingStatus } from '../components/constants/all-constants.tsx';
import { Offer } from '../types/offer.ts';
import { AxiosInstance } from 'axios';
import { Review } from '../types/review.ts';
import { AppDispatch } from '../types/state.ts';
import { loadOffers, setLoadingStatus, setAuthStatus, setAuthor, addReview, loadOffer } from './action.ts';
import { Author } from '../types/review.ts';
import { deleteToken, setToken } from '../api/token.ts';


type ThunkApiConfig = {
  dispatch: AppDispatch;
  extra: AxiosInstance;
};

type UserLogin = {
  email: string;
  password: string;
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
    const {data: nearby} = await api.get<Offer[]>(`${ApiRoute.Offers}/${offerId}/nearby`);
    offer.reviews = reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    offer.nearPlaces = nearby;
    dispatch(setLoadingStatus(LoadingStatus.Success));
    dispatch(loadOffer(offer));
    return offer;
  }
);

export const checkAuth = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(setAuthStatus(AuthStatus.Auth));
    } catch {
      dispatch(setAuthStatus(AuthStatus.NotAuth));
    }
  }
);

export const login = createAsyncThunk<void, UserLogin, ThunkApiConfig>(
  'user/login',
  async (userLogin: UserLogin, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(LoadingStatus.Pending));
    try {
      const {data} = await api.post<Author>(ApiRoute.Login, userLogin);
      setToken(data.token);
      dispatch(setAuthStatus(AuthStatus.Auth));
      dispatch(setAuthor(data));
      dispatch(setLoadingStatus(LoadingStatus.Success));
    } catch {
      dispatch(setLoadingStatus(LoadingStatus.Error));
    }
  },
);

export const logout = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    deleteToken();
    dispatch(setAuthStatus(AuthStatus.NotAuth));
    dispatch(setAuthor(undefined));
  }
);

export const postReview = createAsyncThunk<void, Review, ThunkApiConfig>(
  'postReview',
  async (reviewData, { dispatch, extra: api }) => {
    dispatch(setLoadingStatus(LoadingStatus.Pending));
    try {
      const { data: review } = await api.post<Review>(
        `${ApiRoute.Reviews}/${reviewData.id}`,
        {
          comment: reviewData.comment,
          rating: reviewData.rating,
        }
      );
      dispatch(setLoadingStatus(LoadingStatus.Success));
      dispatch(addReview(review));
    } catch (e) {
      dispatch(setLoadingStatus(LoadingStatus.Error));
    }
  }
);
