import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavouritesPage from '../pages/favourites-page/favourites-page';
import OfferPage from '../pages/offer-page/offer-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import { AppRoute, AuthStatus } from './constants/all-constants';
import PrivateRoute from './private-route';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { useAppDispatch, useAppSelector } from './hooks/index.ts';
import { listFilling } from '../action.ts';

type AppPageProps = {
  reviews: Review[];
};

function App({reviews}: AppPageProps): JSX.Element {
  const offers: Offer[] = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();
  dispatch(listFilling());

  const favorites = offers.filter((o) => o.isFavorite);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage favorites = {favorites}/>}/>

        <Route path={AppRoute.Login} element={<LoginPage/>}/>

        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute authStatus={AuthStatus.Auth}>
              <FavouritesPage favorites={favorites}/>
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Offer} element={<OfferPage reviews={reviews} offers={offers}/>}/>

        <Route path={AppRoute.NotFound} element={<NotFoundPage/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
