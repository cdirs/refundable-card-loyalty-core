import {Card} from '@cll.rest/types';

import {GraphQL} from '../..';
import {Query} from '../axios';

export const GetCards = async (apikey: string, userId: string, staging: boolean = false): Promise<Card[]> =>
  Query<'cards', Card[]>(GraphQL.getCards(userId), apikey).then((res) => res.cards);
