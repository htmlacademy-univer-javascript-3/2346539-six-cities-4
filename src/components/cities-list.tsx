import { City } from '../types/city';
import { Cities } from './constants/cities';

type CitiesListProps = {
  cities: typeof Cities;
  currentCity: City;
  onCityClick: (cityName: City) => void;
};

export default function CitiesList({ cities, currentCity, onCityClick }: CitiesListProps): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city.name}>
          <a
            className={`locations__item-link tabs__item ${
              currentCity.name === city.name ? 'tabs__item--active' : ''
            }`}
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
