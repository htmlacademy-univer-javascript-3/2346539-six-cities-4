import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoute, AuthStatus, LoadingStatus } from '../components/constants/all-constants';
import { Offer, Offers } from '../types/offer';
import { AxiosInstance } from 'axios';
import { Author, Review } from '../types/review';
import { AppDispatch } from '../types/state';
import { loadOffer, loadOffers, setLoadingStatus, addReview } from './offer/offer-actions';
import { setAuthStatus, setAuthor } from './user/user-actions';
import { deleteToken, setToken } from '../api/token';
import { setFavorites } from './another/another-actions';

type ThunkApiConfig = {
  dispatch: AppDispatch;
  extra: AxiosInstance;
};

type UserLogin = {
  email: string;
  password: string;
};

export const fetchFavorites = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'fetchFavorites',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers>(ApiRoute.Favourites);
    dispatch(setFavorites(data));
  }
);

export const fetchOffers = createAsyncThunk<Offer[], undefined, ThunkApiConfig>(
  'fetchOffers',
  async (_arg, { extra: api, dispatch }) => {
    dispatch(setLoadingStatus(LoadingStatus.Pending));
    const { data } = await api.get<Offer[]>(ApiRoute.Offers);
    dispatch(setLoadingStatus(LoadingStatus.Success));
    dispatch(loadOffers(data));
    return data;
  }
);

export const toggleFavoriteStatus = createAsyncThunk<
  Offer,
  { offerId: string | undefined; status: number | undefined },
  {
    dispatch: AppDispatch;
    extra: AxiosInstance;
  }
>('toggleFavoriteStatus', async ({ offerId, status }, { dispatch, extra: api }) => {
  const { data } = await api.post<Offer>(`${ApiRoute.Favourites}/${offerId}/${status}`);
  await dispatch(fetchFavorites());
  return data;
});

export const fetchOffer = createAsyncThunk<Offer, Offer['id'], ThunkApiConfig>(
  'fetchOffer',
  async (offerId, { extra: api, dispatch }) => {
    dispatch(setLoadingStatus(LoadingStatus.Pending));
    const { data: offer } = await api.get<Offer>(`${ApiRoute.Offers}/${offerId}`);
    const { data: reviews } = await api.get<Review[]>(`${ApiRoute.Reviews}/${offerId}`);
    const { data: nearby } = await api.get<Offer[]>(`${ApiRoute.Offers}/${offerId}/nearby`);
    offer.reviews = reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    offer.nearPlaces = nearby;
    dispatch(setLoadingStatus(LoadingStatus.Success));
    dispatch(loadOffer(offer));
    return offer;
  }
);

export const checkAuth = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(setAuthStatus(AuthStatus.Auth));
      dispatch(fetchFavorites());
    } catch {
      dispatch(setAuthStatus(AuthStatus.NotAuth));
    }
  }
);

export const login = createAsyncThunk<void, UserLogin, ThunkApiConfig>(
  'user/login',
  async (userLogin: UserLogin, { dispatch, extra: api }) => {
    dispatch(setLoadingStatus(LoadingStatus.Pending));
    try {
      const { data } = await api.post<Author>(ApiRoute.Login, userLogin);
      setToken(data.token);
      dispatch(setAuthStatus(AuthStatus.Auth));
      dispatch(setAuthor(data));
      dispatch(fetchFavorites());
      dispatch(setLoadingStatus(LoadingStatus.Success));
    } catch {
      dispatch(setLoadingStatus(LoadingStatus.Error));
    }
  }
);

export const logout = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(ApiRoute.Logout);
    deleteToken();
    dispatch(setAuthStatus(AuthStatus.NotAuth));
    dispatch(setAuthor(undefined));
    dispatch(fetchFavorites());
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
