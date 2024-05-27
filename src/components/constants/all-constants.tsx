/* eslint-disable react-refresh/only-export-components */
export const enum AuthStatus {
    Auth ='AUTH',
    NotAuth = 'NOT_AUTH',
    Unknown = 'UNKNOWN'
}

export const CITY_CARD_WIDTH = '260';

export const CITY_CARD_HEIGHT = '200';

export const REVIEW_SIZE = '54';

export const BOOKMARK_ICON_WIDTH = '18';

export const BOOKMARK_ICON_HEIGHT = '19';

export const enum AppRoute {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer/:id',
    NotFound = '*'
}

export const Settings = {
  cardsNumber: 312
} as const;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'public/img/pin-active.svg';

export const getRating = (rate: number) => `${(rate / 5) * 100}%`;

export enum sortTypes {
  Popular = 'Popular',
  PriceUp = 'Price: low to high',
  PriceDown = 'Price: high to low',
  Top = 'Top rated first',
}

export enum ApiRoute {
  Offers = '/offers',
  Reviews = '/comments',
  Favourites = '/favorite'
}

export enum ApiConst {
  baseURL = 'https://14.design.htmlacademy.pro/six-cities',
  RequestTimeout = 5000,
  TokenKeyName = 'six-cities-token'
}

export enum LoadingStatus {
  Idle,
  Pending,
  Success,
  Error
}

