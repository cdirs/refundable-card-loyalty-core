import { Merchant } from '@cll.rest/types';

import { GraphQL } from '../..';
import { Query } from '../axios';

export const CreateMerchant = async (
  apikey: string,
  merchant: Merchant,
  staging: boolean = false,
): Promise<{ id: string }> =>
  Query<'addMerchant', { id: string }>(GraphQL.createMerchant(merchant), apikey).then((res) => res.addMerchant);
