import { memo } from 'react';
import { City } from '../types/city';
import { Cities } from './constants/cities';

type CitiesListProps = {
  cities: typeof Cities;
  currentCity: City;
  onCityClick: (cityName: City) => void;
};

function CitiesList({ cities, currentCity, onCityClick }: CitiesListProps): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city.name}>
          <a
            className="tabs__item locations__item-link" style={city === currentCity ? {textShadow: '1px 0 0, .5px 0 0, -1px 0 0'} : {}}
            href="#"
            onClick={() => onCityClick(city)}
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

const CitiesListMemo = memo(CitiesList);
export default CitiesListMemo;
