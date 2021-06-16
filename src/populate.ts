import cllRest from '.';

const runTest = async () => {
  const loyalty = cllRest('c99c9ffb-f646-41ff-91c8-d04c83af7d31');

  await loyalty
    .createMerchant({
      name: 'Subway',
      description: 'Damn good sarnies.',
      logoUrl: 'https://logos-download.com/wp-content/uploads/2016/03/Subway_logo_white.png',
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-subway-sub-1521220946.jpg',
      websiteUrl: 'https://www.website.co.uk',
    })
    .then(({ id }) =>
      loyalty.createLocation({
        merchantId: id,
        address1: '215 Eccles Old Rd',
        town: 'Salford',
        postalCode: 'M6 8HA',
        country: 'GBR',
      }),
    );
};

runTest();
