export const getLocationsByMerchant = (merchantId: string) => `
    {
      locationsByMerchant(merchantId:"${merchantId}") {
        id
        address1
        town
        postalCode
        country
        longitude
        latitude
      } 
    }
  `;
