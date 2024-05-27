import { useMemo } from 'react';
import { sortTypes } from '../constants/all-constants';
import { Offer } from '../../types/offer';

export default function useSort(offers: Offer[], sortType: sortTypes): Offer[] {
  return useMemo(() => {
    switch (sortType) {
      case sortTypes.PriceUp:
        return [...offers].sort((a, b) => a.price - b.price);
      case sortTypes.PriceDown:
        return [...offers].sort((a, b) => b.price - a.price);
      case sortTypes.Top:
        return [...offers].sort((a, b) => b.rating - a.rating);
      case sortTypes.Popular:
      default:
        return offers;
    }
  }, [offers, sortType]);
}
