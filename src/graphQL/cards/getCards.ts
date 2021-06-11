export const getCards = (userId: string) => `
    {
      cards(userId:"${userId}") {
        id
        lastDigits
        expiryMonth
        expiryYear
        type
        active
      } 
    }
  `;
