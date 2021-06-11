import { Brand, Card, Location, Merchant } from '@cll.rest/types';

type RequestTypes = {
  getBrands: () => Promise<Brand[]>;
  getCards: (userId: string) => Promise<Card[]>;
  createCard: (card: Card) => Promise<Card>;
  getMerchants: () => Promise<Merchant[]>;
  getMerchantsByCategory: (categoryId: string) => Promise<Merchant[]>;
  createLocation: (location: Location) => Promise<Location>;
  getLocationsByMerchant: (merchantId: string) => Promise<Location[]>;
  getLocationsByPosition: (longitude: number, latitude: number) => Promise<Location[]>;
};

export default RequestTypes;
