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

    reviews?: Review[];
    nearPlaces?: Offers;
    images: string[];
    description?: string;
    bedrooms?: number;
    goods?: string[];
    host?: Author;
    maxAdults?: number;
    status?: number;
};

export type Offers = Offer[]

