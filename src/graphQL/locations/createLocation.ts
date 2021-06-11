import {Location} from '@cll.rest/types';

export const createLocation = (location: Location) => `
    mutation {
      addLocation(
        merchantId:"${location.merchantId}",
        address1:"${location.address1}",
        town:"${location.town}",
        postalCode:"${location.postalCode}",
        country:"GBR"
      ) {
        id
        address1
        town
        postalCode
        country
        merchantIds
      }
    }
  `;
