import {GraphQL} from '../..';
import {Query} from '../axios';

export const DeleteCard = async (
  apikey: string,
  cardId: string,
  staging: boolean = false,
): Promise<{ success: boolean }> =>
  Query<'deleteCard', { success: boolean }>(GraphQL.deleteCard(cardId), apikey).then((res) => res.deleteCard);
