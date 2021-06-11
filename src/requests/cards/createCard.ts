import {Card} from '@cll.rest/types';

import {GraphQL} from '../..';
import {Query} from '../axios';

export const CreateCard = async (apikey: string, card: Card, staging: boolean = false): Promise<Card> =>
  Query<'addCard', Card>(GraphQL.createCard(card), apikey).then((res) => res.addCard);
