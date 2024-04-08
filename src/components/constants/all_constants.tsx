export const enum AuthorizationPage {
    Auth ='AUTH',
    NotAuth = 'NOT_AUTH',
    Unknown = 'UNKNOWN'
}

export const enum AppLink {
    mainPage = '/',
    loginPage = '/login',
    favoritePage = '/favorites',
    offerPage = '/offer/:id',
    errorPage = '404'
}

export const Settings = {
  cardsNumber: 312
} as const;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const getRating = (rate: number) => `${(rate / 5) * 100}%`;