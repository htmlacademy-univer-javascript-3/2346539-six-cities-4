import PlaceCard from '../../components/place-card';
import { Offer } from '../../types/offer';
import Header from '../../components/header';

function FavouritesPage(): JSX.Element {
  const favorites: Offer[] = [];
  const favoritesMap = favorites.reduce(
    (cityMap: Record<string, Offer[]>, place: Offer) => {
      const city = place.city.name;
      cityMap[city] = [...(cityMap[city] ?? []), place];
      return cityMap;
    },
    {}
  );

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(favoritesMap).map((city) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoritesMap[city].map((place) => (
                      <PlaceCard key={place.id} offerInfo={place} cityCardType='typical'/>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    ;
    </div>
  );
}

export default FavouritesPage;
