import { Link } from 'react-router-dom';
import CardsList from '../../components/cards-list';
import { Offer } from '../../types/offer';
import CityMap from '../../components/cityMap';
import { useAppSelector } from '../../components/hooks/index.ts';
import {useEffect, useState} from 'react';
import CitiesList from '../../components/cities-list.tsx';
import { Cities } from '../../components/constants/cities.tsx';


type MainPageProps = {
    favorites: Offer[];
};

function MainPage({favorites}: MainPageProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);

  const [curCityOffers, setCurCityOffers] = useState<Offer[]>(offers);


  const city = useAppSelector((state) => state.city);
  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city);
    setCurCityOffers(filteredOffers);
  }, [city, offers]);

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
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <Link to="/favorites">
                      <span className="header__favorite-count">{favorites.length}</span>
                    </Link>
                  </a>
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
            <CitiesList cities={Cities}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${curCityOffers.length} places to stay in ${city}`}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                    Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CardsList citiesCards={curCityOffers}/>
            </section>
            <div className="cities__right-section">
              <section className='cities__map map'>
                <CityMap city={curCityOffers.length > 0 ? curCityOffers[0].city : offers[0].city} points={curCityOffers}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
