import cllRest from '.';

const runTest = async () => {
  const loyalty = cllRest('c99c9ffb-f646-41ff-91c8-d04c83af7d31');

  await loyalty
    .createMerchant({
      name: 'Barnets',
      description:
        'I get a lot of people asking me how i started my business and it all started with my mother in laws 60th Birthday. I was looking into companies that offered balloon decorating services and after doing my research i decided i would try and give it a go myself.',
      logoUrl: 'https://renewplanning.co.uk/wp-content/uploads/2016/01/11.-Barnet-logo.png',
      image:
        'https://s3.eu-west-2.amazonaws.com/luxurylondon.co.uk-storage-bucket-001/images/articles-body/224/haris-hair-salon-fulham-road-london.jpg',
      websiteUrl: 'https://www.barnets.co.uk',
    })
    .then(({ id }) =>
      loyalty.createLocation({
        merchantId: id,
        address1: '159 Bridgewater Rd',
        town: 'Walkden',
        postalCode: 'M28 3AF',
        country: 'GBR',
      }),
    );
};

runTest();
