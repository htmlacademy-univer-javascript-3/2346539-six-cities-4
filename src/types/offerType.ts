export type Offer = {
    previewImage: string;
    id: string;
    isPremium: boolean;
    price: number;
    title: string;
    type: string;
    isFavorite: boolean;
    rating: number;
    bedrooms: number;
    guests: number;
    author: Author;
    city: City;
    }

export type Author = {
    previewImage: string;
    name: string;
    isPro: boolean;
    }

export type City = {
    name: string;
    //latitude: number;
    //longitude: number;
    }
