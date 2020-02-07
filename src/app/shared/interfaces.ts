
export enum OfferType {
  APARTMENT = 'Apartment',
  ROOM = 'Room',
  HOUSE = 'House',
  HOTEL = 'Hotel'
}

export interface Offer {
  id: number;
  city: City;
  host: Host;
  type: OfferType;
  title: string;
  description: string;
  goods: string[];
  images: string[];
  price: number;
  rating: number;
  bedrooms: number;
  max_adults: number;
  is_premium: boolean;
  is_favorite: boolean;
  preview_image: string;
}

export interface City {
  name: string;
  location: Location;
}

export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface Host {
  id: number;
  name: string;
  is_pro: boolean;
  avatar_url: string;
}
