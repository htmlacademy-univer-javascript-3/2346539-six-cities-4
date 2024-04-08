import { Offer } from '../types/offerType';

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
    'bedrooms': 3,
    'guests': 4,
    'price': 170,
    'author': {
      'previewImage':'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'isPro': true
    }
  },

  {
    'id': '1',
    'previewImage': 'img/apartment-02.jpg',
    'title': 'Luxurious studio at great location',
    'isPremium': true,
    'isFavorite': true,
    'type': 'Apartment',
    'rating': 4.8,
    'city': {
      'name': 'Amsterdam',
      'point': {
        'latitude': 52.3609553943508,
        'longitude': 4.85309666406198,
      },
      'zoom': 5,
    },
    'bedrooms': 3,
    'guests': 4,
    'price': 150,
    'author': {
      'previewImage':'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'isPro': true
    }
  },

  {
    'id': '2',
    'previewImage': 'img/apartment-03.jpg',
    'title': 'Beautiful studio at great location',
    'isPremium': true,
    'isFavorite': false,
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
    'bedrooms': 3,
    'guests': 4,
    'price': 140,
    'author': {
      'previewImage':'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'isPro': true
    }
  },

  {
    'id': '3',
    'previewImage': 'img/room.jpg',
    'title': 'Beautiful room',
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
    'bedrooms': 3,
    'guests': 4,
    'price': 150,
    'author': {
      'previewImage':'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'isPro': true
    }
  },
];
