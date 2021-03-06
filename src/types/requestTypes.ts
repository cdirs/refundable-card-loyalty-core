import { Brand, Card, Location, Merchant, Transaction } from '@cll.rest/types';

type RequestTypes = {
  getBrands: () => Promise<Brand[]>;
  getCards: (userId: string) => Promise<Card[]>;
  createCard: (card: Card) => Promise<Card>;
  getMerchants: () => Promise<Merchant[]>;
  createMerchant: (merchant: Merchant) => Promise<{ id: string }>;
  getMerchantsByCategory: (categoryId: string) => Promise<Merchant[]>;
  createLocation: (location: Location) => Promise<Location>;
  getLocationsByMerchant: (merchantId: string) => Promise<Location[]>;
  getLocationsByPosition: (longitude: number, latitude: number) => Promise<Location[]>;
  getTransactions: (userId: string) => Promise<Transaction[]>;
};

export default RequestTypes;
