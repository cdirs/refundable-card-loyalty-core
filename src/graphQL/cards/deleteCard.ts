export const deleteCard = (cardId: string) => `
    mutation {
      deleteCard(cardId:"${cardId}") {
        success
      }
    }
  `;
