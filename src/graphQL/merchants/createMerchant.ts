import {Merchant} from '@cll.rest/types';

export const createMerchant = (merchant: Merchant) => `
    mutation {
      addMerchant(
        name:"${merchant.name}"
        description:"${merchant.description}"
        logoUrl:"${merchant.logoUrl}"
        image:"${merchant.image}"
        websiteUrl:"${merchant.websiteUrl}"
      ) {
        id
      }
    }
  `;
