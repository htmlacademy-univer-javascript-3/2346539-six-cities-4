import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { fetchFavorites } from '../../store/api-actions';
import PlaceCard from '../../components/place-card';
import Header from '../../components/header';

function FavouritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector((state) => state.anotherReducer.favorites);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const cities = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));

  return (
    <div className="page">
      <Header />
      {favoriteOffers.length > 0 ? (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {cities.map((city) => (
                  <div key={city}>
                    <h2 className="favorites__cities">{city}</h2>
                    <div className="favorites__places">
                      {favoriteOffers.filter((offer) => offer.city.name === city).map((offer) => (
                        <PlaceCard key={offer.id} offerInfo={offer} cityCardType="typical" />
                      ))}
                    </div>
                  </div>
                ))}
              </ul>
            </section>
          </div>
        </main>
      ) : (
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main>
      )}
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavouritesPage;
