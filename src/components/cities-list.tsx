import { useAppDispatch } from './hooks/index.ts';
import { cityChange } from '../store/action.ts';


type CitiesListProps = {
  cities: { name: string; id: number }[];
};

type CityProps = {
  name: string;
  cityChangeName: (city: string) => void;
};
const City = ({name, cityChangeName}: CityProps): JSX.Element => (
  <li className="locations__item" onClick={() => cityChangeName(name)}>
    <a className="locations__item-link tabs__item" href="#">
      <span>{name}</span>
    </a>
  </li>
);

function CitiesList({cities}: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityChange = (city: string) => {
    dispatch(cityChange(city));
  };
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City
          key={city.id}
          name={city.name}
          cityChangeName={handleCityChange}
        />
      ))}
    </ul>
  );
}

export default CitiesList;
