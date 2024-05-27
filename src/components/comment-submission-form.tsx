import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { LoadingStatus, REVIEW_MAX_LENGTH, REVIEW_MIN_LENGTH } from './constants/all-constants';
import { postReview } from '../store/api-actions';


function CommentSubmissionForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    rating: 0,
    comment: ''
  });

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, rating: Number(event.target.value) });
  };

  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, comment: event.target.value });
  };

  const user = useAppSelector((state) => state.userReducer.author!);
  const id = useAppSelector((state) => state.offersReducer.currentOffer!.id);
  const loadingStatus = useAppSelector((state) => state.offersReducer.loadingStatus);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(postReview({
      id: id,
      user: user,
      date: new Date().toISOString(),
      rating: formData.rating,
      comment: formData.comment
    })).then(() => {
      if (loadingStatus === LoadingStatus.Success){
        setFormData({rating: 0, comment: ''});
      }
    });
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      {loadingStatus === LoadingStatus.Error && <div><span>Something went wrong, check the requirements and try again later.</span></div>}
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" checked={formData.rating === 5} onChange={handleRatingChange}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" checked={formData.rating === 4} onChange={handleRatingChange}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" checked={formData.rating === 3} onChange={handleRatingChange}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" checked={formData.rating === 2} onChange={handleRatingChange}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" checked={formData.rating === 1} onChange={handleRatingChange}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={formData.comment} onChange={handleReviewChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!formData.rating || formData.comment.length < REVIEW_MIN_LENGTH || formData.comment.length > REVIEW_MAX_LENGTH || loadingStatus === LoadingStatus.Pending}>Submit</button>
      </div>
    </form>
  );
}
export default CommentSubmissionForm;
