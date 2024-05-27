import { Offer } from '../types/offer';
import { Link } from 'react-router-dom';
import { CITY_CARD_HEIGHT, CITY_CARD_WIDTH } from './constants/all-constants';
import { getRating } from './constants/all-constants';
import { useAppDispatch } from './hooks';
import { highlightMarker } from '../store/action';

type PlaceCardProp = {
  offerInfo: Offer;
  cityCardType: 'typical' | 'near';
};

function PlaceCard({ offerInfo, cityCardType }: PlaceCardProp): JSX.Element {

  const {
    id,
    title,
    type,
    price,
    //city,
    //location,
    isFavorite,
    isPremium,
    rating,
    previewImage,
  } = offerInfo;

  const dispatch = useAppDispatch();

  return (
    <Link to={`/offer/${offerInfo.id}`} state={offerInfo}>
      <article
        className={`${cityCardType === 'typical' ? 'cities__card place-card' : 'near-places__card place-card'}`}
        onMouseEnter={() => dispatch(highlightMarker({id}))}
        onMouseLeave={() => dispatch(highlightMarker(null))}
        onClick={() => window.scrollTo(0, 0)}
      >
        {isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <img className="place-card__image" src={previewImage} width={CITY_CARD_WIDTH} height={CITY_CARD_HEIGHT}
            alt="Place image"
          />
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
              type="button"
            >
              <span>
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: getRating(rating) }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">{title}</h2>
          <p className="place-card__type">{type.toUpperCase()}</p>
        </div>
      </article>
    </Link>
  );
}

export default PlaceCard;
