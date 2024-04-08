import { City } from "./city";

export type Offer = {
    previewImage: string;
    id: string;
    isPremium: boolean;
    price: number;
    title: string;
    type: string;
    isFavorite: boolean;
    rating: number;
    city: City;
    bedrooms: number;
    guests: number;
    author: Author;
    nearPlaces: Offers;
    }

export type Author = {
    previewImage: string;
    name: string;
    isPro: boolean;
    }
    
export type Offers = Offer[]
