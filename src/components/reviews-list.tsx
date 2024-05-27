import { Review } from '../types/review';
import ReviewItem from './review-item';

type ReviewListProps = {
  reviews: Review[];
}
function ReviewList({reviews}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
  );
}
export default ReviewList;
