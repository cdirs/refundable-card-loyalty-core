export const getLocationsByPosition = (longitude: number, latitude: number) => `
    {
      locationsByPosition(longitude:${longitude},latitude:${latitude}) {
        id
        address1
        town
        postalCode
        country
        longitude
        latitude
        distance
        merchant {
          name
          description
          websiteUrl
          image
          logoUrl
        }
      }
    }
  `;
