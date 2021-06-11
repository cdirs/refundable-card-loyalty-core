export const getTransactions = (userId: string) => `
    {
      transactions(userId:"${userId}") {
        id
        created
        auth
        cleared
        amount
        currency
      }
    }
  `;
