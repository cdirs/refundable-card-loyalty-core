import { Location } from '@cll.rest/types';

import { GraphQL } from '../..';
import { Query } from '../axios';

export const GetLocationsByMerchant = async (
  apikey: string,
  merchantId: string,
  staging: boolean = false,
): Promise<Location[]> =>
  Query<'locationsByMerchant', Location[]>(GraphQL.getLocationsByMerchant(merchantId), apikey).then(
    (res) => res.locationsByMerchant,
  );
