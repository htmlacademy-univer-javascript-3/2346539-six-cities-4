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
import Header from '../../components/header.tsx';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers: Offer[] = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  const loadingStatus = useAppSelector((state) => state.loadingStatus);
  const currentCityOffers = offers.filter((offer: Offer) => offer.city.name === currentCity.name);

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
      <Header/>
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
