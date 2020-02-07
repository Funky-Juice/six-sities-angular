
export enum OfferType {
  APARTMENT = 'Apartment',
  ROOM = 'Room',
  HOUSE = 'House',
  HOTEL = 'Hotel'
}

export interface Offer {
  type: OfferType;
  rating: number;
  price: number;
  img: string;
  title: string;
  isPremium: boolean;
  isFavorite: boolean;
}
