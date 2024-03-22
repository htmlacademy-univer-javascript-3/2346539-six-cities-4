import Card from './Card';
import { Offer } from '../types/offerType';

type CardsListProps = {
    citiesCards: Offer[];
};

function CardsList({citiesCards}: CardsListProps) {
return (
    <div className="cities__places-list places__list tabs__content">
    {citiesCards.map((city) => (
        <Card key={city.id} offerInfo={city}/>
    ))}
    </div>
);
}

export default CardsList;