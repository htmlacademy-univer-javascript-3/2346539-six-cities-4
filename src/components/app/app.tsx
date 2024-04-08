import FavoritePage from '../../pages/favorites';
import LoginPage from '../../pages/login';
import MainPage from '../../pages/mainPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OfferPage from '../../pages/offer';
import Page404 from '../../pages/page404';
import PrivateRoute from '../PrivateRoute';
import { AuthorizationPage, AppLink } from '../constants/all_constants';
import { Offer } from '../../types/offerType';

type AppPageProps = {
  placesCount: number;
  offers: Offer[];
}

function App({placesCount, offers}: AppPageProps): JSX.Element {
  const favorites = offers.filter((o) => o.isFavorite);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppLink.mainPage}
          element={<MainPage placesCount={placesCount} offers={offers}/>}
        />

        <Route
          path={AppLink.loginPage}
          element={<LoginPage />}
        />

        <Route
          path={AppLink.favoritePage}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationPage.Auth}
            >
              <FavoritePage
                favorites={favorites}
              />
            </PrivateRoute>
          }
        />

        <Route
          path={AppLink.offerPage}
          element={<OfferPage />}
        />

        <Route
          path={AppLink.errorPage}
          element={<Page404 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
