import { Link } from 'react-router-dom';
import { Offer } from '../types/offerType';
import { getRating } from './constants/all_constants';

type PlaceCardProp = {
  offerInfo: Offer;
  searchType: 'regular' | 'near';
}

function Card({offerInfo, searchType}: PlaceCardProp): JSX.Element {
  const {
    id,
    previewImage,
    title,
    isPremium,
    isFavorite,
    type,
    rating,
    //city,
    //numOfBedrooms,
    //numOfGuests,
    price,
    //masterInf,
  } = offerInfo;

  return (
    <article className={`${searchType === 'regular'
    ? 'cities__card'
    : 'near-places__card'} place-card`}
  >
      {isPremium && (
        <div className="place-card__mark">
          <span>{'Premium'}</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src = {previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              {isFavorite && <use xlinkHref="#icon-bookmark"></use>}
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
          <span style={{width: getRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`} state={offerInfo}>{title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
