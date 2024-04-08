import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { Settings } from './components/constants/all_constants';
import { reviews } from './mocks/reviews';

// eslint-disable-next-line react-refresh/only-export-components

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={Settings.cardsNumber} offers={offers} reviews={reviews}/>
  </React.StrictMode>
);
