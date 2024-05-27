import PlaceCard from './place-card';
import { Offer } from '../types/offer';

type CardsListProps = {
    citiesCards: Offer[];
};

function CardsList({citiesCards}: CardsListProps) {
  return (
    <div
      className={'cities__places-list tabs__content'}
    >
      {citiesCards.map((city) => (
        <PlaceCard key={city.id} offerInfo={city}/>
      ))}
    </div>
  );
}

export default CardsList;
