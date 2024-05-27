import { Link, Navigate, useParams } from 'react-router-dom';
import { Offer } from '../../types/offer';
import CommentSubmissionForm from '../../components/comment-submission-form';
import ReviewsList from '../../components/reviews-list';
import CityMap from '../../components/cityMap';
import CardsList from '../../components/cards-list';
import { Review } from '../../types/review';
import { AppRoute } from '../../components/constants/all-constants';

type OfferPageProps = {
  reviews: Review[];
  offers: Offer[];
}

function OfferPage({reviews, offers}: OfferPageProps): JSX.Element {
  const {id} = useParams();
  const numId = String(id);
  const selectedOffer = offers.find((offer) => offer.id === numId);
  return (
    !selectedOffer
      ? <Navigate to={AppRoute.NotFound} />
      :
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to='/' className="header__logo-link">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <Link to="/favorites">
                        <span className="header__favorite-count">3</span>
                      </Link>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--offer">
          <section className="offer"/>
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/room.jpg" alt="Photo studio"/>
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio"/>
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-02.jpg" alt="Photo studio"/>
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-03.jpg" alt="Photo studio"/>
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/studio-01.jpg" alt="Photo studio"/>
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio"/>
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                    Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                    Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                    3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                    Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;120</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">
                      Wi-Fi
                  </li>
                  <li className="offer__inside-item">
                      Washing machine
                  </li>
                  <li className="offer__inside-item">
                      Towels
                  </li>
                  <li className="offer__inside-item">
                      Heating
                  </li>
                  <li className="offer__inside-item">
                      Coffee machine
                  </li>
                  <li className="offer__inside-item">
                      Baby seat
                  </li>
                  <li className="offer__inside-item">
                      Kitchen
                  </li>
                  <li className="offer__inside-item">
                      Dishwasher
                  </li>
                  <li className="offer__inside-item">
                      Cabel TV
                  </li>
                  <li className="offer__inside-item">
                      Fridge
                  </li>
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                      Angelina
                  </span>
                  <span className="offer__user-status">
                      Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                      A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews}/>
                <CommentSubmissionForm />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <CityMap city={selectedOffer.city} points={selectedOffer.nearPlaces}/>
          </section>
          <div className="container">
            <section className="near-places places"/>
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardsList citiesCards={selectedOffer.nearPlaces}/>
          </div>
        </main>
      </div>
  );
}

export default OfferPage;
