import {createAction} from '@reduxjs/toolkit';
import { LoadingStatus, sortTypes } from '../components/constants/all-constants';
import { Offer } from '../types/offer';
import { City } from '../types/city';

export const cityChange = createAction<string>('сityChange');

export const setCity = createAction<City>('setCity');

export const listFilling = createAction('listFilling');

export const sortTypeSelect = createAction<sortTypes>('sortTypeSelect');

export const highlightMarker = createAction<{ id: string } | null>('highlightMarker');

export const loadOffers = createAction<Offer[]>('loadOffers');

export const setLoadingStatus = createAction<LoadingStatus>('setLoadingStatus');
