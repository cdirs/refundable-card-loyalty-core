import { Merchant } from '@cll.rest/types';

import { GraphQL } from '../..';
import { Query } from '../axios';

export const GetMerchants = async (apikey: string, staging: boolean = false): Promise<Merchant[]> =>
  Query<'merchants', Merchant[]>(GraphQL.getMerchants(), apikey).then((res) => res.merchants);
