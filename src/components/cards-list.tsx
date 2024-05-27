import PlaceCard from './place-card';
import { Offer } from '../types/offer';

type CardsListProps = {
  citiesCards: Offer[];
  listType: 'typical' | 'near';
};

function CardsList({citiesCards, listType}: CardsListProps) {
  return (
    <div className={`${listType === 'typical' ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list'}`}>
      {citiesCards.map((city) => (
        <PlaceCard key={city.id} offerInfo={city} cityCardType={listType}/>
      ))}
    </div>
  );
}

export default CardsList;
