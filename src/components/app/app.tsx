import FavoritePage from '../../pages/favorites';
import LoginPage from '../../pages/login';
import MainPage from '../../pages/mainPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OfferPage from '../../pages/offer';
import Page404 from '../../pages/page404';
import AppLink from '../links';
import PrivateRoute from '../PrivateRoute';
import AuthorizationPage from '../Authorization';

 type AppPageProps = {
  placesCount: number;
}

function App({placesCount}: AppPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppLink.mainPage}
          element={<MainPage placesCount={placesCount}/>}
        />

        <Route
          path={AppLink.loginPage}
          element={<LoginPage />}
        />

        <Route
          path={AppLink.favoritePage}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationPage.NotAuth}
            >
              <FavoritePage />
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
