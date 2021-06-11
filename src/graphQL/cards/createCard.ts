import {Card} from '@cll.rest/types';

export const createCard = (card: Card) => `
    mutation {
      addCard(userId:"${card.userId}", cardNumber:"${card.cardNumber}", expiryMonth:${card.expiryMonth}, expiryYear:${card.expiryYear}) {
        id
        lastDigits
        expiryMonth
        expiryYear
        type
        active
      }
    }
  `;
