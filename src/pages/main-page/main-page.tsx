import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../components/hooks/index.ts';
import CardsList from '../../components/cards-list';
import CityMap from '../../components/cityMap';
import CitiesList from '../../components/cities-list.tsx';
import Sorting from '../../components/sorting.tsx';
import Spinner from '../../components/spinner.tsx';
import useSort from '../../components/hooks/useSort.ts';
import { cityChange, setCity } from '../../store/action';
import { Cities } from '../../components/constants/cities.tsx';
import { sortTypes, LoadingStatus } from '../../components/constants/all-constants.tsx';
import { Offer } from '../../types/offer';
import { City } from '../../types/city.ts';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers: Offer[] = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  const loadingStatus = useAppSelector((state) => state.loadingStatus);
  const currentCityOffers = offers.filter((offer: Offer) => offer.city.name === currentCity.name);
  const favorites = offers.filter((offer: Offer) => offer.isFavorite);

  const [selectedSort, selectSort] = useState<sortTypes>(sortTypes.Popular);
  const sortedOffers = useSort(currentCityOffers, selectedSort);

  const handleCityChange = (newCity: City) => {
    dispatch(setCity(newCity));
  };

  useEffect(() => {
    if (offers.length > 0 && !currentCityOffers.length) {
      dispatch(cityChange(offers[0].city.name));
    }
  }, [offers, currentCityOffers, dispatch]);

  if (!currentCity) {
    return <Spinner />;
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <Link to="/favorites">
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">{favorites.length}</span>
                    </Link>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={Cities} currentCity={currentCity} onCityClick={handleCityChange} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentCityOffers.length} places to stay in {currentCity.name}</b>
              <Sorting onClick={selectSort} sortByCurrent={selectedSort}/>
              {loadingStatus === LoadingStatus.Pending && <Spinner />}
              <CardsList citiesCards={sortedOffers} listType={'typical'}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <CityMap city={currentCity} points={currentCityOffers}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
