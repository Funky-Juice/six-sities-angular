import {OfferType} from '../../app/shared/interfaces';

export const offers = [
  {
    id: 1,
    type: OfferType.APARTMENT,
    price: 120,
    title: `Beautiful & luxurious apartment at great location`,
    img: `apartment-01.jpg`,
    rating: 5,
    isPremium: true,
    isFavorite: false
  },
  {
    id: 2,
    type: OfferType.ROOM,
    price: 80,
    title: `Wood and stone place`,
    img: `room.jpg`,
    rating: 3,
    isPremium: false,
    isFavorite: true
  },
  {
    id: 3,
    type: OfferType.HOTEL,
    price: 220,
    title: `Canal View Prinsengracht`,
    img: `apartment-02.jpg`,
    rating: 5,
    isPremium: true,
    isFavorite: false
  },
  {
    id: 4,
    type: OfferType.HOUSE,
    price: 180,
    title: `Nice, cozy, warm big bed apartment`,
    img: `apartment-03.jpg`,
    rating: 4,
    isPremium: false,
    isFavorite: false
  }
];
