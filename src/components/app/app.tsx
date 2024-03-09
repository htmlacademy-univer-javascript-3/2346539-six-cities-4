import FavoritePage from '../../pages/favorites';
import LoginPage from '../../pages/login';
import MainPage from '../../pages/mainPage';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import OfferPage from '../../pages/offer';
import Page404 from '../../pages/page404';

 type AppPageProps = {
  placesCount: number;
}

function App({placesCount}: AppPageProps): JSX.Element {
  return (
   // <MainPage placesCount={placesCount} />
   <BrowserRouter>
   <Routes>
     // '/url1' — подстрока, которая должна содержаться в адресной строке,
     // чтобы был отображён компонент Page1
     <Route
       path='/'
       element={<MainPage placesCount={placesCount}/>}
     />
     // '/url2' — подстрока, которая должна содержаться в адресной строке,
     // чтобы был отображён компонент Page2
     <Route
       path='/login'
       element={<LoginPage />}
     />
     ....
     // '/urlN; — подстрока, которая должна содержаться в адресной строке,
     // чтобы был отображён компонент PageN
     <Route
       path='/favorites'
       element={<FavoritePage />}
     />
      <Route
       path='/offer/:id'
       element={<OfferPage />}
     />
      <Route
       path='*'
       element={<Page404 />}
     />
   </Routes>
 </BrowserRouter>

  );
}

export default App;
