import {OfferType} from '../../app/shared/interfaces';

export const offers = [
  {
    id: 1,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    type: OfferType.APARTMENT,
    price: 120,
    title: `Beautiful & luxurious apartment at great location`,
    preview_image: `apartment-01.jpg`,
    images: [`apartment-01.jpg`, `apartment-01.jpg`, `apartment-01.jpg`, `apartment-01.jpg`, `apartment-01.jpg`, `apartment-01.jpg`],
    goods: [`Wi-Fi`, `Dishwasher`, `Dishwasher`, `Cabel TV`, `Coffee machine`],
    rating: 5,
    bedrooms: 3,
    max_adults: 4,
    is_premium: true,
    is_favorite: false,
    host: {
      id: 1,
      avatar_url: `avatar-angelina.jpg`,
      name: `Angelina`,
      is_pro: true
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    }
  },
  {
    id: 2,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    type: OfferType.ROOM,
    price: 80,
    title: `Wood and stone place`,
    preview_image: `room.jpg`,
    images: [`room.jpg`, `room.jpg`, `room.jpg`, `room.jpg`, `room.jpg`, `room.jpg`],
    goods: [`Wi-Fi`],
    rating: 3,
    bedrooms: 1,
    max_adults: 2,
    is_premium: false,
    is_favorite: true,
    host: {
      id: 2,
      avatar_url: `avatar-max.jpg`,
      name: `Max`,
      is_pro: false
    },
    description: null,
    location: {
      latitude: 52.358097,
      longitude: 4.921088,
      zoom: 8
    }
  },
  {
    id: 3,
    city: {
      name: `Berlin`,
      location: {
        latitude: 52.519881,
        longitude: 13.407338,
        zoom: 10
      }
    },
    type: OfferType.HOTEL,
    price: 220,
    title: `Canal View Prinsengracht`,
    preview_image: `apartment-02.jpg`,
    images: [`apartment-02.jpg`, `apartment-02.jpg`, `apartment-02.jpg`, `apartment-02.jpg`, `apartment-02.jpg`, `apartment-02.jpg`],
    goods: [`Wi-Fi`, `Dishwasher`],
    rating: 5,
    bedrooms: 2,
    max_adults: 3,
    is_premium: true,
    is_favorite: false,
    host: {
      id: 3,
      avatar_url: null,
      name: `Antony`,
      is_pro: false
    },
    description: null,
    location: {
      latitude: 52.517779,
      longitude: 13.413796,
      zoom: 8
    }
  },
  {
    id: 4,
    city: {
      name: `Paris`,
      location: {
        latitude: 48.856663,
        longitude: 2.351556,
        zoom: 10
      }
    },
    type: OfferType.HOUSE,
    price: 180,
    title: `Nice, cozy, warm big bed apartment`,
    preview_image: `apartment-03.jpg`,
    images: [`apartment-03.jpg`, `apartment-03.jpg`, `apartment-03.jpg`, `apartment-03.jpg`, `apartment-03.jpg`, `apartment-03.jpg`],
    goods: [],
    rating: 4,
    bedrooms: 1,
    max_adults: 1,
    is_premium: false,
    is_favorite: false,
    host: {
      id: 4,
      avatar_url: null,
      name: null,
      is_pro: false
    },
    description: null,
    location: {
      latitude: 48.859424,
      longitude: 2.356474,
      zoom: 8
    }
  },
  {
    id: 6,
    city: {
      name: `St.Petersburg`,
      location: {
        latitude: 59.939095,
        longitude: 30.315868,
        zoom: 10
      }
    },
    type: OfferType.APARTMENT,
    price: 180,
    title: `Apartment in St.Petersburg`,
    preview_image: `apartment-02.jpg`,
    images: [`apartment-02.jpg`, `apartment-02.jpg`, `apartment-02.jpg`, `apartment-02.jpg`, `apartment-02.jpg`, `apartment-02.jpg`],
    goods: [],
    rating: 4,
    bedrooms: 2,
    max_adults: 4,
    is_premium: false,
    is_favorite: false,
    host: {
      id: 6,
      avatar_url: `keks.jpg`,
      name: `Keks`,
      is_pro: true
    },
    description: null,
    location: {
      latitude: 59.938631,
      longitude: 30.323055,
      zoom: 8
    }
  },
  {
    id: 8,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    type: OfferType.APARTMENT,
    price: 80,
    title: `Apartment in Amsterdam`,
    preview_image: `apartment-03.jpg`,
    images: [`apartment-03.jpg`, `apartment-03.jpg`, `apartment-03.jpg`, `apartment-03.jpg`, `apartment-03.jpg`, `apartment-03.jpg`],
    goods: [`Wi-Fi`],
    rating: 3,
    bedrooms: 1,
    max_adults: 2,
    is_premium: false,
    is_favorite: true,
    host: {
      id: 8,
      avatar_url: `avatar-max.jpg`,
      name: `Max`,
      is_pro: false
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8
    }
  }
];
