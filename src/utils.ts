import { Offer } from './types/offer';

export const getSorting = (
  offers: Offer[],
  sortType: string
): Offer[] | never => {
  switch (sortType) {
    case 'Popular':
      return offers;
    case 'Price: low to high':
      return offers.sort((offerA, offerB) => offerA.price - offerB.price);
    case 'Price: high to low':
      return offers.sort((offerA, offerB) => offerB.price - offerA.price);
    case 'Top rated first':
      return offers.sort((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      throw new Error('Unknown sort type');
  }
};
