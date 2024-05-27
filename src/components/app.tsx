import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavouritesPage from '../pages/favourites-page/favourites-page';
import OfferPage from '../pages/offer-page/offer-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import { AppRoute } from './constants/all-constants';
import PrivateRoute from './private-route';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage/>}/>

        <Route path={AppRoute.Login} element={<LoginPage/>}/>

        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavouritesPage/>
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Offer} element={<OfferPage/>}/>

        <Route path={AppRoute.NotFound} element={<NotFoundPage/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
