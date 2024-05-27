import { sortTypes } from '../constants/all-constants';
import { Offer } from '../../types/offer';

const compareFun: { [key in sortTypes]: (a: Offer, b: Offer) => number } = {
  [sortTypes.Popular]: () => 0,
  [sortTypes.Top]: (a: Offer, b: Offer) => b.rating - a.rating,
  [sortTypes.PriceUp]: (a: Offer, b: Offer) => a.price - b.price,
  [sortTypes.PriceDown]: (a: Offer, b: Offer) => b.price - a.price
};

export default function useSort(offers: Offer[], sorting: sortTypes) {
  if (sorting === sortTypes.Popular as sortTypes) {
    return offers;
  }
  // Make a copy and sort
  return [...offers].sort(compareFun[sorting]);
}
