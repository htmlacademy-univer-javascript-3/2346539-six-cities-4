import { City, Location } from './city';
import { Author, Review } from './review';

export type Offer = {
    city: City;
    id: string;
    isFavorite: boolean;
    isPremium: boolean;
    location: Location;
    previewImage: string;
    price: number;
    rating: number;
    title: string;
    type: string;
    reviews: Review[];
    masterInf: Author;
    nearPlaces: Offers;
    images: { src: string; alt: string }[];
    description: string;
};

export type Offers = Offer[]

