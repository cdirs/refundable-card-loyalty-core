import {Card, Location} from '@cll.rest/types';

import {
  CreateCard,
  CreateLocation,
  GetBrands,
  GetCards,
  GetLocationsByMerchant,
  GetLocationsByPosition,
  GetMerchants,
  GetTransactions,
} from './requests';
import RequestTypes from './types/requestTypes';

export * as GraphQL from './graphql';
export * from './requests';

export default (apiKey: string, staging: boolean = false): RequestTypes => {
  return {
    getBrands: () => GetBrands(apiKey, staging),
    getCards: (userId: string) => GetCards(apiKey, userId, staging),
    createCard: (card: Card) => CreateCard(apiKey, card, staging),
    getMerchants: () => GetMerchants(apiKey, staging),
    getMerchantsByCategory: (categoryId: string) => GetMerchants(apiKey, staging),
    createLocation: (location: Location) => CreateLocation(apiKey, location, staging),
    getLocationsByMerchant: (merchantId: string) => GetLocationsByMerchant(apiKey, merchantId, staging),
    getLocationsByPosition: (longitude: number, latitude: number) =>
      GetLocationsByPosition(apiKey, longitude, latitude, staging),
    getTransactions: (userId: string) => GetTransactions(apiKey, userId, staging),
  };
};
