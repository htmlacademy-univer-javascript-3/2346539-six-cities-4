import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    'id': '0',
    'previewImage': 'img/apartment-01.jpg',
    'title': 'Beautiful & luxurious studio at great location',
    'isPremium': true,
    'isFavorite': true,
    'type': 'Apartment',
    'rating': 4.8,
    'city': {
      'name': 'Amsterdam',
      'point': {
        'latitude': 52.3909553943508,
        'longitude': 4.85309666406198,
      },
      'zoom': 5,
    },
    'numOfBedrooms': 3,
    'numOfGuests': 4,
    'price': 120,
    'masterInf': {
      'photo':'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'isPro': true
    },
    'nearPlaces': []
  },

  {
    'id': '1',
    'previewImage': 'img/room.jpg',
    'title': 'Wood and stone place',
    'isPremium': false,
    'isFavorite': false,
    'type': 'Room',
    'rating': 3,
    'city': {
      'name': 'Amsterdam',
      'point': {
        'latitude': 52.3609553943508,
        'longitude': 4.85309666406198,
      },
      'zoom': 5,
    },
    'numOfBedrooms': 3,
    'numOfGuests': 4,
    'price': 80,
    'masterInf': {
      'photo':'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'isPro': true
    },
    'nearPlaces': []
  },


  {
    'id': '2',
    'previewImage': 'img/apartment-02.jpg',
    'title': 'Canal View Prinsengracht',
    'isPremium': true,
    'isFavorite': true,
    'type': 'Apartment',
    'rating': 4.8,
    'city': {
      'name': 'Amsterdam',
      'point': {
        'latitude': 52.3909553943508,
        'longitude': 4.929309666406198,
      },
      'zoom': 5,
    },
    'numOfBedrooms': 3,
    'numOfGuests': 4,
    'price': 132,
    'masterInf': {
      'photo':'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'isPro': true
    },
    'nearPlaces': []
  },


  {
    'id': '3',
    'previewImage': 'img/apartment-03.jpg',
    'title': 'Nice, cozy, warm big bed apartment',
    'isPremium': true,
    'isFavorite': true,
    'type': 'Apartment',
    'rating': 4.8,
    'city': {
      'name': 'Amsterdam',
      'point': {
        'latitude': 52.3809553943508,
        'longitude': 4.939309666406198,
      },
      'zoom': 5,
    },
    'numOfBedrooms': 3,
    'numOfGuests': 4,
    'price': 180,
    'masterInf': {
      'photo':'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'isPro': true
    },
    'nearPlaces': []
  },
];

offers[0].nearPlaces = [offers[1], offers[2], offers[3]];
offers[1].nearPlaces = [offers[0], offers[2], offers[3]];
offers[2].nearPlaces = [offers[1], offers[0], offers[3]];
offers[3].nearPlaces = [offers[1], offers[2], offers[0]];
