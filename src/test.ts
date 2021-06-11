import cllRest from '.';

const runTest = async () => {
  const loyalty = cllRest('c99c9ffb-f646-41ff-91c8-d04c83af7d31');

  // await loyalty.getBrands().then(console.log).catch(console.error);
  // await loyalty.getCards('TESTUSER').then(console.log).catch(console.error);

  // await loyalty.getMerchants().then(console.log).catch(console.error);
  // await loyalty.getMerchantsByCategory('asdasdasd').then(console.log).catch(console.error);

  // await loyalty
  //   .createLocation({
  //     merchantId: 'sBxkUofebHY9Zgs8R27z',
  //     address1: 'Peter House, Oxford Street',
  //     town: 'Manchester',
  //     postalCode: 'M1 5AN',
  //     country: 'GBR',
  //   })
  //   .then(console.log)
  //   .catch(console.error);

  // await loyalty.getLocationsByMerchant('sBxkUofebHY9Zgs8R27z').then(console.log).catch(console.error);
  // await loyalty.getLocationsByPosition(-0.1318224, 51.5138332).then(console.log).catch(console.error);

  await loyalty
    .createCard({ userId: 'NEWUSER', cardNumber: '4444000000004202', expiryMonth: 10, expiryYear: 2025 })
    .then(console.log)
    .catch(console.error);
};

runTest();
