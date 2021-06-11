import {Transaction} from '@cll.rest/types';

import {GraphQL} from '../..';
import {Query} from '../axios';

export const GetTransactions = async (
  apikey: string,
  userId: string,
  staging: boolean = false,
): Promise<Transaction[]> =>
  Query<'transactions', Transaction[]>(GraphQL.getTransactions(userId), apikey).then((res) => res.transactions);
